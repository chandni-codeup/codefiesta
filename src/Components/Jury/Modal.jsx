import React from 'react'

const Modal = ({title = "unset"}) => {
    const id = `test${Math.random()}`;
    const target = `#${id}`
  return (
    <>
        <div className="content" data-bs-toggle="modal" data-bs-target={target}>
            <h5 className='fw-bold'>{title}</h5>
        </div>

        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header text-white" style={{backgroundColor:"#0B2239"}}>
                <h1 className="modal-title fs-5" id="staticBackdropLabel">{title}</h1>
                <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed tenetur magnam aliquid aut. Unde ducimus dolore beatae, numquam error placeat nemo veritatis sit laudantium vitae a architecto corporis voluptate at id temporibus vero quia blanditiis sunt ex! 
                  <br /><br />
                  Repellat ea animi repudiandae similique asperiores reiciendis illo corrupti a minima itaque tempore laboriosam, sed natus veritatis facere vitae voluptatibus velit qui ad beatae est saepe numquam. Laboriosam, nobis? Dolorem odio exercitationem quae.  </p>
              </div>
              <div className="modal-footer justify-content-center">
                  3 students are enrolled in {title}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Modal
