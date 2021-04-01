import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    noteHead: "",
    noteBody: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(note);
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();

    setNote({
      noteHead: "",
      noteBody: ""
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="noteHead"
          placeholder="Title"
          value={note.noteHead}
        />
        <textarea
          onChange={handleChange}
          name="noteBody"
          placeholder="Take a note..."
          rows="3"
          value={note.noteBody}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
