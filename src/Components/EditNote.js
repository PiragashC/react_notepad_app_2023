import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditNote = ({ notes, handleEditNote }) => {
  const [noteText, setNoteText] = useState("");
  const navigate = useNavigate();
  const characterLimit = 200;
  const {id} = useParams();
  const note = notes.find(note => (note.id).toString() == id );
  
  useEffect(() => {
    if (note) {
        setNoteText(note.text);
    }
  },[note, setNoteText])
  
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleEditNote(noteText, note.id);
      setNoteText("");
      navigate('/')
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNote;
