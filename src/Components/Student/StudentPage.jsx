import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { format, isToday, isYesterday } from 'date-fns';

const StudentPage = () => {
  const [student, setStudent] = useState(null);
  const [newPR, setNewPR] = useState('');
  const [prList, setPrList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const savedStudent = JSON.parse(localStorage.getItem('student'));
    if (savedStudent) {
      setStudent(savedStudent);
      const savedPRList = JSON.parse(localStorage.getItem(`prList_${savedStudent._id}`)) || [];
      setPrList(savedPRList);
    }
  }, []);

  useEffect(() => {
    if (student) {
      localStorage.setItem(`prList_${student._id}`, JSON.stringify(prList));
    }
  }, [prList, student]);

  const handleSubmitPR = () => {
    if (newPR.trim() !== '') {
      const updatedPRList = [...prList, { link: newPR, addedAt: new Date() }];
      setPrList(updatedPRList);
      setNewPR('');
      toast.success("PR added successfully!");
    } else {
      toast.error("PR link can't be empty!");
    }
  };

  const getTimeElapsed = (time) => {
    const now = new Date();
    const diffInMillis = now - new Date(time);
    const diffInMinutes = Math.floor(diffInMillis / 1000 / 60);
    const diffInHours = Math.floor(diffInMillis / 1000 / 60 / 60);
    const diffInDays = Math.floor(diffInMillis / 1000 / 60 / 60 / 24);
  
    if (diffInMinutes < 60) {
      return `${diffInMinutes} min${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hr${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  };

   // Utility function to format the date
   const formatDate = (date) => {
    const messageDate = new Date(date);
    if (isToday(messageDate)) {
      return 'Today';
    } else if (isYesterday(messageDate)) {
      return 'Yesterday';
    } else {
      return format(messageDate, 'dd MMM yyyy'); // e.g., "03 Oct 2024"
    }
  };

  const sendMessageToBackend = (message, teamName, mentorName) => {
    const chatKey = `Team-${teamName}-${mentorName}-chats`;
    const existingMessages = JSON.parse(localStorage.getItem(chatKey)) || [];
    const updatedMessages = [...existingMessages, message];
    localStorage.setItem(chatKey, JSON.stringify(updatedMessages));
    console.log('Message sent and saved locally:', message);
  };

  const getChatsForTeam = (teamName, mentorName) => {
    const chatKey = `Team-${teamName}-${mentorName}-chats`;
    const messages = JSON.parse(localStorage.getItem(chatKey)) || [];
    return messages;
  };

  useEffect(() => {
    if (student && student.teamName && student.mentorName) {
      const loadedMessages = getChatsForTeam(student.teamName, student.mentorName);
      setMessages(loadedMessages);
    }
  }, [student]);

  // Utility function to format the time
  const formatTime = (date) => {
    return format(new Date(date), 'hh:mm a'); // e.g., "2:15 p.m."
  };

  const handleSendMessage = () => {
    if (student && student.name !== student.captainName) {
      alert("Only the team captain can send messages to the mentor.");
      return;
    }

    if (newMessage.trim()) {
      const message = {
        id: new Date().getTime(),
        text: newMessage,
        sender: student ? student.name : 'unknown',
        type: newMessage.includes('github.com') ? 'PR' : 'message',
        timestamp: new Date().toISOString(), // Store the time when the message was sent
      };

      if (student) {
        sendMessageToBackend(message, student.teamName, student.mentorName);
        setMessages([...messages, message]);
        setNewMessage('');
      }
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
 
  return (
    <>
    <div style={{ marginTop: "86px" }} className=''>
      {student ? (
        <>
          <div className="studentDetails bg-light  ">
          <div className="mx-2 py-2">
           <div className="d-flex flex-wrap justify-content-between align-items-center">
           <h1 className='' style={{fontSize:"30px"}}>{student.teamName}</h1>
           <span className="badge rounded-pill text-bg-info fs-6 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#question">PROBLEM</span>
          </div>
          <div className="d-flex justify-content-between">
           <div className="captainDetails">
           <span className='fw-bold ' style={{fontSize:"15px"}}>Captain-</span><span className='' style={{fontSize:"15px"}}>{student.captainName}</span>
           </div>
           <div className="mentor">
           <span className='fw-bold' style={{fontSize:"15px"}}>Mentor-</span><span className='' style={{fontSize:"15px"}}>{student.mentorName}</span>
          </div>
        </div>
        
        </div>
          </div>        
        </>
      )
      :
      (
        <div className="d-flex justify-content-center align-items-center">
          <h3>PLease get verified first !</h3>
        </div>
      )}      

    {/* Modal for question */}
    <div className="modal fade" id="question" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header text-white" style={{ backgroundColor:"#0B2239" }}>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Question Statement</h1>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <span className="badge rounded-pill text-bg-info p-2">CATEGORY- AI/ML</span>
            <p className='mt-2 fw-bold' >
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor voluptatibus, quidem porro velit nulla perspiciatis beatae, cum itaque, eius impedit adipisci unde voluptatum. Nemo quia rem vitae ipsam, quaerat molestias?
             </p>
          </div>
          
        </div>
      </div>
    </div>

       {/* Add new PR Button */}
      {/* <div className='d-flex justify-content-center align-items-center'>
      <span
        className="badge text-bg-light text-danger shadow rounded-pill d-flex justify-content-center align-items-center p-3"
        data-bs-toggle="modal"
        data-bs-target="#addNewPR"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "20px",
          cursor: "pointer",
          zIndex: "90",
        }}
      >
        <i className="bi bi-plus-circle-dotted fs-1 me-2"></i> <span className='fs-5'>New PR</span>
      </span>
       </div> */}

    {/* Modal for new PR */}
    {/* <div className="modal fade" id="addNewPR" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header text-white" style={{ backgroundColor:"#0B2239" }}>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Enter PR Link</h1>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="PR" value={newPR} onChange={(e) => setNewPR(e.target.value)} />
              <label htmlFor="floatingInput" className='fw-bold'>PR Link</label>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-outline-success" onClick={handleSubmitPR}>Submit</button>
          </div>
        </div>
      </div>
    </div> */}

    {/* PR List */}
    {/* <div className="PRlist mt-4">
      <div className="headingContainer ms-2">
        <h4 className='fw-bold'>PULL REQUESTS</h4>
      </div>
      <div className="allPRs" style={{ overflowY: "auto", maxHeight: "460px", scrollbarWidth: "none" }}>
        {prList.length > 0 ? (
          prList.map((pr, index) => (
            <div key={index} className="PRDetail px-2 py-3">
              <div className="d-flex justify-content-between">
                <div className="ms-1 me-auto">
                  <div className="fw-bold">
                    <a href={pr.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      PR {index + 1}
                    </a>
                  </div>
                </div>
                <div>
                  <span className="badge text-bg-warning rounded-pill fw-bold">
                    <i className="bi bi-exclamation-lg fs-5"></i>
                  </span>
                </div>
              </div>
              <small className="text-secondary ms-1" style={{ fontSize: "13px" }}>
                <i className="bi bi-clock me-1"></i>{getTimeElapsed(pr.addedAt)}
              </small>
            </div>
          ))
        ) : (
          <p className="ms-2">No PRs added yet.</p>
        )}
      </div>
      </div> */}
      
      {/* <div className="chat-container">
      <div className="chat-header">
        <h2>Contact Mentor</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${message.sender === student.name ? 'user-message' : 'bot-message'}`}
          >
            {message.type === 'PR' ? (
              <a href={message.text} target="_blank" rel="noopener noreferrer">
                {message.text}
              </a>
            ) : (
              message.text
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div> */}

<div className="chat-container">
  <div className="chat-header">
    <h2>Contact Mentor</h2>
  </div>
  <div className="chat-messages">
    {messages.length > 0 &&
      messages.map((message, index) => {
        const showDateHeader =
          index === 0 ||
          formatDate(messages[index - 1].timestamp) !== formatDate(message.timestamp);

        return (
          <div key={message.id} className="chat-message-wrapper">
           

            <div
              className={`chat-message ${
                message.sender === student.name ? 'student-message' : 'received-message'
              }`}
            >
              <small className="sender-name d-flex flex-wrap justify-content-end">{message.sender}</small>
              {message.type === 'PR' ? (
                <a href={message.text} target="_blank" rel="noopener noreferrer">
                  {message.text}
                </a>
              ) : (
                <p>{message.text}</p>
              )}

              <small className="message-time">{formatTime(message.timestamp)}</small>
            </div>
          </div>
        );
      })}
  </div>

  <div className="chat-input">
    <input
      type="text"
      placeholder="Type a message..."
      value={newMessage}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
    <button onClick={handleSendMessage}>Send</button>
  </div>
</div>
      
        </div>

    </>
  )
}

