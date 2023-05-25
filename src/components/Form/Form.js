import "./Form.css";

export default function Form({ onAddActivity }) {
  //form data
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataJSON = Object.fromEntries(formData);
    //the Prop is submitted with the data of the form.
    onAddActivity(dataJSON);

    // console.log(dataJSON.name);
    // console.log(dataJSON.isForGoodWeather);

    //We need a Boolean Value for the checkBox to separate the list later
    const dataChecked = {
      ...dataJSON,
      isForGoodWeather: dataJSON.isForGoodWeather === "on" ? true : false,
    };

    console.log(dataChecked);

    //reset and focus:
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form className="flex-column" onSubmit={handleSubmit}>
      <h4>Add new Activity</h4>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="isForGoodWeather">
        <input id="isForGoodWeather" type="checkbox" name="isForGoodWeather" />
      </label>
      <button id="addActivityButton" type="submit">
        Submit
      </button>
    </form>
  );
}
