import { Button, Card } from "antd";
import "animate.css";
import "./staff.css";
import WOW from "wowjs";
import React,{ useState,useEffect, Children } from "react";
import { Layout } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import {
  getTeamMemberInEnglish,
  getTeamMemberInHebrew,
} from "../../../../service/team-service";
import cookies from "js-cookie";
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;

const staffMembers = [
  {
    fullname: "רחלי טסדה מלכאי",
    role: "יזמית,מייסדת ומנכלית העמותה",
    image:
      "data:image/jpeg;base64,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",
    description:
      "נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון",
  },
  {
    fullname: "Racheli Tadesa Melkai",
    role: "Founder",
    image:
      "data:image/jpeg;base64,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",
    description:
      'Racheli Tadasa Malkai - Entrepreneur, founder and CEO of the association, was born in Ethiopia in 1983,\n Immigrated to Israel with her family in 1991 "In Operation Solomon" married +3, with a B.A. in social work at Ashkelon College.',
  },
];


const Staff = () => {
  const [teamHebrew, setTeamHebrew] = useState([]);
  const [teamEnglish, setTeamEnglish] = useState([]);
  const [filteredTeamHebrew, setFilteredTeamHebrew] = useState([]);
  const [filteredTeamEnglish, setFilteredTeamEnglish] = useState([]);
  const [isHebrew, setIsHebrew] = useState(true);

  const currentLangCode = cookies.get("i18next") || "heb";

  useEffect(() => {
  if (currentLangCode === "heb") {
    setIsHebrew(true)
  } else {
    setIsHebrew(false)
  }
  }, [currentLangCode])
 


  useEffect(() => {
    getTeamMemberInHebrew()
      .then((res) => res.json())
      .then((res) => {
        setTeamHebrew(res.team);
        setFilteredTeamHebrew(res.team);
      });
    getTeamMemberInEnglish()
      .then((res) => res.json())
      .then((res) => {
        setTeamEnglish(res.team);
        setFilteredTeamEnglish(res.team);
      });
  }, []);


  const filterVolunteersInHebrew = () => {
    const teamFilter = teamHebrew.filter((member) => {
      return member.role === "מתנדבים";
    });
    setFilteredTeamHebrew(teamFilter);
  };
  const filterManagersInHebrew = () => {
    const teamFilter = teamHebrew.filter((member) => {
      return member.role === "ועד מנהל";
    });
    setFilteredTeamHebrew(teamFilter);
  };


  const filterVolunteersInEnlish = () => {
    const teamFilter1 = teamEnglish.filter((member) => {
      return member.role === "Volunteers";
    });
    setFilteredTeamEnglish(teamFilter1);
  };

  const filterManagersInEnglish = () => {
    const teamFilter1 = teamEnglish.filter((member) => {
      return member.role === "Board of Directors";
    });
    setFilteredTeamEnglish(teamFilter1);
  };
  

 
  
  const [clickedIndex, setClickedIndex] = useState({});
  const gridStyle = {
    width: "25%",
    textAlign: "center",
    background: "red",
    height: "300px",
  };
  const gridAdminStyle = {
    width: "25%",
    textAlign: "center",
    background: "blue",
    height: "800px",
  };
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <div className="staff-wrapper">
    
      <div className="staff-header-container">
        {isHebrew ? (
          <div className="staff-role-btn-container">
            <Button
              onClick={filterVolunteersInHebrew}
              icon={<FilterOutlined />}
              size="large"
              style={{
                marginRight: "10px",
                width: "120px",
                background: "#fdfce5",
              }}
            >
              {" "}
              מתנדבים
            </Button>
            <Button
              onClick={filterManagersInHebrew}
              icon={<FilterOutlined />}
              size="large"
              style={{
                marginRight: "10px",
                width: "120px",
                background: "#fdfce5",
              }}
            >
              {" "}
              ועד מנהל
            </Button>
          </div>
        ) : (
          <div className="staff-role-btn-container">
            <Button
              onClick={filterVolunteersInEnlish}
              icon={<FilterOutlined />}
              size="middle"
              style={{
                marginRight: "10px",
                width: "120px",
                background: "#fdfce5",
              }}
            >
              {" "}
              Members
            </Button>
            <Button
              onClick={filterManagersInEnglish}
              icon={<FilterOutlined />}
              size="middle"
              style={{
                marginRight: "10px",
                width: "120px",
                background: "#fdfce5",
              }}
            >
              {" "}
              Board of Directors
            </Button>
          </div>
        )}

        <div className="staff-header-wrapper">
          <div className="staff-headline">
            <h3 className="hedaer" style={{ color: "white" }}>
              הכירו את הצוות שלנו
            </h3>
            <div className="staff-header-decoration"></div>
          </div>
        </div>
      </div>

      <div className="our-team-wrapper">
        <div className="founder-card-container">
          <div className="founder-card">
            <Card
              hoverable={false}
              style={{
                width: 250,
                background: "#FDFCE5",
                borderRadius: "5px",
                border: "0",
              }}
              cover={
                <img
                  alt="example"
                  src={isHebrew ? staffMembers[0].image : staffMembers[1].image}
                  style={{
                    borderRadius: "100%",
                    margin: "auto",
                    width: "70%",
                    height: 200,
                  }}
                />
              }
            >
              <Meta
                title={
                  <div>
                    {" "}
                    <h4>
                      {isHebrew
                        ? staffMembers[0].fullname
                        : staffMembers[1].fullname}
                    </h4>
                    <p>
                      {isHebrew ? staffMembers[0].role : staffMembers[1].role}
                    </p>
                  </div>
                }
                description={staffMembers[0].description}
                style={{ textAlign: "center" }}
              />
            </Card>
          </div>
        </div>

        <div className="staff-card-container" style={{ display: "flex" }}>
          {isHebrew
            ? filteredTeamHebrew.map((member) => {
                return (
                  <div className="staff-card">
                    <Card
                      hoverable={false}
                      style={{
                        width: 250,
                        height: "100%",
                        background: "#f5ad88",
                        border: 0,
                      }}
                      cover={
                        <img
                          className="img-staff"
                          alt="example"
                          src={member.image}
                          style={{
                            borderRadius: "100%",
                            margin: "auto",
                            width: "70%",
                          }}
                        />
                      }
                    >
                      <Meta
                        style={{}}
                        title={
                          <div style={{ color: "#232323" }}>
                            <h4 style={{ color: "white" }}>
                              {member.fullname}
                            </h4>
                            <p>{member.role} </p>
                          </div>
                        }
                        description={
                          <p style={{ color: "#232323" }}>
                            {member.description}
                          </p>
                        }
                      />
                    </Card>
                  </div>
                );
              })
            : filteredTeamEnglish.map((member) => {
                return (
                  <div className="staff-card">
                    <Card
                      hoverable={false}
                      style={{
                        width: 250,
                        height: "100%",
                        background: "#f5ad88",
                        border: 0,
                      }}
                      cover={
                        <img
                          className="img-staff"
                          alt="example"
                          src={member.image}
                          style={{
                            borderRadius: "100%",
                            margin: "auto",
                            width: "70%",
                          }}
                        />
                      }
                    >
                      <Meta
                        style={{}}
                        title={
                          <div style={{ color: "#232323" }}>
                            <h4 style={{ color: "white" }}>
                              {member.fullname}
                            </h4>
                            <p>{member.role} </p>
                          </div>
                        }
                        description={
                          <p style={{ color: "#232323" }}>
                            {member.description}
                          </p>
                        }
                      />

                    </Card>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Staff;
