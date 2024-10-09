import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import mentorProfile from '../../assets/user.png'
import codefiestaLogo from '../../assets/CodeFiesta Logo1.png'

const Navbar = () => {
  const [student, setStudent] = useState(null);  
  const navigate=useNavigate();

  useEffect(() => {
    const savedStudent = JSON.parse(localStorage.getItem('student'));
    if (savedStudent) {
      setStudent(savedStudent);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('student'); 
    localStorage.removeItem(`prList_${student._id}`); 
    setStudent(null);  
    navigate('/');  
    window.location.reload();
  };
  
  return (
    <>
      <nav className="navbar fixed-top " style={{ backgroundColor: "#0B2239" }}>
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand text-white fw-bold ">
            <img src={codefiestaLogo} alt="logo" height={60} width={170}/>
          </NavLink>
          {/* <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                {" "}
                CodeFiesta 3.0{" "}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link active fw-bold fs-5"
                    aria-current="page"
                    style={{ color: "#0B2239" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-bold fs-5"
                    style={{ color: "#0B2239" }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div> */}

           {/* User's Profile */}
      <div className='d-flex justify-content-center align-items-center'>
        <span
          className=" text-bg-light text-danger shadow rounded-3"
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
        >
        {student && student.picture ? (
              <img
                src={student.picture}
                alt="profile"
                className="rounded-3"
                style={{ height: '50px', width: '50px' , cursor:"pointer"}}
              />
            ) : (
              <img
                src={mentorProfile}
                alt="profile"
                className="rounded-3"
                style={{ height: '50px', width: '50px' , cursor:"pointer"}}
              />
            )} 
        </span>
      </div>

      <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header text-white" style={{backgroundColor:"#0B2239"}}>
    <h5 className="offcanvas-title" id="offcanvasRightLabel">PROFILE</h5>
    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body ">
  <div className=" " style={{marginTop:"10px"}}>

    {student && student.picture ? (
      <>
    <div className="d-flex flex-column justify-content-center align-items-center">
  <div className="profile-image-container shadow ">
                        <img src={student.picture} alt="Profile" className="profile-image " />
                    </div>
    </div>
                    <div className="profileInfo mt-4">
                      <h4 className='fw-bold '>{student.name}</h4>
                    </div>
                    <hr/>
                    <div className="contactInfo " style={{marginTop:"30px"}}>
                      <h5 className='text-decoration-underline mb-3'>Contact Information</h5>
                      {/* <div className="mb-3">
                      <i className="bi bi-envelope me-3 fs-5 "></i> <span className='fs-5 '>{student.email}</span>
                      </div> */}
                      <i className="bi bi-telephone me-3 fs-5"></i>  <span className='fs-5'>{student.phone}</span>
                    </div>
              <div className=" mt-5">
                <button type="button" className="btn btn-outline-secondary fs-5" onClick={handleLogout}>Logout</button>
              </div>
             </>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <h4>No user found !</h4> 
              </div>
            )}
              </div>
  </div>
</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
