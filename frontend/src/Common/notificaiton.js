

export const Notification = ({ label, content, onClickClose }) => {
    return (
        <div className="notification toast show  text-white bg-primary translate-middle-x" role="alert" aria-live="assertive" aria-atomic="true">
            {label && <div className="toast-header">{label}</div>}

            <div className="d-flex">
                <div className="toast-body">
                    {content}
                </div>
                <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    onClick={onClickClose}
                />
            </div>
        </div>
    )
}