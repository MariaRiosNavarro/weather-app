import "./App.css";
import Form from "./components/Form/Form.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activityState, setActivityState] = useState("");

  function handleAddActivity(newActivity) {
    setActivityState([{ id: uid(), ...newActivity }, ...activityState]);
  }

  // onAddActivity is a Prop of Form and we give the function as value.

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
