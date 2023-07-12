import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"
import fight from "../assets/fight.jpg"
import diplo from "../assets/diplo.jpg"
import spy from "../assets/spy.jpg"

function Work() {
    return (
        <div className="work">
            <Nav />
            <div className="content">
                <h1>Workshops</h1>
				<div className="wshop">
                    <img src={fight} />
                    <h3>A Practical Guide to Counters</h3>
                    <p>Speaker: Greg Jackson, Co-Founder of Jackson Wink MMA Academy</p>
                </div>
                <div className="wshop">
                    <img src={diplo} />
                    <h3>Negotiation and The Art of Diplomacy</h3>
                    <p>Speaker: Anil Dhasmana, Chief of the National Technical Resarch Organization, Former Chief of RAW</p>
                </div>
                <div className="wshop">
                    <img src={spy} />
                    <h3>Emergency Undercover Drills</h3>
        			<p>Speaker: Konstantin Preobrazhensky, Former Lieutenant Colenel of KGB</p>
                </div>
            </div>
			<Footer />
        </div>
    );
}

export default Work;