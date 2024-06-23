
export const Textarea = ({
    id,
    data,
    label,
    value,
    handleChange,
}) => {
    return (
        <div className="form-floating">
            <textarea
                className="form-control"
                id="input"
                value={value}
                onChange={handleChange}
            />
            <label htmlFor="input" className="form-label">{label}</label>
        </div >
    );
};