export default StudentPage


// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';

// const StudentPage = () => {
//   const [student, setStudent] = useState(null);  
//   const [newPR, setNewPR] = useState('');
//   const [prList, setPrList] = useState([]);

//   // Load student data and PR list from localStorage on component mount
//   useEffect(() => {
//     const savedStudent = JSON.parse(localStorage.getItem('student'));
//     const savedPRList = JSON.parse(localStorage.getItem('prList')) || [];
    
//     if (savedStudent) {
//       setStudent(savedStudent);
//     }
    
//     setPrList(savedPRList);  // Set the PR list from localStorage
//   }, []);

//   // Save prList to localStorage whenever it changes
//   useEffect(() => {
//     if (prList.length > 0) {
//       localStorage.setItem('prList', JSON.stringify(prList));
//     }
//   }, [prList]);

//   // Handle PR submission
//   const handleSubmitPR = () => {
//     if (newPR.trim() !== '') {
//       const updatedPRList = [...prList, { link: newPR, addedAt: new Date() }];
//       setPrList(updatedPRList); 
//       setNewPR(''); 
//       toast.success("PR added successfully !");
//     } else {
//       toast.error("PR link can't be empty!");
//     }
//   };

//   // Helper function to calculate time elapsed since PR was added
//   const getTimeElapsed = (time) => {
//     const now = new Date();
//     const diffInHours = Math.floor((now - new Date(time)) / 1000 / 60 / 60);
//     return `${diffInHours} hrs ago`;
//   };

