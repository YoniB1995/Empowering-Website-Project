import React from "react";
import "./workersCards.css";

const WorkersCards = () => {
  return (
    <>
      <section
        style={{ maxWidth: "1400px", width: "90%" }}
        className="container"
      >
        <div className="page-header">
          <h1>
            הצוות שלנו
            <br />
            {/* <small>designed by yuda</small> */}
          </h1>
        </div>
        <div className="row active-with-click">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Red">
              <h2>
                <span>רחלי טדסה מלכאי</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  The Deer Hunter
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img className="img-responsive" src="Racheli1.jpg" />
                </div>
                <div className="mc-description">
                  טדסה מלכאי – מנהלת קורס פיתוח ורכזת בוגרים בעמותת טק קריירה,
                  שמכשירה יוצאי אתיופיה להשתלבות בעולם ההייטק – פתחה את הקבוצה
                  אחרי ההפגנה הראשונה של יוצאי אתיופיה ב-2015, בשאיפה להעצים
                  נשים אתיופיות שסובלות מאפליה כפולה. "מבחינתי, הדבר שהכי חשוב
                  לשנות כרגע בישראל זה הגזענות, העניין של קבלת האחר", אומרת טדסה
                  מלכאי. "הייתי מצפה ממדינה שעברה שואה, שחרטה על דגלה את 'ואהבת
                  לרעך כמוך', להתנהג אחרת. בפועל יש קושי גדול לקבל את האחר. זה
                  מתחיל מזה שעל מרקע הטלוויזיה אין גיוון של צבע. מה אלמד את
                  ילדיי, כשהם לא רואים גיוון במסך שבו הם צופים? זה מחלחל אליהם.
                  הם מבינים שמשהו לא תקין, ולא מבינים למה הם לא רואים את עצמם.
                  ואם עוסקים בנושא של אברה מנגיסטו, מבינים שחיי אדם שחור שווים
                  פחות מחיי אדם לבן".
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>מנהלת העמותה</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Pink">
              <h2>
                <span>lorem lorem</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Mystic River
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/5668875/pexels-photo-5668875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  />
                </div>
                <div className="mc-description">
                  He has won two Academy Awards, for his roles in the mystery
                  drama Mystic River (2003) and the biopic Milk (2008). Penn
                  began his acting career in television with a brief appearance
                  in a 1974 episode of Little House on the Prairie ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Deep-Purple">
              <h2>
                <span>Dustin Hoffman</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Kramer vs. Kramer
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  He has been known for his versatile portrayals of antiheroes
                  and vulnerable characters.[3] He won the Academy Award for
                  Kramer vs. Kramer in 1979 ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Purple">
              <h2>
                <span>lorem lorem</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Million Dollar Baby
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  He rose to international fame with his role as the Man with No
                  Name in Sergio Leone's Dollars trilogy of spaghetti Westerns
                  during the 1960s ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Indigo">
              <h2>
                <span>Edward Norton</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  American History X
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/5668875/pexels-photo-5668875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  />
                </div>
                <div className="mc-description">
                  He has been nominated for three Academy Awards for his work in
                  the films Primal Fear, American History X and Birdman. He also
                  starred in other roles ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Blue">
              <h2>
                <span>Michael Caine</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Educated Rita
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/5668875/pexels-photo-5668875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  />
                </div>
                <div className="mc-description">
                  English actor and author. Renowned for his distinctive working
                  className cockney accent, Caine has appeared in over 115 films
                  and is regarded as a British ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Light-Blue">
              <h2>
                <span>Harvey Keitel</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Pulp Fiction
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/3727458/pexels-photo-3727458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  Some of his most notable starring roles were in Martin
                  Scorsese's Mean Streets and Taxi Driver, Ridley Scott's The
                  Duellists and Thelma & Louise, Quentin Tarantino ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div> */}
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Cyan">
              <h2>
                <span>Jack Nicholson</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  The Shining
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  Throughout his career, Nicholson has portrayed unique and
                  challenging roles, many of which include dark portrayals of
                  excitable, neurotic and psychopathic characters ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div> */}
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Cyan">
              <h2>
                <span>Jack Nicholson</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  The Shining
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  Throughout his career, Nicholson has portrayed unique and
                  challenging roles, many of which include dark portrayals of
                  excitable, neurotic and psychopathic characters ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default WorkersCards;
