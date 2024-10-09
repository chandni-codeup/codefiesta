import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Mentor = () => {
  const [mentor, setMentor] = useState(null);
  const [studentPRs, setStudentPRs] = useState({});
  const navigate=useNavigate()

  useEffect(() => {
    const savedMentor = JSON.parse(localStorage.getItem('mentor'));
    if (savedMentor) {
      setMentor(savedMentor);
    }
  }, []);

  useEffect(() => {
    if (mentor) {
      // Load PR lists for all students in mentor's teams
      const newStudentPRs = {};
      mentor.teams.forEach((team) => {
        team.members.forEach((member) => {
          const savedPRList = JSON.parse(localStorage.getItem(`prList_${member}`)) || [];
          newStudentPRs[member] = savedPRList;
        });
      });
      setStudentPRs(newStudentPRs);
    }
  }, [mentor]);


  const handleTeamClick = (mentorId, teamName) => {
    navigate(`/team/${mentorId}/${teamName}`);
  };
  

  return (
    <>
      <div style={{ marginTop: '90px' }}>
        <div className="mentorColumn d-flex ms-3">
          <div className="mentorDetail">
            {mentor ? (
              <h2 className="">Hi {mentor.mentor.name},</h2>
            ) : (
              <h3 className="">Hi User,</h3>
            )}
          </div>
        </div>
        <div className="teamsList mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <h3 className="text-center mb-4 border border-primary rounded-3 py-2 px-3 bg-light text-primary">
              TEAMS LIST
            </h3>
          </div>

          <div className="allTeams mx-3">
            {mentor &&
              mentor.teams.map((team, index) => (
                <div key={index} className="teamDetails rounded-5 py-2 px-3 mb-3" style={{ border: '1px solid #9b2226' }}>
                  <div className="d-flex justify-content-between">
                    <h5 className="mt-2 fw-bold" style={{ color: '#9b2226' }}>
                      {team.name}
                    </h5>
                    <div className="d-flex justify-content-center align-items-center">

                    <span
                      className="badge rounded-circle text-light fw-bold d-flex justify-content-center align-items-center mt-3"
                      style={{
                        backgroundColor: '#9b2226',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleTeamClick(mentor._id,team.name)}
                    >
                      <i className="bi bi-chevron-right fs-5"></i>
                    </span>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={`teamDetails${index}`}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header text-white" style={{ backgroundColor: '#0B2239' }}>
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            TEAM DETAILS
                          </h1>
                          <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <div className="btn-group">
                            <button className="btn btn-info rounded-pill dropdown-toggle fw-bold fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              {team.name}
                            </button>
                            <ul className="dropdown-menu">
                              {team.members.map((member, memberIndex) => (
                                <li key={memberIndex} className="mx-2 fw-bold" style={{ color: '#0B2239' }}>
                                  {member}
                                </li>
                              ))}
                            </ul>
                          </div>

                           {/* Chatbot Section */}
     
    {/* </div> */}

                          {/* PR List */}
                          {/* <div className="mt-4">
                            <h5 className="fw-bold text-primary">PULL REQUESTS</h5>
                            <hr />
                            <div className="PRlist" style={{ overflowY: 'auto', maxHeight: '550px', scrollbarWidth: 'none' }}>
                              {team.members.map((member) =>
                                studentPRs[member]?.map((pr, prIndex) => (
                                  <div key={prIndex} className="PRDetail py-2">
                                    <div className="d-flex justify-content-between">
                                      <div className="ms-1 me-auto">
                                        <div className="fw-bold">{pr.title}</div>
                                      </div>
                                      <div>
                                        <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
                                          <i className="bi bi-x fs-5"></i>
                                        </span>
                                        <span className="badge text-bg-success rounded-pill fw-bold">
                                          <i className="bi bi-check-lg fs-5"></i>
                                        </span>
                                      </div>
                                    </div>
                                    <small className="text-secondary ms-1" style={{ fontSize: '13px' }}>
                                      <i className="bi bi-clock me-1"></i>{pr.timeAgo}
                                    </small>
                                  </div>
                                ))
                              )}
                            </div>
                          </div> */}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-">
                    <small className="text-secondary" style={{ fontSize: '13px' }}>
                      Updated- 3 hrs ago
                    </small>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div style={{ marginTop: "80px" }} className=" ">
  //       <div className=" mentorColumn d-flex ms-3 ">
  //         <div className="mentorDetail">
  //         {mentor ? (
  //           <h2 className=" ">Hi Mentor,</h2>
  //         ) : (
  //           <h3 className=''>Hi User,</h3>
  //         )}
  //         </div>
  //       </div>
  //       <div className=" teamsList mt-4 ">
  //         <div className="d-flex justify-content-center align-items-center ">
  //           <h3
  //             className="text-center mb-4 border border-primary rounded-3 py-2 px-3 bg-light text-primary "
  //             style={{ display: "inline-block" }}
  //           >
  //             TEAMS LIST
  //           </h3>
  //         </div>

  //         <div className="allTeams mx-3">
  //           <div
  //             className="teamDetails rounded-5 py-2 px-3  mb-3 "
  //             style={{ border: "1px solid #9b2226" }}
  //           >
  //             <div className="d-flex  justify-content-between">
  //               <h5 className="  mt-2 fw-bold" style={{ color: "#9b2226" }}>
  //                 TEAM - CODERS
  //               </h5>
  //               <span
  //                 className="badge rounded-circle text-light fw-bold d-flex justify-content-center align-items-center "
  //                 style={{
  //                   backgroundColor: "#9b2226",
  //                   width: "40px",
  //                   height: "40px",
  //                   cursor: "pointer",
  //                 }}
  //                 data-bs-toggle="modal"
  //                 data-bs-target="#teamDetails"
  //               >
  //                 <i className="bi bi-chevron-right fs-5"></i>
  //               </span>

  //               <div
  //                 className="modal fade"
  //                 id="teamDetails"
  //                 data-bs-backdrop="static"
  //                 data-bs-keyboard="false"
  //                 tabIndex="-1"
  //                 aria-labelledby="staticBackdropLabel"
  //                 aria-hidden="true"
  //               >
  //                 <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  //                   <div className="modal-content">
  //                     <div
  //                       className="modal-header text-white"
  //                       style={{ backgroundColor: "#0B2239" }}
  //                     >
  //                       <h1
  //                         className="modal-title fs-5"
  //                         id="staticBackdropLabel"
  //                       >
  //                         TEAM DETAILS
  //                       </h1>
  //                       <button
  //                         type="button"
  //                         className="btn-close bg-white"
  //                         data-bs-dismiss="modal"
  //                         aria-label="Close"
  //                       ></button>
  //                     </div>
  //                     <div className="modal-body">
  //                       <div className="btn-group">
  //                         <button
  //                           className="btn btn-info rounded-pill dropdown-toggle fw-bold fs-5"
  //                           type="button"
  //                           data-bs-toggle="dropdown"
  //                           aria-expanded="false"
  //                         >
  //                           TEAM - CODERS
  //                         </button>
  //                         <ul className="dropdown-menu">
  //                           <li
  //                             className="mx-2 fw-bold"
  //                             style={{ color: "#0B2239" }}
  //                           >
  //                             Shubham (Captain)
  //                           </li>
  //                           <li
  //                             className="mx-2 fw-bold"
  //                             style={{ color: "#0B2239" }}
  //                           >
  //                             Chandni Sodani
  //                           </li>
  //                           <li
  //                             className="mx-2 fw-bold"
  //                             style={{ color: "#0B2239" }}
  //                           >
  //                             Priyanka{" "}
  //                           </li>
  //                           <li
  //                             className="mx-2 fw-bold"
  //                             style={{ color: "#0B2239" }}
  //                           >
  //                             Kushal{" "}
  //                           </li>
  //                           <li
  //                             className="mx-2 fw-bold"
  //                             style={{ color: "#0B2239" }}
  //                           >
  //                             Himanshu{" "}
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="mt-4 ">
  //                         <div className=" ">
  //                           <h5 className="fw-bold text-primary">
  //                             PULL REQUESTS
  //                           </h5>
  //                         </div>
  //                         <hr />
  //                         <div className="PRlist " style={{ overflowY: "auto", maxHeight: "550px", scrollbarWidth: "none" }}>
  //                           <div className="PRDetail py-2">
  //                             <div className="d-flex  justify-content-between">
  //                               <div className="ms-1 me-auto">
  //                                 <div className="fw-bold">PR 1</div>
  //                               </div>
  //                               <div>
  //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  //                                   <i className="bi bi-x fs-5"></i>
  //                                 </span>
  //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  //                                   <i className="bi bi-check-lg fs-5"></i>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                             <small
  //                               className="text-secondary ms-1"
  //                               style={{ fontSize: "13px" }}
  //                             >
  //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  //                             </small>
  //                           </div>
  //                           <div className="PRDetail py-2">
  //                             <div className="d-flex  justify-content-between">
  //                               <div className="ms-1 me-auto">
  //                                 <div className="fw-bold">PR 1</div>
  //                               </div>
  //                               <div>
  //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  //                                   <i className="bi bi-x fs-5"></i>
  //                                 </span>
  //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  //                                   <i className="bi bi-check-lg fs-5"></i>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                             <small
  //                               className="text-secondary ms-1"
  //                               style={{ fontSize: "13px" }}
  //                             >
  //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  //                             </small>
  //                           </div>
  //                           <div className="PRDetail py-2">
  //                             <div className="d-flex  justify-content-between">
  //                               <div className="ms-1 me-auto">
  //                                 <div className="fw-bold">PR 1</div>
  //                               </div>
  //                               <div>
  //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  //                                   <i className="bi bi-x fs-5"></i>
  //                                 </span>
  //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  //                                   <i className="bi bi-check-lg fs-5"></i>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                             <small
  //                               className="text-secondary ms-1"
  //                               style={{ fontSize: "13px" }}
  //                             >
  //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  //                             </small>
  //                           </div>
  //                           <div className="PRDetail py-2">
  //                             <div className="d-flex  justify-content-between">
  //                               <div className="ms-1 me-auto">
  //                                 <div className="fw-bold">PR 1</div>
  //                               </div>
  //                               <div>
  //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  //                                   <i className="bi bi-x fs-5"></i>
  //                                 </span>
  //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  //                                   <i className="bi bi-check-lg fs-5"></i>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                             <small
  //                               className="text-secondary ms-1"
  //                               style={{ fontSize: "13px" }}
  //                             >
  //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  //                             </small>
  //                           </div>
  //                           <div className="PRDetail py-2">
  //                             <div className="d-flex  justify-content-between">
  //                               <div className="ms-1 me-auto">
  //                                 <div className="fw-bold">PR 1</div>
  //                               </div>
  //                               <div>
  //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  //                                   <i className="bi bi-x fs-5"></i>
  //                                 </span>
  //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  //                                   <i className="bi bi-check-lg fs-5"></i>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                             <small
  //                               className="text-secondary ms-1"
  //                               style={{ fontSize: "13px" }}
  //                             >
  //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  //                             </small>
  //                           </div>
  //                           <div className="PRDetail py-2">
  //                             <div className="d-flex  justify-content-between">
  //                               <div className="ms-1 me-auto">
  //                                 <div className="fw-bold">PR 1</div>
  //                               </div>
  //                               <div>
  //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  //                                   <i className="bi bi-x fs-5"></i>
  //                                 </span>
  //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  //                                   <i className="bi bi-check-lg fs-5"></i>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                             <small
  //                               className="text-secondary ms-1"
  //                               style={{ fontSize: "13px" }}
  //                             >
  //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  //                             </small>
  //                           </div>
  //                           <div className="PRDetail py-2">
  //                             <div className="d-flex  justify-content-between">
  //                               <div className="ms-1 me-auto">
  //                                 <div className="fw-bold">PR 1</div>
  //                               </div>
  //                               <div>
  //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  //                                   <i className="bi bi-x fs-5"></i>
  //                                 </span>
  //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  //                                   <i className="bi bi-check-lg fs-5"></i>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                             <small
  //                               className="text-secondary ms-1"
  //                               style={{ fontSize: "13px" }}
  //                             >
  //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  //                             </small>
  //                           </div>
                          
  //                         </div>

  //                       </div>
  //                     </div>
  //                     <div className="modal-footer justify-content-center"></div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="d-flex mt-1 justify-content-between">
  //               <small className="text-secondary" style={{ fontSize: "13px" }}>
  //                 Updated- 3 hrs ago
  //               </small>
  //             </div>
  //           </div>

  //           <div
  //             className="teamDetails rounded-5 py-2 px-3 mb-3"
  //             style={{ border: "1px solid #006d77" }}
  //           >
  //             <div className="d-flex  justify-content-between">
  //               <h5 className=" mt-2 fw-bold" style={{ color: "#006d77" }}>
  //                 TEAM - CODERS
  //               </h5>
  //               <span
  //                 className="badge rounded-circle text-light fw-bold d-flex justify-content-center align-items-center "
  //                 style={{
  //                   backgroundColor: "#006d77",
  //                   width: "40px",
  //                   height: "40px",
  //                 }}
  //               >
  //                 <i className="bi bi-chevron-right fs-5"></i>
  //               </span>
  //             </div>
  //             <div className="d-flex mt-1 justify-content-between">
  //               <small className="text-secondary" style={{ fontSize: "13px" }}>
  //                 Updated- 3 hrs ago
  //               </small>
  //             </div>
  //           </div>

  //           <div
  //             className="teamDetails rounded-5 py-2 px-3 mb-3"
  //             style={{ border: "1px solid #BB3E03" }}
  //           >
  //             <div className="d-flex  justify-content-between">
  //               <h5 className=" mt-2 fw-bold" style={{ color: "#BB3E03" }}>
  //                 TEAM - CODERS
  //               </h5>
  //               <span
  //                 className="badge rounded-circle text-light fw-bold d-flex justify-content-center align-items-center "
  //                 style={{
  //                   backgroundColor: "#BB3E03",
  //                   width: "40px",
  //                   height: "40px",
  //                 }}
  //               >
  //                 <i className="bi bi-chevron-right fs-5"></i>
  //               </span>
  //             </div>
  //             <div className="d-flex mt-1 justify-content-between">
  //               <small className="text-secondary" style={{ fontSize: "13px" }}>
  //                 Updated- 3 hrs ago
  //               </small>
  //             </div>
  //           </div>

  //           <div
  //             className="teamDetails rounded-5 py-2 px-3 mb-3"
  //             style={{ border: "1px solid #386641" }}
  //           >
  //             <div className="d-flex  justify-content-between">
  //               <h5 className=" mt-2 fw-bold" style={{ color: "#386641" }}>
  //                 TEAM - CODERS
  //               </h5>
  //               <span
  //                 className="badge rounded-circle text-light fw-bold d-flex justify-content-center align-items-center "
  //                 style={{
  //                   backgroundColor: "#386641",
  //                   width: "40px",
  //                   height: "40px",
  //                 }}
  //               >
  //                 <i className="bi bi-chevron-right fs-5"></i>
  //               </span>
  //             </div>
  //             <div className="d-flex mt-1 justify-content-between">
  //               <small className="text-secondary" style={{ fontSize: "13px" }}>
  //                 Updated- 3 hrs ago
  //               </small>
  //             </div>
  //           </div>

  //           <div
  //             className="teamDetails rounded-5 py-2 px-3 mb-3"
  //             style={{ border: "1px solid #432818" }}
  //           >
  //             <div className="d-flex  justify-content-between">
  //               <h5 className=" mt-2 fw-bold" style={{ color: "#432818" }}>
  //                 TEAM - CODERS
  //               </h5>
  //               <span
  //                 className="badge rounded-circle text-light fw-bold d-flex justify-content-center align-items-center "
  //                 style={{
  //                   backgroundColor: "#432818",
  //                   width: "40px",
  //                   height: "40px",
  //                 }}
  //               >
  //                 <i className="bi bi-chevron-right fs-5"></i>
  //               </span>
  //             </div>
  //             <div className="d-flex mt-1 justify-content-between">
  //               <small className="text-secondary" style={{ fontSize: "13px" }}>
  //                 Updated- 3 hrs ago
  //               </small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // return (
  //   <>
  //     <div style={{ marginTop: "90px" }} className="">
  //       <div className="mentorColumn d-flex ms-3">
  //         <div className="mentorDetail">
  //           {mentor ? (
  //             <h2 className="">Hi {mentor.mentor.name},</h2>
  //           ) : (
  //             <h3 className=''>Hi User,</h3>
  //           )}
  //         </div>
  //       </div>
  //       <div className="teamsList mt-4">
  //         <div className="d-flex justify-content-center align-items-center">
  //           <h3
  //             className="text-center mb-4 border border-primary rounded-3 py-2 px-3 bg-light text-primary"
  //             style={{ display: "inline-block" }}
  //           >
  //             TEAMS LIST
  //           </h3>
  //         </div>

  //         <div className="allTeams mx-3">
  //           {mentor && mentor.teams.map((team, index) => (
  //             <div
  //               key={index}
  //               className="teamDetails rounded-5 py-2 px-3 mb-3"
  //               style={{ border: "1px solid #9b2226" }}
  //             >
  //               <div className="d-flex justify-content-between">
  //                 <h5 className="mt-2 fw-bold" style={{ color: "#9b2226" }}>
  //                   {team.name}
  //                 </h5>
  //                 <span
  //                   className="badge rounded-circle text-light fw-bold d-flex justify-content-center align-items-center"
  //                   style={{
  //                     backgroundColor: "#9b2226",
  //                     width: "40px",
  //                     height: "40px",
  //                     cursor: "pointer",
  //                   }}
  //                   data-bs-toggle="modal"
  //                   data-bs-target={`#teamDetails${index}`}
  //                 >
  //                   <i className="bi bi-chevron-right fs-5"></i>
  //                 </span>
  //               </div>

  //               <div
  //                 className="modal fade"
  //                 id={`teamDetails${index}`}
  //                 data-bs-backdrop="static"
  //                 data-bs-keyboard="false"
  //                 tabIndex="-1"
  //                 aria-labelledby="staticBackdropLabel"
  //                 aria-hidden="true"
  //               >
  //                 <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  //                   <div className="modal-content">
  //                     <div
  //                       className="modal-header text-white"
  //                       style={{ backgroundColor: "#0B2239" }}
  //                     >
  //                       <h1 className="modal-title fs-5" id="staticBackdropLabel">
  //                         TEAM DETAILS
  //                       </h1>
  //                       <button
  //                         type="button"
  //                         className="btn-close bg-white"
  //                         data-bs-dismiss="modal"
  //                         aria-label="Close"
  //                       ></button>
  //                     </div>
  //                     <div className="modal-body">
  //                       <div className="btn-group">
  //                         <button
  //                           className="btn btn-info rounded-pill dropdown-toggle fw-bold fs-5"
  //                           type="button"
  //                           data-bs-toggle="dropdown"
  //                           aria-expanded="false"
  //                         >
  //                           {team.name}
  //                         </button>
  //                         <ul className="dropdown-menu">
  //                           {team.members.map((member, memberIndex) => (
  //                             <li
  //                               key={memberIndex}
  //                               className="mx-2 fw-bold"
  //                               style={{ color: "#0B2239" }}
  //                             >
  //                               {member}
  //                             </li>
  //                           ))}
  //                         </ul>
  //                       </div>
  //                       <div className="mt-4">
  //                         <div className="">
  //                           <h5 className="fw-bold text-primary">
  //                             PULL REQUESTS
  //                           </h5>
  //                         </div>
  //                         <hr />
  //                         <div className="PRlist " style={{ overflowY: "auto", maxHeight: "550px", scrollbarWidth: "none" }}>
  // //                           <div className="PRDetail py-2">
  // //                             <div className="d-flex  justify-content-between">
  // //                               <div className="ms-1 me-auto">
  // //                                 <div className="fw-bold">PR 1</div>
  // //                               </div>
  // //                               <div>
  // //                                 <span className="badge text-bg-danger rounded-pill mx-2 fw-bold">
  // //                                   <i className="bi bi-x fs-5"></i>
  // //                                 </span>
  // //                                 <span className="badge text-bg-success rounded-pill fw-bold">
  // //                                   <i className="bi bi-check-lg fs-5"></i>
  // //                                 </span>
  // //                               </div>
  // //                             </div>
  // //                             <small
  // //                               className="text-secondary ms-1"
  // //                               style={{ fontSize: "13px" }}
  // //                             >
  // //                               <i className="bi bi-clock me-1"></i>3 hrs ago
  // //                             </small>
  // //                           </div>
  // //                           <div 
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="d-flex mt-1 justify-content-between">
  //                <small className="text-secondary" style={{ fontSize: "13px" }}>
  //                  Updated- 3 hrs ago
  //                </small>
  //              </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

};

export default Mentor;
