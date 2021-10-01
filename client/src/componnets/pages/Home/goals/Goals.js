import VerticalImgCard from "../../../features/vertical-img-card/VerticalImgCard";

const Goals = () => {
  const title = "מטרות";
  const img = "./goals-vector.jpg";

  const description =
    "עמותת נשים אתיופיות מעצימות שמה לעצמה מטרות בהיבטים נרחבים בהיבט החינוך עידוד וייעוץ וסיוע לנשים ליציאה ללימודים, בהיבט הציבורי טיפול בפניות ציבור המגיעות באופן אישי או דרך קהילת נשים אתיופיות מעצימות ,בהביט העסקי מינוף ועידוד עסקים בקרב נשים בקהילה.";
  return <VerticalImgCard title={title} img={img} description={description} />;
};

export default Goals;
