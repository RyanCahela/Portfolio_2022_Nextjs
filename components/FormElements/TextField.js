import React, { useId, useState } from "react";

const inputClasses = `
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

const TextField = ({
  labelText = "No Label Text Defined",
  placeholder = "What is your message?",
  name = "errorNoName",
  type = "text",
  value = "",
  formValuesDispatch,
}) => {
  const id = useId();
  const isRequired = true;
  const handleChange = (e) => {
    e.preventDefault();
    formValuesDispatch(e);
  };

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
        className={inputClasses}
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        required={isRequired}></input>
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

export default TextField;
