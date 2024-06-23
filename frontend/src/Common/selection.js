import { Form } from "react-bootstrap";

export const SelectionType = ({ label, options, onChange, value, type = null }) => {

  return (
    <div className="form-floating">
      <Form.Select
        id="selection"
        placeholder=""
        value={value}
        onChange={onChange}
      >  {
          options.map((option) => <option key={option.value} value={option.value}>{option.text || option.value}</option>)
        }</Form.Select>
      <label htmlFor="selection">{label}</label>
    </div >
  );
};
