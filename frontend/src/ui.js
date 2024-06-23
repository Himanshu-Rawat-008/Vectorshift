// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import {
  InputNode,
  LLMNode,
  OutputNode,
  TextNode,
  NoteNode,
  KnowledgeBaseNode,
  UrlNode,
  FileLoaderNode,
  ConditionNode
} from './Nodes';
import { Notification } from './Common'
import 'reactflow/dist/style.css';
import { fetchGraphIsDAG } from './Queries';
import { getContent } from './Nodes/Utils';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  note: NoteNode,
  knowledgeBase: KnowledgeBaseNode,
  url: UrlNode,
  fileLoader: FileLoaderNode,
  condition: ConditionNode
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = ({ isSubmit, onChangeIsSubmit }) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);


  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  }

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    // eslint-disable-next-line
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const [response, setResponse] = useState({
    open: false,
    label: 'Result',
    content: '',
  });

  useEffect(() => {
    if (isSubmit) {
      fetchGraphIsDAG(
        edges.map(({ source, target, id }) => ({ source, target, id })),
        nodes.filter(({ id }) => id)
      ).then((res) => {
        onChangeIsSubmit(false)
        setResponse({ ...response, open: true, content: getContent(res.data) });
      }
      );
    }
    // eslint-disable-next-line
  }, [isSubmit])

  const onClickCloseNotification = useCallback(() => {
    setResponse({ ...response, open: false });
  }, [response]);

  return (
    <>
      <div ref={reactFlowWrapper} style={{ width: '100wv', height: '70vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType='smoothstep'
        >
          <Background color="#aaa" gap={gridSize} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      {
        response.open &&
        <Notification
          label={response.label}
          content={response.content}
          onClickClose={onClickCloseNotification}
        />
      }
    </>
  )
}
