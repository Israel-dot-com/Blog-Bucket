import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import "./post.css";
import { db } from "../../firebase";

function Post() {
    const [Name, setName] = useState("")
    const [Caption, setCaption] = useState("")
    const [postText, setpostText] = useState("")


    const postCollectionRef = collection(db, "posts")
    const createPost = async () => {
        await addDoc(postCollectionRef, {Name, Caption, postText} )
    }

  return (
    <div className="post section__padding">
      <div className="blog__post">
        <h3 className="blogbucket">Blog Bucket</h3>

        <form className="flex__text">
          <div className="formtext">
            <label >Name:</label>
            <input type="text" onChange={(event)=> {setName(event.target.value)}}  />
          </div>
          <div className="formtext">
            <label >Caption:</label>
            <input type="text" onChange={(event)=> {setCaption(event.target.value)}}  />
          </div>
          <div className="formtext">
            <label >Post</label>
            <textarea type="text" onChange={(event)=> {setpostText(event.target.value)}} />
          </div>

          <div className="buttondiv">
              <button onClick={createPost} className="custom__button">
                  Post
              </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Post;
