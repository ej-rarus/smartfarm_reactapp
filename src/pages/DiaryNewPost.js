import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DiaryNewPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://3.39.126.121:3000/diary", {
        post_title: title,
        author: author,
        content: content,
      });
      navigate("/diary"); // 글 작성 후 목록 페이지로 이동
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="new-post-form">
      <h1>새 글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>글쓴이:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>내용:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">작성</button>
      </form>
    </div>
  );
}

export default DiaryNewPost;
