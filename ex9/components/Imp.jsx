import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"
import bug from "../assets/bug.jpg"
import socnet from "../assets/socnet.jpg"
import lie from "../assets/lie.jpg"

function Imp() {
    return (
        <div className="imp">
            <Nav />
            <div className="content">
                <h1>Important Dates</h1>
				<table id="table">
                    <thead>Timeline for The 20th Intelligence Conference</thead>
                    <tbody>
                        <tr>
                            <th style={{width: "100px;"}}>Day</th>
                            <th>Forenoon Session : 0900 - 1200 hrs</th>
                            <th rowSpan={"4"} style={{width: "75px;"}}>Lunch</th>
                            <th>Afternoon Session : 1300 - 1600 hrs</th>
                        </tr>
                        <tr>
                            <td style={{width: "100px;"}}>Day 1 : <small>1-3-23</small></td>
                            <td>A Practical Guide to Counters : <small>Workshop</small></td>
                            <td>Design Architecture for Nanobugs : <small>Conference</small></td>
                        </tr>
                        <tr>
                            <td style={{width: "100px;"}}>Day 2 : <small>2-3-23</small></td>
                            <td>Behavioural Patterns of Echo Chambers : <small>Conference</small></td>
                            <td>Negotiation and The Art of Diplomacy : <small>Workshop</small></td>
                        </tr>
                        <tr>
                            <td style={{width: "100px;"}}>Day 3 : <small>3-3-23</small></td>
                            <td>Emergency Undercover Drills : <small>Workshop</small></td>
                            <td>Truth Detection using AI : <small>Conference</small></td>
                        </tr>
                    </tbody>
                </table>
                <p>For more details on each conference or workshop to be held, please visit the <a href="localhost:3000/call" target="_blank">Call for Papers</a> and <a href="localhost:3000/work" target="_blank">Workshops</a> pages</p>
		        <p>Note: Venue will be mailed to all the registered and verified participants</p>
            </div>
			<Footer />
        </div>
    );
}

export default Imp;