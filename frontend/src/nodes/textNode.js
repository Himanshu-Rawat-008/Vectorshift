import { useEffect, useState } from "react";
import { HandleType, Header, Textarea } from "../Common"
import { findVariables } from './Utils';
import { TEXT_NODE_LISTS, HANDLE_INPUT } from "./constants";

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [handlesList, setHandlesList] = useState(TEXT_NODE_LISTS);
    const [variables, setVariables] = useState([]);

    const onChangeText = (e) => {
        e.currentTarget.style.overflow = "Hidden";
        e.currentTarget.style.height = "100%";
        e.target.parentElement.style.height = e.currentTarget.scrollHeight + "px"
        setCurrText(e.currentTarget.value);
    }

    useEffect(() => {
        setVariables(findVariables(currText));
    }, [currText]);

    useEffect(() => {
        const userDefinedHandles = variables.map((_, i) => ({ type: HANDLE_INPUT.TARGET, value: `variables` }))
        setHandlesList([...TEXT_NODE_LISTS, ...userDefinedHandles]);
    }, [variables]);

    return (
        <div className="card">
            <div className="card-body">
                <HandleType
                    id={id}
                    data={handlesList}
                />
                <Header
                    id={id}
                    title="Text"
                />
                <Textarea
                    id={id}
                    label="Text"
                    value={currText}
                    handleChange={onChangeText}
                />
            </div>
        </div>
    )
}