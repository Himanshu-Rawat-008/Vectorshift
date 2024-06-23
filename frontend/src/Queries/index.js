import { QueryClient } from "react-query";
import { isGraphDAG } from "./httpClient";

const queryClient = new QueryClient();

export function fetchGraphIsDAG(edges, nodes) {
  return queryClient.fetchQuery(
    [nodes, edges],
    () => isGraphDAG(nodes, edges),
    {
      cacheTime: 10 * 60000,
      staleTime: 10 * 60000,
    }
  );
}
