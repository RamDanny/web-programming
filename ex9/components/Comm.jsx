import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"
import raw from "../assets/raw.jpg"
import cia from "../assets/cia.jpg"
import fis from "../assets/fis.jpg"
import mossad from "../assets/mossad.jpg"

function Comm() {
    return (
        <div className="comm">
            <Nav />
            <div className="content">
                <h1>Committee</h1>
                <p>This edition of The Intelligence Conference is jointly hosted by:</p>
				<ul id="list">
                    <li><figure><img src={raw} /><figcaption id="bright">Research and Analysis Wing</figcaption></figure></li>
                    <li><figure><img src={cia} /><figcaption id="bright">Central Intelligence Agency</figcaption></figure></li>
                    <li><figure><img src={fis} /><figcaption id="bright">Foreign Intelligence Service</figcaption></figure></li>
                    <li><figure><img src={mossad} /><figcaption id="bright">Mossad</figcaption></figure></li>
				</ul>
            </div>
			<Footer />
        </div>
    );
}

export default Comm;