//   return (
//     <>
//     <div style={{ marginTop: "75px" }}>
//       {student ? (
//         <div className='studentColumn d-flex ms-3 '>
//           <div className="studentDetail">
//             <h3 className="">Hi {student.name},</h3>
//             </div>
//         </div>
//       ) : (
//         <h3 className='ms-3'>Hi User,</h3>
//       )}
//       <div className="teamInfo mt-4">
//          <ul className="list-group">
//           {student ? (
//             <>
//               <li className="list-group-item list-group-item-info fw-bold fs-5">TEAM: {student.teamName}</li>
//               <li className="list-group-item list-group-item-light fw-bold fs-5">MENTOR: {student.mentorName}</li>
//             </>
//           ) : (
//             <>
//               <li className="list-group-item list-group-item-info fw-bold fs-5">TEAM NAME: NA</li>
//               <li className="list-group-item list-group-item-light fw-bold fs-5">MENTOR: NA</li>
//             </>
//           )}
//          </ul>
//       </div>

//       {/* Add new PR Button */}
//       <div className='d-flex justify-content-center align-items-center'>
//         <span
//           className="badge text-bg-light text-danger shadow rounded-pill d-flex justify-content-center align-items-center p-3"
//           data-bs-toggle="modal"
//           data-bs-target="#addNewPR"
//           style={{
//             position: "fixed",
//             bottom: "30px",
//             right: "20px",
//             cursor: "pointer",
//             zIndex: "90",
//           }}
//         >
//           <i className="bi bi-plus-circle-dotted fs-1 me-2"></i> <span className='fs-5'>New PR</span>
//         </span>
//       </div>

