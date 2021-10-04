import Card from "../card/Card";
import ProgramCardsData from "./ProgramCardsData";
import "./ProgramCards.css";
import { useEffect } from "react";
import WOW from "wowjs";

import Programs from "../../pages/Programs/Programs";

export default function ProgramCards() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="divMain ">
      {ProgramCardsData.map((data, key) => {
        return (
          <Card
            key={key}
            h1={data.h1}
            title={data.title}
            icon={data.icon}
          ></Card>
        );
      })}
    </div>
  );
}
