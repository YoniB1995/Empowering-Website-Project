import React from "react";
import "./workersCards.css";
import { useState, useEffect } from "react";
import { getAllWorkers } from "../../../service/team-service";
import TextField from "@material-ui/core/TextField";

const WorkersCards = () => {
  const [team, setTeam] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    getAllWorkers()
      .then((res) => res.json())
      .then((res) => {
        setTeam(res.team);
        setFilteredTeam(res.team);
      });
  }, []);

  console.log(team);
  console.log(roleName);

  const filteredRoles = () => {
    const newFilteredRoles = team.filter((member) => {
      const roleByName =
        roleName === "" ||
        member.role.toLowerCase().includes(roleName.toLowerCase());
      return roleByName;
    });
    setFilteredTeam(newFilteredRoles);
  };

  useEffect(() => {
    filteredRoles();
  }, [roleName]);

  return (
    <>
      <TextField
        onChange={(e) => {
          setRoleName(e.target.value);
        }}
        id="standard-basic"
        label="Search"
      />

      {filteredTeam.length > 0 && (
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
            {filteredTeam.map((member) => {
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
