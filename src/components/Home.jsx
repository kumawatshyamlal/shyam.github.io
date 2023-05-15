import React from 'react';
import './Home.css';
import mypic from './images/hg.png';



const Home = () => {
    return (

        <div className='home'>
            <div className="cotainer">
                <div class="about">
                    <h1 className='me'>Home Me </h1>
                    <p className='pp'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Obcaecati laudantium ipsam consectetur accusantium totam, earum necessitatibus nemo quos 
                        dignissimos nostrum nisi aut eligendi reprehenderit debitis fugiat et facere delectus voluptatibus.
                    </p>
                </div>

                <div className='img_div'>
                    <img className='my_pic' src={mypic} alt="" />
                </div>
            </div>
        </div>

    );
}
export default Home;