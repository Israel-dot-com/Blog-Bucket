import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../../firebase";
import "./post.css";
function Post() {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [postText, setPostText] = useState("");

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      name,
      caption, 
      postText,
    });
  }
  


  return (
    <div className="post section__padding">
      <div className="blog__post">
        <h3 className="blogbucket">Blog Bucket</h3>

        <form className="flex__text">
          <div className="formtext">
            <label>Name:</label>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="formtext">
            <label>Caption:</label>
            <input
              type="text"
              onChange={(event) => {
                setCaption(event.target.value);
              }}
            />
          </div>
          <div className="formtext">
            <label>Post</label>
            <textarea
              type="text"
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>

          <div className="buttondiv">
            <button
              type="button"
              onClick={createPost}
              className="custom__button"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
