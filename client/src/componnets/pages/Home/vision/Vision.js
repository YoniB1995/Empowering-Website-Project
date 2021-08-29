import "./vision.css";
import "animate.css";
const Vision = () => {
  return (
    <div className="vision">
      <div className="vision-header">
        <h3>החזון שלנו</h3>
      </div>
      <div className="vision-container">
        <div className="vision-paragraph">
          <div className="vision-content  animate__animated animate__bounceInLeft">
            הקבוצה הוקמה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיות החזקות,
            <br />
            האצילות והמוצלחות למרות שלפעמים איננו מעריכות מספיק את עצמנו ויש
            בידינו
            <br /> הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את השנייה
            ולהצליח יחד. <br />
            האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכת שבא) יכולה לסייע בהעלאת
            נושאים חברתיים ואישיים הקשורים לעדה ובעיקר יכולה להביא למינוף והצלחה
            של כל אחת ואחת.
          </div>
        </div>
        <div className="img-vision-container  animate__animated animate__bounceInRight">
          <img src="./logo-EEW.jpg" id="vision-img" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
