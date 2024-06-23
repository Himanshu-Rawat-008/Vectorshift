import { HandleType, Header, InputType, SelectionType } from "../Common"
import { OUTPUT_NODE_LISTS, OUTPUT_NODE_OPTIONS } from "./constants"
import { useState } from "react";


export const OutputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(
        data.name || id.replace("customOutput-", "output_")
    );

    const [selectedValue, setSelectedValue] = useState('text')

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const onChangeSelectedValue = (v) => {
        setSelectedValue(v.currentTarget.value);
    }

    return (
        <div className="card">
            <div className="card-body">
                <HandleType
                    id={id}
                    data={OUTPUT_NODE_LISTS}
                />
                <Header
                    id={id}
                    title="Output"
                />
                <InputType
                    id={id}
                    label="Name"
                    value={currName}
                    handleChange={handleNameChange}
                />
                <SelectionType
                    id={id}
                    label="Type"
                    options={OUTPUT_NODE_OPTIONS}
                    value={selectedValue}
                    onChange={onChangeSelectedValue}
                />
            </div>
        </div>
    )
}