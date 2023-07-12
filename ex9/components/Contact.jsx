import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"

function Contact() {
    return (
        <div className="contact">
            <Nav />
            <div className="content">
                <h1>Contact</h1>
                <p style={{fontSize: "larger"}}>For any queries related to the conference, send an email to:</p>
                <ul id="list">
                    <li>support@ic.com</li>
                    <li>conference@ic.com</li>
                    <li>admin20@ic.com</li>
                </ul>
                <p style={{fontSize: "larger"}}>Or as an alternative, contact:</p>
                <ul id="list">
                    <li>+91-855-554-4517</li>
                    <li>+7-953-555-1614</li>
                    <li>+1-555-216-6612</li>
                    <li>+972-559-555-587</li>
                </ul>
            </div>
			<Footer />
        </div>
    );
}

export default Contact;