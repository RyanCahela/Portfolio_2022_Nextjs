import React, { useId, useReducer } from "react";

const textAreaClasses = `
  bg-light-gray
  text-form-size
  font-normal
  px-4
  py-2

  focus:outline-cyan
  focus:outline-4
`;

const invalidClasses = ` 
  invalid:focus:outline-bright-red
  invalid:focus:outline-2
  invalid:focus:outline 
  invalid:outline-bright-red
  invalid:outline-2
  invalid:outline
`;

const initialInputState = {
  current: "IDLE",
};

const reducer = (state) => {
  switch (state.current) {
    case "IDLE":
      return { current: "INTERACTED" };
    case "INTERACTED":
      //form will stay in this state after initial interaction by user.
      return { ...state };
    default:
      console.error("something went wrong!");
  }
};

const TextArea = ({
  labelText = "No Label Text Defined",
  formDispatch,
  inputState,
}) => {
  const id = useId();

  const isEmpty = inputState.state === "INTERACTED" && inputState.value === "";

  const handleChange = (e) => {
    e.preventDefault();
    formDispatch({
      type: "CHANGE",
      name: inputState.name,
      value: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-grayish-dark-blue font-bold text-form-size"
        htmlFor={id}>
        {labelText}
      </label>
      <textarea
        placeholder="What is your message?"
        className={`${textAreaClasses} ${isEmpty ? invalidClasses : ""}`}
        id={id}
        value={inputState.value}
        onChange={(e) => handleChange(e)}
        name={inputState.name}
        required></textarea>
      {isEmpty ? (
        <div className="text-bright-red font-bold italic pt-1 text-xxs">
          This field is required
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextArea;
