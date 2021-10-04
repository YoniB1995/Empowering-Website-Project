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
import { staffMembers} from './details'
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;




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
      return member.role === "צוות";
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
                width: "160px",
                background: "#fdfce5",
              }}
            >
              {" "}
              צוות
            </Button>
            <Button
              onClick={filterManagersInHebrew}
              icon={<FilterOutlined />}
              size="large"
              style={{
                marginRight: "10px",
                width: "160px",
                background: "#fdfce5",
                marginRight:"10px",

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
                width: "160px",
                background: "#fdfce5",
                marginRight:"10px",
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
                width: "160px",
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
                            <p style={{color:"#fdfce5"}}>{member.role} </p>
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