//       {/* Modal for new PR */}
//       <div className="modal fade" id="addNewPR" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//           <div className="modal-content">
//             <div className="modal-header text-white" style={{ backgroundColor:"#0B2239" }}>
//               <h1 className="modal-title fs-5" id="staticBackdropLabel">Enter PR Link</h1>
//               <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="form-floating">
//                 <input type="text" className="form-control" id="floatingInput" placeholder="PR" value={newPR} onChange={(e) => setNewPR(e.target.value)} />
//                 <label htmlFor="floatingInput" className='fw-bold'>PR Link</label>
//               </div>
//             </div>
//             <div className="modal-footer justify-content-center">
//               <button type="button" className="btn btn-outline-success" onClick={handleSubmitPR}>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* PR List */}
//       <div className="PRlist mt-5">
//         <div className="headingContainer ms-2">
//           <h4 className='fw-bold'>PULL REQUESTS</h4>
//         </div>
//         <div className="allPRs" style={{ overflowY: "auto", maxHeight: "460px", scrollbarWidth: "none" }}>
//           {prList.length > 0 ? (
//             prList.map((pr, index) => (
//               <div key={index} className="PRDetail px-2 py-3">
//                 <div className="d-flex justify-content-between">
//                   <div className="ms-1 me-auto">
//                     <div className="fw-bold">
//                       <a href={pr.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
//                         PR {index + 1}
//                       </a>
//                     </div>
//                   </div>
//                   <div>
//                     <span className="badge text-bg-warning rounded-pill fw-bold">
//                       <i className="bi bi-exclamation-lg fs-5"></i>
//                     </span>
//                   </div>
//                 </div>
//                 <small className="text-secondary ms-1" style={{ fontSize: "13px" }}>
//                   <i className="bi bi-clock me-1"></i>{getTimeElapsed(pr.addedAt)}
//                 </small>
//               </div>
//             ))
//           ) : (
//             <p className="ms-2">No PRs added yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default StudentPage;


// import React, { useState, useEffect } from 'react';

// const StudentPage = () => {
//   const [studentData, setStudentData] = useState(null);
//   const [teamPrList, setTeamPrList] = useState([]);

//   useEffect(() => {
//     // Get the student details from localStorage
//     const storedStudent = JSON.parse(localStorage.getItem('student'));

//     if (storedStudent) {
//       setStudentData(storedStudent);
//       fetchPrListForTeam(storedStudent.team);
//     }
//   }, []);

//   const fetchPrListForTeam = (teamName) => {
//     // Mock PR fetching logic (you would replace this with an API call)
//     const mockPrData = [
//       { team: 'codeup', prLink: 'https://github.com/codeup/project-1/pull/1' },
//       { team: 'codeup', prLink: 'https://github.com/codeup/project-2/pull/2' },
//     ];

//     const teamPrs = mockPrData.filter(pr => pr.team === teamName);
//     setTeamPrList(teamPrs);
//   };

//   if (!studentData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {studentData.name}</h1>
//       <p>Team: {studentData.team}</p>
//       <p>Captain: {studentData.captain}</p>

//       <h3>Team PR List:</h3>
//       <ul>
//         {teamPrList.length > 0 ? (
//           teamPrList.map((pr, index) => (
//             <li key={index}>
//               <a href={pr.prLink} target="_blank" rel="noopener noreferrer">
//                 {pr.prLink}
//               </a>
//             </li>
//           ))
//         ) : (
//           <p>No PRs available for your team.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default StudentPage;
