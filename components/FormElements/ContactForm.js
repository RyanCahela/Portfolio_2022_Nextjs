import React, { useReducer } from "react";
import TextArea from "./TextArea";
import TextField from "./TextField";
import Title2 from "../Typography/Title2";
import Body1 from "../Typography/Body1";
import PrimaryButton from "../Buttons/PrimaryButton";

const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {};
  for (const [key, value] of formData.entries()) {
    // Get data from the form.
    data[key] = value;
  }

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

  try {
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (result.success) {
    }
  } catch (err) {
    console.error(err);
  }
};

const initialFormState = {
  current: "IDLE",
  values: {
    name: "",
    email: "",
    message: "",
  },
};

const reducer = (state, action) => {
  switch (state.current) {
    case "IDLE":
      if (action.type === "INPUT") {
        const newState = { ...state };
        newState.values[action.payload.key] = action.payload.value;
        console.log("new STate", newState);
        return newState;
      }
      break;
    case "VALIDATE":
      break;
    default:
      console.error(
        `somehting went wrong state.current = ${state.current} \n state = ${state} \n action = ${action}`
      );
  }
};

const ContactForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  //generalize dispatch function so 'key' can be specified as props below.
  const formValuesDispatch = ({ event, key }) => {
    const payload = {
      key: key,
      value: event.target.value,
    };
    dispatch({ type: "INPUT", payload });
  };

  return (
    <form
      className="border-t-2 border-t-light-gray pt-8 pb-20 flex flex-col gap-6"
      onSubmit={handleSubmit}
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
        name="nameOfPerson"
        value={formState.values.name}
        formValuesDispatch={(e) =>
          formValuesDispatch({ event: e, key: "name" })
        }
      />
      <TextField
        labelText="Email Address"
        placeholder="What is your Email?"
        name="emailAddress"
        type="email"
        value={formState.values.email}
        formValuesDispatch={(e) =>
          formValuesDispatch({ event: e, key: "email" })
        }
      />
      <TextArea
        labelText="Message"
        name="messageOfPerson"
        value={formState.values.message}
        formValuesDispatch={(e) =>
          formValuesDispatch({ event: e, key: "message" })
        }
      />
      <PrimaryButton textContent="Send Message" isIconVisible={false} />
      <div>Message Sent</div>
    </form>
  );
};

export default ContactForm;
