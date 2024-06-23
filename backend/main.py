from fastapi import FastAPI, Form, HTTPException, Body
from pydantic import BaseModel, ValidationError
from typing import List
import networkx as nx
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],  # Replace with your React application's URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.get('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    return {'status': 'parsed'}


class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

# Define Pydantic model for the entire payload
class GraphData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# Endpoint to receive JSON data with nodes and edges
@app.post('/graph')
def process_graph_data(graph_data: GraphData):
    nodes = graph_data.nodes
    edges = graph_data.edges

    # Convert nodes and edges to a NetworkX DiGraph
    graph = nx.DiGraph()
    graph.add_nodes_from(node.id for node in nodes)
    graph.add_edges_from((edge.source, edge.target) for edge in edges)

    # Check if the graph is a Directed Acyclic Graph (DAG)
    try:
        # {num_nodes: int, num_edges: int, is_dag: bool}    
        if nx.is_directed_acyclic_graph(graph):
            return {'is_dag': True, 'num_nodes': len(nodes), 'num_edges': len(edges)}
        else:
            return {'is_dag': False, 'num_nodes': len(nodes), 'num_edges': len(edges)}
    except nx.NetworkXException as e:
        raise HTTPException(status_code=400, detail=f"Error processing graph: {str(e)}")