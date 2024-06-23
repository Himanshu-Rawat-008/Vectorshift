import { useState } from "react"
import { Button, HandleType, Header, InputType } from "../Common"
import { DEFAULT_BREAK_CONDITION, DEFAULT_CONDITION, DEFAULT_CONDITION_HANDLES } from "./constants"

export const ConditionNode = ({ id, data }) => {

    const [defaultCondition, setDefaultCondition] = useState({ Condition: 'Condition', Result: 'Then' });
    const [defaultBreak, setDefaultBreak] = useState('Else Result');


    const onAddCondition = () => {
        // Add Condition
    }
    const onRemoveCondition = () => {
        // Remove Condition
    }

    const onDefaultConditionChange = (key) => (v) => {
        setDefaultCondition({ ...defaultCondition, [key]: v.currentTarget.value })
    }

    const onChangeDefaultBreak = (e) => {
        setDefaultBreak(e.currentTarget.value)
    }

    return (
        <div className="card">
            <div className="card-body">
                <HandleType
                    id={id}
                    data={DEFAULT_CONDITION_HANDLES}
                // can increase handels based on results
                />
                <Header
                    id={id}
                    title="Condition"
                />
                <div className="d-flex">
                    <div className="me-2">
                        <InputType
                            id={id}
                            label={DEFAULT_CONDITION.Condition}
                            value={defaultCondition.Condition}
                            handleChange={onDefaultConditionChange("Condition")}
                        />
                    </div>
                    <div className="ms-2">
                        <InputType
                            id={id}
                            label={DEFAULT_CONDITION.Result}
                            value={defaultCondition.Result}
                            handleChange={onDefaultConditionChange("Result")}
                        />
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <InputType
                        id={id}
                        label={DEFAULT_BREAK_CONDITION.Result}
                        value={defaultBreak}
                        handleChange={onChangeDefaultBreak}
                    />
                </div>
                <div className="d-flex justify-content-around">
                    <Button
                        onClick={onAddCondition}
                        label="Add Condition"
                    />
                    <Button
                        onClick={onRemoveCondition}
                        disabled={true}
                        label="Remove Condition"
                    />
                </div>
            </div>
        </div>
    )
}