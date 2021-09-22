import NewsletterCampaignChart from "../../../features/Admin/Charts/NewLetter-Campaign-User";
import NewsLetterUserChart from "../../../features/Admin/Charts/NewLetter-User-Char";
import ProductChart from "../../../features/Admin/Charts/ProductsChart";
import NewsLettersUserTable from "../../../features/Admin/NewsLetters-User-table";

const Data = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div>
            <NewsLetterUserChart />
          </div>
          <div>
            <NewsletterCampaignChart />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <ProductChart />
        </div>
      </div>
      <NewsLettersUserTable/>
    </div>
  );
};

export default Data;
