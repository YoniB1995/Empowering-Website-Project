import VerticalImgCard from "../../../features/vertical-img-card/VerticalImgCard";
import { useTranslation } from "react-i18next";

const Goals = () => {
  const {t} = useTranslation();

  const title = `${t("Goals")}`
  const img = "./goals-vector.jpg";
  
  const description = `${t("GoalsInfo")}`
     
  return <VerticalImgCard title={title} img={img} description={description} />;
};

export default Goals;
