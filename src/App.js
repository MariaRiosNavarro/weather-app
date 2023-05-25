import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newData) {
    setActivities([...activities, { ...newData, id: uid() }]);
  }

  // onAddActivity is a Prop of Form and we give the function as value.

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
