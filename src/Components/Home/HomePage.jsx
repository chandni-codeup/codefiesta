import React, { useState } from "react";
import studentIcon from "../../assets/reading.gif";
import mentorIcon from "../../assets/mentoring.gif";
import facultyIcon from "../../assets/training.gif";
import juryIcon from "../../assets/talent-hunt.gif";
import guestsIcon from "../../assets/overpopulation.gif";
import otherIcon from "../../assets/more.gif";
import codeupLogo from "../../assets/full-logo-black.png";
import {useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import studentsData from '../../Constants/studentData.json';
import mentorsData from '../../Constants/MentorData.json';
import axios from 'axios'

const HomePage = () => {
  //   const [otp, setOtp] = useState(new Array(6).fill(""));

  // const handleChange = (element, index) => {
  //   if (isNaN(element.value)) return;

  //   let newOtp = [...otp];
  //   newOtp[index] = element.value;
  //   setOtp(newOtp);

  //   if (element.nextSibling && element.value) {
  //     element.nextSibling.focus();
  //   }
  // };

  // const handleKeyDown = (e, index) => {
  //   if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
  //     e.target.previousSibling.focus();
  //   }
  // };

  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    const student = studentsData.find(student => student.phone === phone);
    if (student) {
      localStorage.setItem('student', JSON.stringify(student));
      toast.success("Verified successfully!")
      navigate('/student', { state: { student } });
      window.location.reload();
    } else {
      toast.error("Phone number not found!");
    }
  };

  const handleVerifyMentor = () => {
    const mentor = mentorsData.find(mentor => mentor.mentor.phone === phone);
    if (mentor) {
      localStorage.setItem('mentor', JSON.stringify(mentor));
      toast.success("Verified successfully!")
      navigate('/mentor', { state: { mentor } });
      window.location.reload();
    } else {
      toast.error("Phone number not found!");
    }
  };
  
  // const [phone, setPhone] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();

  // const handleVerify = async () => {
  //   try {
  //     const response = await axios.get('https://codeup.in/server/users');
  //     const users = response.data;

  //     const verifiedStudent = users.find(user => user.contact === phone );

  //     if (verifiedStudent) {
  //       localStorage.setItem('student', JSON.stringify(verifiedStudent));
  //       navigate('/student');
  //     } else {
  //       setErrorMessage('Verification failed. Please check your phone number or ensure you are part of a team.');
  //     }
  //   } catch (error) {
  //     console.error('Error during verification:', error);
  //     setErrorMessage('An error occurred while verifying. Please try again later.');
  //   }
  // };

  
  return (
    <>
    <ToastContainer/>
    <div style={{marginTop:"90px"}} className="text-center ">
      <header className="headerPart">
       <h1 className="heading fw-bold " >HACKATHON CODEFIESTA 3.0</h1>
       <h6 className="mt-2">Tech-Sponsored By </h6> <img src={codeupLogo} height={55} width={180} alt="codeupLogo" />
      </header>
      <div className="blocks d-flex flex-wrap justify-content-center gap-3 mt-4">       
        <div className="card border-white " style={{ width: "11rem", cursor:"pointer" }}   data-bs-toggle="modal"
          data-bs-target="#staticBackdrop1">
          <div className="card-body text-center">
            <img src={studentIcon} height={100} width={100} alt="student" />
            <h6 className="card-title mt-2">Student</h6>
          </div>
        </div>

        <div className="card border-white" style={{ width: "11rem", cursor:"pointer" }}  data-bs-toggle="modal"
          data-bs-target="#staticBackdrop2">
          <div className="card-body text-center">
            <img src={mentorIcon} height={100} width={100} alt="mentor" />
            <h6 className="card-title mt-2">Mentor</h6>
          </div>
        </div>

        <div className="card border-white" style={{ width: "11rem", cursor:"pointer" }}  >
          <div className="card-body text-center">
            <img src={facultyIcon} height={100} width={100} alt="convener" />
            <h6 className="card-title mt-2">Convener</h6>
          </div>
        </div>

        <div className="card border-white" style={{ width: "11rem", cursor:"pointer" }} >
          <div className="card-body text-center" onClick={()=> navigate('/jury')}>
            <img src={juryIcon} height={100} width={100} alt="jury" />
            <h6 className="card-title mt-2">Jury</h6>
          </div>
        </div>

        <div className="card border-white" style={{ width: "11rem", cursor:"pointer" }}  >
          <div className="card-body text-center">
            <img src={guestsIcon} height={100} width={100} alt="guests" />
            <h6 className="card-title mt-2">Guests</h6>
          </div>
        </div>

        <div className="card border-white" style={{ width: "11rem", cursor:"pointer" }} >
          <div className="card-body text-center">
            <img src={otherIcon} height={100} width={100} alt="others" />
            <h6 className="card-title mt-2">Others</h6>
          </div>
        </div>

{/* for studentIcon */}
{/* <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header text-white" style={{backgroundColor:"#0B2239"}}>
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Verification</h1>
        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-floating ">
  <input type="number" className="form-control" id="floatingInput" placeholder="Phone"  value={phone} 
        onChange={(e) => setPhone(e.target.value)} />
  <label htmlFor="floatingInput">Phone Number</label>
</div>
      </div>
      <div className="modal-footer justify-content-center">
           <button type="button" className="btn btn-outline-success" onClick={handleVerify} >Verify</button>
      </div>
    </div>
  </div>
</div> */}

<div
            className="modal fade"
            id="staticBackdrop1"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header text-white" style={{ backgroundColor: '#0B2239' }}>
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Verification</h1>
                  <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Phone Number</label>
                  </div>
                  {/* {errorMessage && <p className="text-danger">{errorMessage}</p>} */}
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={handleVerify}
                   
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </div>

{/* for mentorIcon */}
<div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header text-white" style={{backgroundColor:"#0B2239"}}>
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Verification</h1>
        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-floating ">
        <input type="number" className="form-control" id="floatingInput" placeholder="Phone"  value={phone} 
        onChange={(e) => setPhone(e.target.value)} />
        <label htmlFor="floatingInput">Phone Number</label>
</div>
      </div>
      <div className="modal-footer justify-content-center">
           <button type="button" className="btn btn-outline-success" onClick={handleVerifyMentor}>Verify</button>
      </div>
    </div>
  </div>
</div>


{/* for juryIcon */}
{/* <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header text-white" style={{backgroundColor:"#0B2239"}}>
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Verification</h1>
        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-floating ">
  <input type="number" className="form-control" id="floatingInput" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)}/>
  <label htmlFor="floatingInput">Phone Number</label>
</div>
      </div>
      <div className="modal-footer justify-content-center">
        <button type="button" className="btn btn-outline-success" >Verify</button>
      </div>
    </div>
  </div>
</div> */}

{/* <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Enter OTP</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="otp-container">
      <div className="otp-input">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            className="otp-box"
            maxLength="1"
            value={data}
            onChange={e => handleChange(e.target, index)}
            onKeyDown={e => handleKeyDown(e, index)}
          />
        ))}
      </div>
  </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-primary" >Send OTP</button>
      </div>
    </div>
  </div>
</div> */}


      </div>
    </div>
    </>
  );
};

export default HomePage;
