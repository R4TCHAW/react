import React, { useState } from "react";
import axios from "axios";

import "../styles/popup.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const savePopup = async (event) => {
    event.preventDefault();
    if (!title || !content) {
      alert("fill in the form");
      return;
    }

    try {
      const response = await axios.post(
        "/api/form",
        {
          title,
          content,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      const data = response.data;
      console.log(data);
      setTitle("");
      setContent("");
      closePopup();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='pop-btn'>
        <button onClick={openPopup}>create</button>
      </div>

      {isOpen && (
        <div className='popup'>
          <form className='doc-form'>
            <label htmlFor='title'>Title</label>
            <input required id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor='content'>Content</label>
            <textarea required id='content' rows='5' value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={closePopup}>Close</button>
            <button onClick={savePopup}>Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Popup;
