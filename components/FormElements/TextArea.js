import React, { useId, useState } from "react";

const textAreaClasses = `
  bg-light-gray
  text-form-size
  font-normal
  px-4
  py-2

  focus:outline-cyan
  focus:outline-4

  required:focus:outline-bright-red
  required:focus:outline-2
  required:focus:outline 
  required:outline-bright-red
  required:outline-2
  required:outline 

`;

const TextArea = ({
  labelText = "No Label Text Defined",
  name = "ErrorNoName",
}) => {
  const id = useId();
  const [inputVal, setInputVal] = useState("");
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const isRequired = hasUserInteracted && inputVal === "";

  const handleChange = (e) => {
    e.preventDefault();
    if (!hasUserInteracted) setHasUserInteracted(true); //only runs on first interaction
    setInputVal(e.target.value);
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
        className={textAreaClasses}
        id={id}
        value={inputVal}
        onChange={(e) => handleChange(e)}
        required={isRequired}
        name={name}></textarea>
      {isRequired ? (
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
