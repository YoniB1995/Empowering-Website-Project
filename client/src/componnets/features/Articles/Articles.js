import React, { useEffect, useState } from "react";
import "./Articles.css";
import { Link } from "react-router-dom";
import {
  deleteArticle,
  getAllArticles,
} from "../../../service/article-service";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((res) => res.json())
      .then((result) => setArticles(result));
  }, [reRender]);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Articles Lists & ID </h2>
      <Link to="Admin/AddArticle"> add article</Link>
      <main id="content" class="main-area">
        <ul class="cards1">
          {articles.map((article, i) => {
            return (
              <li class={`card1-item ${i % 4 === 0 && "double"}`}>
                <figure class="card1">
                  <img
                    src="https://source.unsplash.com/crVO0UMdoVU/600x600"
                    alt="Beach. Photo by Andreas Rønningen"
                  />
                  <figcaption class="caption">
                    <h3 class="caption-title">{article.markdown}</h3>
                    <div class="location">{article.title}</div>
                    <p>{article.description}</p>
                    <Link to={`/Article/${article._id}`}>read more</Link>
                  </figcaption>
                  <button>
                    <Link to={`/Admin/EditArticles/${article._id}`}>edit</Link>
                  </button>
                  <button
                    onClick={() => {
                      deleteArticle(article);
                      setReRender((old) => !old);
                    }}
                  >
                    delete
                  </button>
                </figure>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Articles;
