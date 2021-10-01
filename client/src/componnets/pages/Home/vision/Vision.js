import './vision.css'
import VerticalImgCard from "../../../features/vertical-img-card/VerticalImgCard"
import { useTranslation } from "react-i18next";

const Vision =()=>{
  const { t } = useTranslation();

  const vision="חזון"
  const img="./vision-vector.jpg" 

  const visionInfo=" הקמתי את הקבוצה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיותהחזקות , האצילות והמוצלחו,למרות שלפעמים איננו מעריכות מספיק את עצמנו) ויש בידינו הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את השנייה ולהצליח יחד. האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכתשבא) יכולה לסייע בהעלאת נושאים חברתיים ואישיים הקשורים לעדה ובעיקר  יכולה להביא למינוף והצלחה של כל אחת ואחת."




  return(

<VerticalImgCard title={t("vision")} img={img} description={t("visionInfo")} />
  );
};

export default Vision;
