import React, { useState, useEffect } from "react";
import axios from "./axios";

function AddEntry({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState([]);
  const [formText, setFormText] = useState({});

  const handleForm = (e) => {
    setFormText({ ...formText, [e.target.name]: e.target.value });
  };

  const postData = async () => {
    const result = await axios.post("/", formText);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        {isOpen ? (
          <div>
            <form onSubmit={postData}>
              <input
                name="title"
                placeholder="What task do you want to do"
                type="text"
                onChange={handleForm}
              />
              <input
                name="task"
                placeholder="Describe to task what you want to do"
                type="text"
                onChange={handleForm}
              />
              <input
                name="who"
                placeholder="who does what"
                type="text"
                onChange={handleForm}
              />
              <input
                name="startTime"
                placeholder="start up time"
                type="text"
                onChange={handleForm}
              />
              <input
                name="doneTime"
                placeholder="finishing time"
                type="text"
                onChange={handleForm}
              />
              <div>
                {" "}
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Cancel
                </button>
                <button onSubmit="text">Add</button>{" "}
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AddEntry;
