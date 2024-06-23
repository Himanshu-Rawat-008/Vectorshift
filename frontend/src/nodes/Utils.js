export function findVariables(text) {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [];
    let match;
    // eslint-disable-next-line
    while (match = regex.exec(text)) {
        matches.push(match[1]); // Push the matched variable name
    }

    return matches;
}

export const isValidUrl = urlString => {
    var inputElement = document.createElement('input');
    inputElement.type = 'url';
    inputElement.value = urlString;

    if (!inputElement.checkValidity()) {
        return false;
    } else {
        return true;
    }
}

export const getContent = ({ num_edges, num_nodes, is_dag }) => {
    return (
        <div>
            <div>Number of Edges: {num_edges}.</div>
            <div>Number of Nodes: {num_nodes}.</div>
            <div>Is Directed Acyclic Graph? {Boolean(is_dag) ? 'Yes' : 'No'} </div>
        </div>
    )
}