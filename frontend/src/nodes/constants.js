import { Position } from 'reactflow';

const Source = 'source';
const Target = 'target';


export const HANDLE_INPUT = {
    SOURCE: Source,
    TARGET: Target,
}

export const INPUT_NODE_OPTIONS = [{
    value: "Text",
    text: "Text",
}, {
    value: "File",
    text: "File",
}]

export const OUTPUT_NODE_OPTIONS = [{
    value: 'Text',
    text: 'Text',
}, {
    value: 'File',
    text: 'Image',
}]

export const KNOWLEDGE_BASE_OPTIONS = [{
    value: 'BASE 1',
    text: 'BASE 1',
}, {
    value: 'BASE 2',
    text: 'BASE 2',
}]

export const LLM_NODE_LISTS = [{
    type: HANDLE_INPUT.TARGET,
    value: 'system',
}, {
    type: HANDLE_INPUT.TARGET,
    value: 'prompt',
}, {
    type: HANDLE_INPUT.SOURCE,
    value: 'response'
}];

export const OUTPUT_NODE_LISTS = [{
    type: HANDLE_INPUT.TARGET,
    value: 'value'
}]

export const TEXT_NODE_LISTS = [{
    type: HANDLE_INPUT.SOURCE,
    value: 'output',
}]

export const KNOWLEDGE_BASE_HANDLES = [{
    type: HANDLE_INPUT.TARGET,
    value: 'GetKnowledge'
}, {
    type: HANDLE_INPUT.SOURCE,
    value: 'SendKnowledge'
}]

export const HANDLE_PROPS = {
    [Source]: {
        type: Source,
        position: Position.Right,
    },
    [Target]: {
        type: Target,
        position: Position.Left,
    }
}

export const FILE_LOADER_HANDLES = [{
    value: 'SendFile',
    type: HANDLE_INPUT.SOURCE,
}]

export const DEFAULT_CONDITION_HANDLES = [{
    type: HANDLE_INPUT.TARGET,
    value: 'condition'
}, {
    type: HANDLE_INPUT.SOURCE,
    value: 'if'
}, {
    type: HANDLE_INPUT.SOURCE,
    value: 'then'
}]

export const DEFAULT_CONDITION = {
    Condition: "if",
    Result: "then"
}

export const DEFAULT_BREAK_CONDITION = {
    Result: "else",
}

export const INPUT_NODE_HANDLES = [{
    value: 'sendInput',
    type: HANDLE_INPUT.SOURCE,
}]