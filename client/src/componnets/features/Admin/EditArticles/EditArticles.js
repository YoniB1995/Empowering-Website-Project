import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  editArticle,
  getAllArticles,
} from "../../../../service/article-service";
import "./EditArticle.css";

const EditArticles = () => {
  const [article, setArticle] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [markdown, setMarkdown] = useState();
  const { id } = useParams();
  useEffect(() => {
    getAllArticles()
      .then((res) => res.json())
      .then((result) => {
        let founded = result.find((article) => article._id === id);
        setArticle(founded);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTitle(article?.title);
    setDescription(article?.description);
    setMarkdown(article?.markdown);
  }, [article]);

  useEffect(() => {
    setArticle((oldObj) => ({ ...oldObj, title, description, markdown }));
  }, [title, description, markdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(article);
    editArticle(article).then(() => {
      window.location.pathname = "/Articles";
    });
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        width: "100vw",
        zIndex: "1111",
      }}
    >
      <h1>עריכת מאמר</h1>
      <div id="form-main">
        <div id="form-div">
          <form onSubmit={handleSubmit} class="form" id="form1">
            <p class="title">
              <label htmlFor="title">title</label>
              <input
                name="title"
                type="text"
                class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </p>

            <p class="email">
              <label htmlFor="markdown">markdown</label>
              <input
                name="email"
                type="text"
                class="validate[required,custom[email]] feedback-input"
                id="email"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              />
            </p>

            <p class="text">
              <label htmlFor="description">description</label>
              <textarea
                name="description"
                class="validate[required,length[6,300]] feedback-input"
                id="comment"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </p>

            <div class="submit">
              <input type="submit" value="save changes" id="button-blue" />
              <div class="ease"></div>
            </div>
            <button>
              <Link to="/Articles">cancel</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditArticles;
