import React, { useId, useReducer } from "react";

const inputClasses = `
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

const TextField = ({
  labelText = "No Label Text Defined",
  placeholder = "What is your message?",
  type = "text",
  inputState,
  formDispatch,
}) => {
  const id = useId();
  const handleChange = (e) => {
    e.preventDefault();
    formDispatch({
      type: "CHANGE",
      name: inputState.name,
      value: e.target.value,
    });
  };

  const isEmpty = inputState.state === "INTERACTED" && inputState.value === "";

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-grayish-dark-blue font-bold text-form-size"
        htmlFor={id}>
        {labelText}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className={`${inputClasses} ${isEmpty ? invalidClasses : ""}`}
        id={id}
        name={inputState.name}
        value={inputState.value}
        onChange={(e) => handleChange(e)}
        required></input>
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

export default TextField;
