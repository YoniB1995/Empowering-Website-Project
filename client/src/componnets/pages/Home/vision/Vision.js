import './vision.css'
import VerticalImgCard from "../../../features/vertical-img-card/VerticalImgCard"
const Vision =()=>{
  const title="חזון"
  const img="./vision-vector.jpg" 

  const description=" הקמתי את הקבוצה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיותהחזקות , האצילות והמוצלחו,למרות שלפעמים איננו מעריכות מספיק את עצמנו) ויש בידינו הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את השנייה ולהצליח יחד. האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכתשבא) יכולה לסייע בהעלאת נושאים חברתיים ואישיים הקשורים לעדה ובעיקר  יכולה להביא למינוף והצלחה של כל אחת ואחת."
 
 
 
 






  return(

<VerticalImgCard title={title} img={img} description={description}  />
  );
};

export default Vision;
