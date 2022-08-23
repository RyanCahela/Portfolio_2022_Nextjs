import React, { useReducer } from "react";
import TextArea from "./TextArea";
import TextField from "./TextField";
import Title2 from "../Typography/Title2";
import Body1 from "../Typography/Body1";
import PrimaryButton from "../Buttons/PrimaryButton";

const handleSubmit = async (event, formDispatch, formState) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault();

  const data = {
    nameOfPerson: formState.nameOfPerson,
    emailAddress: formState.emailAddress,
    messageOfPerson: formState.messageOfPerson,
  };

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data);

  // API endpoint where we send form data.
  const endpoint = "/api/contactForm";

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  };
  formDispatch({ type: "SUBMIT" });
  try {
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log("result", result);
    if (result.success) {
      formDispatch({ type: "SUCCESS" });
    } else {
      formDispatch({ type: "ERROR" });
    }
  } catch (err) {
    formDispatch({ type: "ERROR" });
    console.error(err);
  }
};

//STATES = "IDLE", "SUBMITTING", "SUCCESS", "ERROR"
const initialFormState = {
  current: "IDLE",
  message: "",
  messageClassName: "",
  inputName: "", //inputValue
  nameOfPerson: {
    name: "nameOfPerson",
    state: "IDLE",
    value: "",
  },
  emailAddress: {
    name: "emailAddress",
    state: "IDLE",
    value: "",
  },
  messageOfPerson: {
    name: "messageOfPerson",
    state: "IDLE",
    value: "",
  },
};

const reducer = (state, action) => {
  switch (state.current) {
    case "IDLE":
      if (action.type === "CHANGE") {
        const newState = { ...state };
        newState[action.name] = {
          state: "INTERACTED",
          value: action.value,
          name: action.name,
        };
        return newState;
      }
      if (action.type === "SUBMIT") {
        return {
          ...state,
          current: "SUBMITTING",
          message: "Sending your message",
        };
      }
      break;
    case "SUBMITTING":
      if (action.type === "SUCCESS") {
        return {
          current: "SUCCESS",
          message: "Your message has been sent.",
          messageClassName: "text-green-700 text-2xl",
          nameOfPerson: {
            name: "nameOfPerson",
            value: "",
            state: "IDLE",
          },
          messageOfPerson: {
            name: "messageOfPerson",
            value: "",
            state: "IDLE",
          },
          emailAddress: {
            name: "emailAddress",
            value: "",
            state: "IDLE",
          },
        };
      }
      if (action.type === "ERROR") {
        return {
          ...state,
          current: "ERROR",
          message:
            "There was an error processing your message, if this continues please email ryancahela@gmail.com",
          messageClassName: "text-bright-red text-2xl",
        };
      }
      break;
    case "SUCCESS":
      if (action.type === "CHANGE") {
        const newState = { ...state };
        newState[action.name] = {
          value: action.value,
          name: action.name,
          state: "INTERACTED",
        };
        newState.current = "IDLE";
        return newState;
      }
      if (action.type === "SUBMIT") {
        return {
          ...state,
          current: "SUBMITTING",
          message: "The message was already sent successfully",
        };
      }
    case "ERROR":
      if (action.type === "SUBMIT") {
        return {
          current: "SUBMITTING",
          message: "Sending Message",
        };
      }
      if (action.type === "CHANGE") {
        const newState = { ...state };
        newState[action.inputName] = action.inputValue;
        newState.current = "IDLE";
        return newState;
      }
    default:
      console.error(
        `something went wrong state.current = ${state.current} \n state = ${state} \n action = ${action.type}`
      );
      return state;
  }
};

const ContactForm = () => {
  const [formState, formDispatch] = useReducer(reducer, initialFormState);

  return (
    <form
      className="border-t-2 border-t-light-gray pt-8 pb-20 flex flex-col gap-6"
      onSubmit={(e) => handleSubmit(e, formDispatch, formState)}
      method="POST"
      action="/api/contactForm"
      encType="multipart/form-data">
      <Title2>Contact Me</Title2>
      <Body1>
        The form below will send an email to my personal inbox. If you prefer to
        use your own email client you can send an email to ryancahela@gmail.com
      </Body1>
      <TextField
        labelText="Name"
        placeholder="What is your name?"
        inputState={formState["nameOfPerson"]}
        formDispatch={formDispatch}
      />
      <TextField
        labelText="Email Address"
        placeholder="What is your Email?"
        inputState={formState["emailAddress"]}
        formDispatch={formDispatch}
        type="email"
      />
      <TextArea
        labelText="Message"
        inputState={formState["messageOfPerson"]}
        formDispatch={formDispatch}
      />
      <PrimaryButton textContent="Send Message" isIconVisible={false} />
      <div className={formState.messageClassName}>{formState.message}</div>
      <div>{formState.current}</div>
    </form>
  );
};

export default ContactForm;
