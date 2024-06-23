
import { useState } from 'react';
import { HandleType, Header, InputType } from '../Common'
import { LLM_NODE_LISTS } from './constants'



export const LLMNode = ({ id, data }) => {

    const [systemText, setSystemText] = useState('System');
    const [promptText, setPromptText] = useState('Prompt');

    const handlePromptText = (e) => {
        setPromptText(e.target.value);
    }

    const handleSystemText = (e) => {
        setSystemText(e.target.value);
    }

    return (
        <div className='card'>
            <div className='card-body pa-4'>
                <Header
                    id={id}
                    title="LLM"
                />

                <InputType
                    id={id}
                    label="System"
                    value={systemText}
                    handleChange={handleSystemText}
                />

                <InputType
                    id={id}
                    label="Prompt"
                    value={promptText}
                    handleChange={handlePromptText}
                />

                <HandleType
                    id={id}
                    data={LLM_NODE_LISTS}
                />
            </div>
        </div>
    )
}