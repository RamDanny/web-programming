import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"
import bug from "../assets/bug.jpg"
import socnet from "../assets/socnet.jpg"
import lie from "../assets/lie.jpg"

function Call() {
    return (
        <div className="call">
            <Nav />
            <div className="content">
                <h1>Call for Papers</h1>
				<ul id="list">
                    <li>
                        <figure>
                            <img src={bug} />
                            <figcaption>
                                <b>Design Architecture for Nanobugs : </b>
                                <span>The task involves designing an architecture for a new state-of-the-art nano bug that may be used for reconnaissance</span>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={socnet} />
                            <figcaption>
                                <b>Behavioural Patterns of Echo Chambers : </b>
                                <span>The task involves coming up with a model to explain the behaviour of members of echo chambers and how they interact with others</span>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={lie} />
                            <figcaption>
                                <b>Truth Detection using AI : </b>
                                <span>The task involves developing an AI model that can infer patterns about human behaviour while lying given visual cues of facial features</span>
                            </figcaption>
                        </figure>
                    </li>
				</ul>
                <p>Further details about dates and deadlines will be available via email on <a href="localhost:3000/reg" target="_blank">registration</a></p>
		        <p>For any queries, reach out to <a href="localhost:3000/contact" target="_blank">us</a></p>
            </div>
			<Footer />
        </div>
    );
}

export default Call;