import { Button, Card } from "antd";
import "./staff.css";
import { useState,useEffect } from "react";
import {getTeamMemberInEnglish,getTeamMemberInHebrew} from '../../../../service/team-service'

const { Meta } = Card;

const Staff = () => {
  const [teamHebrew, setTeamHebrew] = useState([]);
  const [teamEnglish, setTeamEnglish] = useState([]);
  const [filteredTeamHebrew, setFilteredTeamHebrew] = useState([]);
  const [filteredTeamEnglish, setFilteredTeamEnglish] = useState([]);
  const [selectedRole,setSelectedRole] = useState("");
  const [isHebrew,setIsHebrew] = useState(true);

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

  /////////////////////////////////////////////////////////////////////////////////////////


  const filterVolunteersInHebrew = ()=>{
     const teamFilter = teamHebrew.filter((member)=>{
       return member.role === "מתנדבים"
      })
    setFilteredTeamHebrew(teamFilter)
  }
  const filterManagersInHebrew = ()=>{
    const teamFilter = teamHebrew.filter((member)=>{
      return member.role === "ועד מנהל"
     })
   setFilteredTeamHebrew(teamFilter)
 }
 const filterFoundersInHebrew = ()=>{
  const teamFilter = teamHebrew.filter((member)=>{
    return member.role === "מייסדת"
   })
 setFilteredTeamHebrew(teamFilter)
}
//////////////////////////////////////////////////////////////////////////////////////////////


const filterVolunteersInEnlish = ()=>{
  const teamFilter1 = teamEnglish.filter((member)=>{
    return member.role === "Volunteers"
   })
 setFilteredTeamEnglish(teamFilter1)
}

const filterManagersInEnglish= ()=>{
  const teamFilter1 = teamEnglish.filter((member)=>{
    return member.role === "Board of Directors"
   })
 setFilteredTeamEnglish(teamFilter1)
}
const filterFoundersInEnglish = ()=>{
const teamFilter1 = teamEnglish.filter((member)=>{
  return member.role === "Founder"
 })
setFilteredTeamEnglish(teamFilter1)
}



  

  const changeToHebrew = ()=>{
    setIsHebrew(true)

  }
  const changeToEnglish = ()=>{
    setIsHebrew(false)

  }
  

  return (
    <>
    <Button onClick={changeToHebrew}>עברית</Button>
    <Button onClick={changeToEnglish}>english</Button>
    <br></br>
    <br></br>
    {isHebrew ?   
    <>
    <Button onClick={filterVolunteersInHebrew}>מתנדבים</Button>
    <Button onClick={filterManagersInHebrew}>ועד מנהל</Button>
    <Button onClick={filterFoundersInHebrew}>מייסדת</Button></>
    :
    <>
    <Button onClick={filterVolunteersInEnlish}>Volunteers</Button>
    <Button onClick={filterManagersInEnglish}>Board of Directors</Button>
    <Button onClick={filterFoundersInEnglish}>Founder</Button></>
        }
    <div className="staff-wrapper">
 
      <div className="staff-header-container">
        <h3 className="staff-title">הכירו את הצוות שלנו</h3>

        <div className="staff-header-decoration"></div>
      </div>
      <div className="cards-container">
        {isHebrew ? filteredTeamHebrew.map((member) => (
        <Card
          
            className="staff-card"
            hoverable
            cover={
              <img
                className="staff-img"
                style={{
                    borderRadius: "100%",
                    padding: "5px",
                    width: "220px",
                    height: "220px",
                    margin: "auto",
                }}
                alt="example"
                src={member.image}
              />
            }
          >
            <Meta
              title={
                <div>
                  <p>{member.fullname}</p>
                  {member.role}
                </div>
              }
              description={member.description}
              className="staff-card-title"
            />
            <div className="staff-btn">
              <Button
                size="middle"
                shape="round"
                style={{
                  background: "#D1D9D9",
                  borderColor: "white",
                  color: "black",
                }}
              >
                מזער
              </Button>
            </div>
          </Card>

          
        )): 
        filteredTeamEnglish.map((member) => (
          <Card
          
            className="staff-card"
            hoverable
            cover={
              <img
                className="staff-img"
                style={{
                    borderRadius: "100%",
                    padding: "5px",
                    width: "220px",
                    height: "220px",
                    margin: "auto",
                }}
                alt="example"
                src={member.image}
              />
            }
          >
            <Meta
              title={
                <div>
                  <p>{member.fullname}</p>
                  {member.role}
                </div>
              }
              description={member.description}
              className="staff-card-title"
            />
            <div className="staff-btn">
              <Button
                size="middle"
                shape="round"
                style={{
                  background: "#D1D9D9",
                  borderColor: "white",
                  color: "black",
                }}
              >
                מזער
              </Button>
            </div>
          </Card>   ))} 
      </div>
    </div>
    

    </>
  );
};

export default Staff;
