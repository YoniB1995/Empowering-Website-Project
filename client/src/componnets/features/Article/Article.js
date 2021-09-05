import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles } from "../../../service/article-service";
import "./Article.css";

const Article = () => {
  const [article, setArticle] = useState();
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
  return (
    <>
      <section id="article">
        <div class="container">
          <div class="page-container">
            <article class="article">
              <img
                src="https://source.unsplash.com/crVO0UMdoVU/600x600"
                alt=""
              />
              <h1 class="l-heading">{article?.title}</h1>
              <div class="meta">
                <small>
                  <i class="fas fa-user"></i> Written By Yuda
                </small>
                <div class="category category-ent">Entertainment</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                debitis beatae ad doloremque voluptate, blanditiis suscipit
                error quam fugit sapiente, aliquid quia libero incidunt
                recusandae enim voluptas nulla sequi similique? Temporibus ad
                est minima magni molestias obcaecati consequatur cumque
                exercitationem deleniti eos, animi facere recusandae, pariatur
                eveniet neque? Voluptatem, molestias.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                dignissimos dolorum ipsam corporis similique! Quis, esse minus?
                Ducimus tempore provident sunt officia? Velit temporibus harum
                voluptate, ipsum quisquam rerum doloremque consectetur quos
                incidunt deleniti dicta excepturi ratione, fugiat ad fuga in nam
                dolorum aut minus esse voluptatum suscipit et quae. Repellendus
                minus, ratione aperiam commodi voluptas iusto aliquam sapiente.
                Aut obcaecati, corporis praesentium porro nostrum excepturi
                animi repellendus incidunt non quis nisi assumenda voluptas
                possimus molestiae laboriosam iure sed architecto in perferendis
                magnam blanditiis voluptatum placeat labore odio? Unde id dolore
                aliquam, quas sit harum, saepe maiores facilis aliquid molestiae
                qui. Praesentium rerum, minima fugit laudantium quaerat
                voluptatem pariatur sequi saepe blanditiis nobis natus possimus
                quo, assumenda numquam sit, eaque accusamus incidunt
                exercitationem quis deleniti quisquam corrupti vel? Ut quisquam
                consequatur, doloribus voluptatibus iusto quaerat, sint non
                magnam reiciendis amet quos sapiente excepturi omnis laboriosam
                nobis, expedita delectus odio provident?
              </p>
            </article>

            <aside id="categories" class="article">
              <h2>Categories</h2>
              <ul class="list">
                <li>
                  <a href="#">
                    <i class="fas fa-chevron-right"></i> Sports
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-chevron-right"></i> Entertainment
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-chevron-right"></i> Technology
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-chevron-right"></i> Fashion
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-chevron-right"></i> Shopping
                  </a>
                </li>
              </ul>
            </aside>

            <aside class="article bg-secondary">
              <h2>Join Our Club</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
                id?
              </p>
              <a href="#" class="btn btn-dark btn-block">
                Join Now
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
