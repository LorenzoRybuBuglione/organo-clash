import "./LabelInput.css";

const LabelInput = (props) => {
  const onChanging = (event) => {
    props.onTyping(event.target.value)
  }

  return (
    <div className="label-input">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onChanging}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default LabelInput;
