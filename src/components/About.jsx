import React from 'react'
import './About.css';
import MainBackImg from './images/hg.png';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      {/* <TopNav></TopNav> */}
      <div className="my-info-container">

        <div className='about1'>
          <div className='first-left-div'>
            <h1>
              About Me
            </h1>
            <div className='details-row'><h3>Name :</h3> Shyamlal Kumawat</div>
            <div className='details-row'><h3>Hieghest Qualification :</h3> B.Tech</div>
            <div className='details-row'><h3>Current Organization :</h3>Vactorflow </div>
            <div className='details-row'><h3>Specialization :</h3> React, Python, C, JavaScript</div>
            <div className='details-row'><h3>Age :</h3> 23</div>
            <div className='details-row'><h3>Year of Experience :</h3>3 </div>
            <div className='details-row'><h3>From :</h3>Jaipur</div>

          </div>


          <div className="mypic">
            <img src={MainBackImg} className="pic_my" ></img>
          </div>

          <div className='action-btn'>
            <Link className='resume-view-btn'>
              View Resume
            </Link>
            <Link className='resume-download-btn'>
              Download Resume
            </Link>
          </div>

        </div>


        {/* <div className="about_p">
            <h1 className='me_h1'>About Me </h1>
            <p className='out_p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati laudantium ipsam consectetur accusantium totam,
              earum necessitatibus nemo quos dignissimos nostru mnisi
              aut eligendi reprehenderit debitis fugiat et facere delectus
              voluptatibus.
            </p>
          </div> */}

      </div>
      {/* <img src="{MainBackImg}></img> */}

    </div>
  )
}

export default About
