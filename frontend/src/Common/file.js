

export const FileLoaderType = ({ id, data, label }) => {
    return (
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label">{label}</label>
            <input className="form-control" type="file" id="formFile" />
        </div>
    )
}