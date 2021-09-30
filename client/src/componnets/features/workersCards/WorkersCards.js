import React from "react";
import "./workersCards.css";
import { useState, useEffect } from "react";
import { getTeamMemberInEnglish,getTeamMemberInHebrew } from "../../../service/team-service";
import Select from '../FilterSelect/Select';

const WorkersCards = () => {
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

  const filterRolesInEnglish = ()=>{
    const newFilterRoles = teamEnglish.filter((member)=>{
      const roleMember = selectedRole === "All" || member.role.toLowerCase().includes(selectedRole.toLowerCase());
      return roleMember;
    })
    setFilteredTeamEnglish(newFilterRoles);

  }
  const filterRolesInHebrew = ()=>{
    const newFilterRoles = teamHebrew.filter((member)=>{
      const roleMember = selectedRole === "הכל" || member.role.toLowerCase().includes(selectedRole.toLowerCase());
      return roleMember;
    })
    setFilteredTeamHebrew(newFilterRoles);

  }

  useEffect(()=>{
    filterRolesInEnglish()
    filterRolesInHebrew()
  },[selectedRole])

  const changeToHebrew = ()=>{
    setIsHebrew(true)

  }
  const changeToEnglish = ()=>{
    setIsHebrew(false)

  }

  
  

  

 

  return (
    <>
    <button onClick={changeToHebrew}>עברית</button>
    <button onClick={changeToEnglish}>english</button>
    {isHebrew ?      <Select label="תפקידי צוות" value={selectedRole} setValue={setSelectedRole} options={["ועד מנהל","מייסדת","מתנדבים","הכל"]}/>  
    : <Select label="Members Roles" value={selectedRole} setValue={setSelectedRole} options={["All","Volunteers","Board of Directors","founder",]}/>}
  {isHebrew ? filteredTeamHebrew.length > 0 && (
      <section
        style={{ maxWidth: "1400px", width: "90%" }}
        className="container"
      >
        <div className="page-header">
          <h1>
            הצוות שלנו
            <br />
            {/* <small>designed by yuda</small> */}
          </h1>
        </div>
        <div className="row active-with-click">
          {filteredTeamHebrew.map((member) => {
            return (
              <div className="col-md-4 col-sm-6 col-xs-12">
                <article className="material-card Red">
                  <h2>
                    <span>{member.fullname}</span>
                    <strong>
                      <i className="fa fa-fw fa-star"></i>
                      The Deer Hunter
                    </strong>
                  </h2>
                  <div className="mc-content">
                    <div className="img-container">
                      <img className="img-responsive" src={member.image} />
                    </div>
                    <div className="mc-description">{member.description}</div>
                  </div>
                  <a className="mc-btn-action">
                    <i className="fa fa-bars"></i>
                  </a>
                  <div className="mc-footer">
                    <h4>{member.role}</h4>
                    <a className="fa fa-fw fa-facebook"></a>
                    <a className="fa fa-fw fa-twitter"></a>
                    <a className="fa fa-fw fa-linkedin"></a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    ):
    filteredTeamEnglish.length > 0 && (
      <section
        style={{ maxWidth: "1400px", width: "90%" }}
        className="container"
      >
        <div className="page-header">
          <h1>
            הצוות שלנו
            <br />
            {/* <small>designed by yuda</small> */}
          </h1>
        </div>
        <div className="row active-with-click">
          {filteredTeamEnglish.map((member) => {
            return (
              <div className="col-md-4 col-sm-6 col-xs-12">
                <article className="material-card Red">
                  <h2>
                    <span>{member.fullname}</span>
                    <strong>
                      <i className="fa fa-fw fa-star"></i>
                      The Deer Hunter
                    </strong>
                  </h2>
                  <div className="mc-content">
                    <div className="img-container">
                      <img className="img-responsive" src={member.image} />
                    </div>
                    <div className="mc-description">{member.description}</div>
                  </div>
                  <a className="mc-btn-action">
                    <i className="fa fa-bars"></i>
                  </a>
                  <div className="mc-footer">
                    <h4>{member.role}</h4>
                    <a className="fa fa-fw fa-facebook"></a>
                    <a className="fa fa-fw fa-twitter"></a>
                    <a className="fa fa-fw fa-linkedin"></a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    )}

    
    </>
  );
};

export default WorkersCards;
