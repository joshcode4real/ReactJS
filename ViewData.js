import React, { useState, useEffect } from "react";
import axios from "./axios";

function ViewData() {
  const [formData, setFormData] = useState([]);

  const getData = async () => {
    const res = await axios.get("/");
    console.log(res);
    if (res.data) {
      return setFormData(res.data);
    }
  };

  const deletePost = async (_id) => {
    const res = await axios.delete(`/${_id}`, formData);
    if (res.data) {
      return getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        {formData.map((post) => (
          <div>
            <div>{post.title} </div>
            <div>{post.task} </div>
            <button>Edit</button>
            <button
              onClick={(_id) => {
                console.log("You just click me" + post._id);
                deletePost(post._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewData;
