import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <Link to={`/edit/${id}`}>
        <button className="save">Edit</button>
        </Link>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
