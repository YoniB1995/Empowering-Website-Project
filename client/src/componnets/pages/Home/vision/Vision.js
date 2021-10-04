import "./vision.css";
import VerticalImgCard from "../../../features/vertical-img-card/VerticalImgCard";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import WOW from "wowjs";

const Vision = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const { t } = useTranslation();

  const vision = "חזון";
  const img = "./vision-vector.jpg";

  const description =
    " עמותת נשים אתיופיות מעצימות הוקמה בשנת 2020 על ידי גב' רחלי טדסה מלכאי מתוך חזון לקידום והעצמת נשים ישראליות ממוצא אתיופי למען חיזוק הקהילה והחוסן החברתי תמיכה ועידוד נשים ישראליות ממוצא אתיופי והרצון להשפיע בחברה הישראלית ,בכלכלה בחינוך ובכל תחומי החיים .";

  return (
    <div className="animate__animated animate__fadeInUp">
      <VerticalImgCard
        title={t("vision")}
        img={img}
        description={t("visionInfo")}
      />
    </div>
  );
};

export default Vision;
