import axios from "axios";

export function isGraphDAG(nodes, edges) {
  const url = "http://127.0.0.1:8000/graph";
  return axios.post(url, { nodes, edges });
}
