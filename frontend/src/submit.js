// submit.js

export const SubmitButton = ({ onClick }) => {

    const onClickSubmit = () => {
        onClick(true);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className="btn btn-primary" type="submit" onClick={onClickSubmit}>Submit</button>
        </div>
    );
}
