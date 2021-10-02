import './vision.css'
import VerticalImgCard from "../../../features/vertical-img-card/VerticalImgCard"
const Vision =()=>{
  const title="חזון"
  const img="./vision-vector.jpg" 

  const description=" עמותת נשים אתיופיות מעצימות הוקמה בשנת 2020 על ידי גב' רחלי טדסה מלכאי מתוך חזון לקידום והעצמת נשים ישראליות ממוצא אתיופי למען חיזוק הקהילה והחוסן החברתי תמיכה ועידוד נשים ישראליות ממוצא אתיופי והרצון להשפיע בחברה הישראלית ,בכלכלה בחינוך ובכל תחומי החיים ."
  





  return(

<VerticalImgCard title={title} img={img} description={description}  />
  );
};

export default Vision;
