export const InputType = ({
  id,
  data,
  label,
  value,
  handleChange,
  type = 'text',
  error = '',
}) => {

  return (
    <div className="form-floating">
      <input
        className={`form-control ${error.length ? 'is-invalid' : ''}`}
        id="input"
        type={type}
        value={value}
        onChange={handleChange}
        aria-describedby="validation"
      />
      <label htmlFor="input">{label}</label>
      <div
        id="validation" className="invalid-feedback"
      >
        {error}
      </div>
    </div >
  );
};
