import { useState } from "react";
import { Header, Textarea } from "../Common"

export const NoteNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || 'Note');

    const onChangeText = (e) => {
        e.currentTarget.style.overflow = "Hidden";
        e.currentTarget.style.height = "100%";
        e.target.parentElement.style.height = e.currentTarget.scrollHeight + "px"
        setCurrText(e.currentTarget.value);
    }

    return (
        <div className="card">
            <div className="card-body">
                <Header
                    id={id}
                    title="Note"
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