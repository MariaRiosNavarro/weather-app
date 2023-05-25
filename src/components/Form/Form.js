import "./Form.css";

export default function Form(onAddActivity) {


//form data

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataJSON = Object.fromEntries(formData);
    onAddActivity(dataJSON);
    // console.log(dataJSON.name);
    // console.log(dataJSON.isForGoodWeather);
    
    event.target.reset();
    event.target.name.focus();
  }

 //DONFORGET- Hint: To get the boolean value of a checkbox, use .checked.


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
