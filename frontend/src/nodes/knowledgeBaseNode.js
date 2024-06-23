import { useState } from "react";
import { Header, Button, SelectionType, HandleType } from "../Common"
import { IoMdAdd } from 'react-icons/io';
import { KNOWLEDGE_BASE_HANDLES, KNOWLEDGE_BASE_OPTIONS } from "./constants";

export const KnowledgeBaseNode = ({ id, data }) => {
    const [selectedValue, setSelectedValue] = useState('BASE 1');

    const onClickAdd = () => {
        // Add more knowledge bases
    }

    const onChangeSelectedValue = (v) => {
        setSelectedValue(v.currentTarget.value);
    }

    return (
        <div className="card">
            <div className="card-body">
                <Header
                    id={id}
                    title="Knowledge Base Reader"
                />
                <HandleType
                    id={id}
                    data={KNOWLEDGE_BASE_HANDLES}
                />
                <SelectionType
                    id={id}
                    value={selectedValue}
                    label="Knowledge Base"
                    onChange={onChangeSelectedValue}
                    options={KNOWLEDGE_BASE_OPTIONS}
                />

                <Button
                    icon={<IoMdAdd />}
                    onClick={onClickAdd}
                    label="Add Knowledge Base"
                />

            </div>
        </div>
    )
}