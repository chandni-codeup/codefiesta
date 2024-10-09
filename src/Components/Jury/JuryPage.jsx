import React from "react";
import Modal from "./Modal";
import SlickSlider from "../SlickSlider";
import priyanka from "../../assets/mentors/priyanka.png";
import kushal from "../../assets/mentors/Kushal.jpg";
import chandni from "../../assets/mentors/chandni.jpg";
import himanshu from "../../assets/mentors/himanshu.jpg";

const JuryPage = () => {
    const mentors = [
        { image: priyanka, name: "Priyanka Jangid" },
        { image: kushal, name: "Kushal Shama" },
        { image: chandni, name: "Chandni Sodani" },
        { image: himanshu, name: "Himanshu Chandnani" },
    ];
    return (
        <>
            <div style={{ height: "86px", width: "100%" }}></div>
            <div className="juryPage">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <object className="yt-video" data="https://www.youtube.com/embed/fEbeQtGoXBQ?autoplay=1&mute=1" title="YouTube video player" allowfullscreen></object>
                </div>

                <div style={{ marginTop: "-6px" }} className=" juryColumn scrollContainer">
                    <div className="d-flex justify-content-center align-items-center">
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
                                width: "65px",
                            }}
                        >
                            <i className="bi bi-info-lg " style={{ fontSize: "40px" }}></i>
                        </span>
                    </div>

                    {/* for info/aboutSection */}
                    <div className="modal fade" id="about" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header text-white" style={{ backgroundColor: "#0B2239" }}>
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                        About
                                    </h1>
                                    <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed tenetur magnam aliquid aut. Unde ducimus dolore beatae, numquam error placeat nemo veritatis sit laudantium vitae a architecto corporis voluptate at id temporibus vero quia blanditiis sunt ex!
                                        <br />
                                        <br />
                                        Repellat ea animi repudiandae similique asperiores reiciendis illo corrupti a minima itaque tempore laboriosam, sed natus veritatis facere vitae voluptatibus velit qui ad beatae est saepe numquam. Laboriosam, nobis? Dolorem odio exercitationem quae.{" "}
                                    </p>
                                </div>
                                {/* <div className="modal-footer justify-content-center">
                  
              </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="challengesBox">
                        <br />
                        <br />
                        <div className="challengeHeading">
                            <h3 className="" style={{ color: "#fff" }}>
                                CHALLENGES
                            </h3>
                        </div>
                        <div className="blocks d-flex flex-wrap justify-content-center gap-5 mt-5 mx-3">
                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />

                                <Modal title="AI / ML" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?t=st=1727974603~exp=1727978203~hmac=808482c777b15d7d1567c648594d5ec1922687b6f9e0daa3911e4b34d2befca6&w=826" alt="Cyber Security" />

                                <Modal title="Cyber Security" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?t=st=1727974961~exp=1727978561~hmac=b673483505b8d854fd8dd71e0159aabe6108ab948dfaca95fc1d2b1a78a82059&w=740" alt="Blockchain" />

                                <Modal title="Blockchain" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />

                                <Modal title="AI / ML" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?t=st=1727974603~exp=1727978203~hmac=808482c777b15d7d1567c648594d5ec1922687b6f9e0daa3911e4b34d2befca6&w=826" alt="Cyber Security" />

                                <Modal title="Cyber Security" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?t=st=1727974961~exp=1727978561~hmac=b673483505b8d854fd8dd71e0159aabe6108ab948dfaca95fc1d2b1a78a82059&w=740" alt="Blockchain" />

                                <Modal title="Blockchain" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />

                                <Modal title="AI / ML" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?t=st=1727974603~exp=1727978203~hmac=808482c777b15d7d1567c648594d5ec1922687b6f9e0daa3911e4b34d2befca6&w=826" alt="Cyber Security" />

                                <Modal title="Cyber Security" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?t=st=1727974961~exp=1727978561~hmac=b673483505b8d854fd8dd71e0159aabe6108ab948dfaca95fc1d2b1a78a82059&w=740" alt="Blockchain" />

                                <Modal title="Blockchain" />
                            </div>

                            <div className="image">
                                <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1727974908~exp=1727978508~hmac=aa3cb16dde0b5859a8207f2b1d9adf26757bbd940216ec1ed2394d8a172199c6&w=740" alt="AI / ML" />

                                <Modal title="AI / ML" />
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className="challengeHeading">
                        <h3 className="" style={{ color: "#fff" }}>
                            MENTORS
                        </h3>
                    </div>
                    <div className="mentor p-5">
                        <SlickSlider details={mentors} />
                    </div>
                    <div className="challengeHeading">
                        <h3 className="" style={{ color: "#fff" }}>
                            Jury
                        </h3>
                    </div>
                    <div className="mentor p-5">
                        <SlickSlider details={mentors} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default JuryPage;
