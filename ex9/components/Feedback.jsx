import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"

function Feedback() {
    return (
        <div className="feedback">
            <Nav />
            <div className="content">
                <h1>Feedback</h1>
                <fieldset>
                    <legend>Let us know what you think!</legend>
                    <textarea rows="20" cols="100" style={{color: "#000", textAlign: "justify"}}></textarea>
                </fieldset>
                <input type="submit" id="submit" value="Submit" style={{color: "#000"}} />
            </div>
			<Footer />
        </div>
    );
}

export default Feedback;