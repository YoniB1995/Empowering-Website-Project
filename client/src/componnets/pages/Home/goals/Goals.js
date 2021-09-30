import VerticalImgCard from "../../../features/vertical-img-card/VerticalImgCard";

const Goals = () => {
  const title = "מטרות";
  const img ="./goals-vector.jpg";
  const description =
    " הקמתי את הקבוצה למען מטרה חשובה ונעלה שאנחנו הנשים האתיופיות החזקות, האצילות והמוצלחות(למרות שלפעמים איננו מעריכות מספיק את עצמנו) ויש בידינו הזדמנות לעזור, לפרגן, ללמוד זו מזו, להעשיר אחת את השנייה ולהצליח יחד. האמונה שלי היא כי החוכמה שבנו(כחוכמת מלכת שבא) יכולה  לסייע בהעלאת נושאים חברתיים ואישיים הקשורים לעדה ובעיקר יכולה להביא  למינוף והצלחה של כל אחת ואחת.";

  return <VerticalImgCard title={title} img={img} description={description} />;
};

export default Goals;
