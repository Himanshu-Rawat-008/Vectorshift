import { useState } from 'react';
import {
    InputType, Header, SelectionType,
    HandleType,
} from '../Common';
import { INPUT_NODE_OPTIONS, INPUT_NODE_HANDLES } from './constants';

export const InputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(
        data.name || id.replace("customInput-", "input_")
    );

    const [selectedValue, setSelectedValue] = useState('text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const onChangeSelectedValue = (v) => {
        setSelectedValue(v.currentTarget.value);
    }

    return (
        <div
            className='card'
        >
            <div className='card-body'>
                <Header
                    id={id}
                    title="Input"
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
                    value={selectedValue}
                    onChange={onChangeSelectedValue}
                    options={INPUT_NODE_OPTIONS}
                />
                <HandleType
                    id={id}
                    data={INPUT_NODE_HANDLES}
                />
            </div>
        </div>
    );
};
