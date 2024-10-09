import React from 'react'

const JuryPage = () => {
  return (
    <>
        <div style={{marginTop:"63px"}} className="juryPage">
       
            <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"px"}}>

            {/* <h1 className=' text-center '>CODEFIESTA 3.0</h1> */}

            {/* <h4 className='typewriter-heading'>
          <span className="typewriter thick"></span>
        </h4> */}
            </div>
            <br />
          <div className=' juryColumn scrollContainer'>

            {/* <div className="aboutSection  ">
                <br />
                <div className="headingContainer ms-2" >
                  <h3 className='' style={{color:"#5f0f40"}}>ABOUT</h3>
                </div>
                <div className="aboutContent mt-4 mx-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla sunt molestias numquam quo reiciendis consectetur odio delectus quis laboriosam asperiores sint, blanditiis, ex porro vero velit dicta fugit nisi!
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ut alias fugit quo laboriosam vero rerum qui neque sapiente voluptate unde eaque similique in, natus provident deleniti. Incidunt, vel ratione!
                  </p>
                </div>
                <br /><br /><br />
            </div> */}

               {/* Info/About Button */}
      <div className='d-flex justify-content-center align-items-center'>
        <span
          className="badge text-bg-light text-primary shadow rounded-pill d-flex justify-content-center align-items-center p-3 "
          data-bs-toggle="modal"
          data-bs-target="#about"
          style={{
            position: "fixed",
            bottom: "40px",
            right: "20px",
            cursor: "pointer",
            zIndex: "90",
            height: "65px",
            width: "65px"
          }}
        >
         <i className="bi bi-info-lg " style={{fontSize:"40px"}}></i>
        </span>
      </div>

        {/* for info/aboutSection */}
        <div className="modal fade" id="about" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header text-white" style={{backgroundColor:"#0B2239"}}>
        <h1 className="modal-title fs-5" id="staticBackdropLabel">About</h1>
        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed tenetur magnam aliquid aut. Unde ducimus dolore beatae, numquam error placeat nemo veritatis sit laudantium vitae a architecto corporis voluptate at id temporibus vero quia blanditiis sunt ex! 
          <br /><br />
          Repellat ea animi repudiandae similique asperiores reiciendis illo corrupti a minima itaque tempore laboriosam, sed natus veritatis facere vitae voluptatibus velit qui ad beatae est saepe numquam. Laboriosam, nobis? Dolorem odio exercitationem quae.  </p>
      </div>
      {/* <div className="modal-footer justify-content-center">
           
      </div> */}
    </div>
  </div>
        </div>
            
            <div className="challengesBox  scrollItem">
            <br /><br />
                <div className="challengeHeading ms-2" >
                  <h3 className='' style={{color:"#fff"}}>CHALLENGES</h3>
                </div>
              <div className="blocks d-flex flex-wrap justify-content-center gap-5 mt-5 mx-3">

        <div className="image">
           <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />
           
           <div className="content">
            <h5 className='fw-bold'>AI / ML</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?t=st=1727974603~exp=1727978203~hmac=808482c777b15d7d1567c648594d5ec1922687b6f9e0daa3911e4b34d2befca6&w=826" alt="Cyber Security" />
           
           <div className="content">
            <h5 className='fw-bold'>Cyber Security</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?t=st=1727974961~exp=1727978561~hmac=b673483505b8d854fd8dd71e0159aabe6108ab948dfaca95fc1d2b1a78a82059&w=740" alt="Blockchain" />
           
           <div className="content">
            <h5 className='fw-bold'>Blockchain</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />
           
           <div className="content">
            <h5 className='fw-bold'>AI / ML</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?t=st=1727974603~exp=1727978203~hmac=808482c777b15d7d1567c648594d5ec1922687b6f9e0daa3911e4b34d2befca6&w=826" alt="Cyber Security" />
           
           <div className="content">
            <h5 className='fw-bold'>Cyber Security</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?t=st=1727974961~exp=1727978561~hmac=b673483505b8d854fd8dd71e0159aabe6108ab948dfaca95fc1d2b1a78a82059&w=740" alt="Blockchain" />
           
           <div className="content">
            <h5 className='fw-bold'>Blockchain</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />
           
           <div className="content">
            <h5 className='fw-bold'>AI / ML</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?t=st=1727974603~exp=1727978203~hmac=808482c777b15d7d1567c648594d5ec1922687b6f9e0daa3911e4b34d2befca6&w=826" alt="Cyber Security" />
           
           <div className="content">
            <h5 className='fw-bold'>Cyber Security</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?t=st=1727974961~exp=1727978561~hmac=b673483505b8d854fd8dd71e0159aabe6108ab948dfaca95fc1d2b1a78a82059&w=740" alt="Blockchain" />
           
           <div className="content">
            <h5 className='fw-bold'>Blockchain</h5>
           </div>
        </div>

        <div className="image">
           <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />
           
           <div className="content">
            <h5 className='fw-bold'>AI / ML</h5>
           </div>
        </div>

        {/* <div className="card bg-transparent " style={{ width: "11rem", cursor:"pointer" }} >
          <div className="card-body text-center" >
            <img src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/Where-Will-Artificial-Intelligence-Take-Us-In-The-Future-/960x0.jpg?format=jpg&width=960" height={100} width={100} alt="AI /ML" />
            <h6 className="card-title mt-2">AI / ML</h6>
          </div>
        </div> */}

              </div>
<br /><br />

            </div>

            {/* <div className="mentors bg-warning scrollItem">
                <br /><br />
             <h3 className='text-center '>MENTORS</h3>
             
            </div> */}

          </div>

        </div>
    </>
  )
}

export default JuryPage