import { MdDeleteForever } from "react-icons/md";
const Note = ({ date, text, handleDelete, id }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          onClick={() => handleDelete(id)}
          size="1.3rem"
        />
      </div>
    </div>
  );
};
export default Note;
