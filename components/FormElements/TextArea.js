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
  value: "",
};

const reducer = (state, action) => {
  switch (state.current) {
    case "IDLE":
      return { current: "INTERACTED", value: action.payload };
    case "INTERACTED":
      return { ...state, value: action.payload };
    default:
      console.error("something went wrong!");
  }
};

const TextArea = ({
  labelText = "No Label Text Defined",
  name = "ErrorNoName",
  value = "",
}) => {
  const [inputState, dispatch] = useReducer(reducer, initialInputState);
  const id = useId();

  const isEmpty =
    inputState.current === "INTERACTED" && inputState.value === "";

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({ payload: e.target.value });
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
        name={name}
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
