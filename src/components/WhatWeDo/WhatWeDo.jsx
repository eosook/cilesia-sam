import './WhatWeDo.scss'
import photo from '../../assets/images/studio.png'

export default function WhatWeDo(){
    return (
        <section className="home-section">
            <img className="home-section__photo" src={photo} alt="Some Picture"></img>
            <div className="home-section__div">
                <h3 className="home-section__subtitle">WHAT WE DO</h3>
                <h2 className="home-section__title">IT’S MORE THAN JUST LOOKING GOOD 24/7</h2>
                <p className="home-section__body">Permanent makeup can not only help you save an extraordinary amount of time with application, but also reduce your spending on brow pencils, shadows, and lipstick. Imagine waking up every day with perfectly sculpted brows and full, luscious lips. Get in touch with Hanna today at Lavio Beauty Bar in Vancouver to turn that into your reality. We take every precaution to ensure that your application is safe, comfortable, and tailored for you.</p>
                <button className="home-section__button">VIEW OUR SERVICES</button>
            </div>
        </section>
    )
}