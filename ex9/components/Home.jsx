import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"
import cern from "../assets/cern.jpg"
import isro from "../assets/isro.jpg"

function Home() {
    return (
        <div className="home">
            <Nav />
            <div className="content">
                <h1 className="title">Welcome to the 20th Intelligence Conference</h1>
                <p className="subtitle"><i><b>This is a prestigious conference that aims to exchange intelligence techniques and provide a platform for agencies to network, across countries and continents.</b></i></p>
                <p class="textanim">Slots are almost filled out!! Register Now!!!</p>
				<p class="impact">Sponsored by</p>
				<ul id="list">
					<li><figure><img src={cern} alt="CERN" /><figcaption id="bright">European Organization for Nuclear Research</figcaption></figure></li><br />
					<li><figure><img src={isro} alt="ISRO" /><figcaption id="bright">Indian Space Research Organization</figcaption></figure></li>
				</ul>
				<p>Featured Video</p>
	            <iframe width="360" height="270" src="https://www.youtube.com/embed/7uFvXgcRRCg" title="Featured Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
			<Footer />
        </div>
    );
}

export default Home;