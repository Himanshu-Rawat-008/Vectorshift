
export const Button = ({ id, icon = '', label, disabled = false }) => {
    return (
        <button
            type="button"
            className={`btn btn-primary ${disabled ? 'disabled' : ""}`}
            data-bs-toggle="button"
            autoComplete="off"
        >
            {icon}
            {label}
        </button>
    )
}