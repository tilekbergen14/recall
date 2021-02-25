import { useState } from "react";
import styles from "../styles/CreateNote.module.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Editor } from "@tinymce/tinymce-react";

export default function CreateTask({ close }) {
  const [note, setNote] = useState({
    title: "",
    main_body: "",
    images: [],
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  const handleEditorChange = (content) => {
    setNote({ ...note, main_body: content });
  };
  return (
    <div className={styles.modal} onClick={close}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={submit}>
          <div
            className={`flex space-between align-items-center ${styles.header}`}
          >
            <input placeholder="Title" className={styles.title}></input>
            <AddCircleOutlineIcon className={styles.icon} />
          </div>
          <Editor
            apiKey="vg0xjcazbqoqck8epvkf9drt57lat3tyo4yycxzxupilmq1o"
            init={{
              max_height: 700,
              content_style:
                "body{font-family: 'Prata', serif;} h1, h2, h3, h4, h5, h6, p{ margin: 0 0 16px 0}",
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks fullscreen imagetools",
                "insertdatetime media table paste help wordcount codesample",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | fontselect | image imagetools |bullist numlist outdent indent | removeformat | help | codesample | blockquote | pre",
            }}
            onEditorChange={handleEditorChange}
          />
          <button className={`${styles.button} button`}>Create</button>
        </form>
      </div>
    </div>
  );
}
