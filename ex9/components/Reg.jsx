import "../styles.css"
import Nav from "./Nav"
import Footer from "./Footer"

function Reg() {
    return (
        <div className="reg">
            <Nav />
            <div className="content">
                <h1>Registration</h1>
                <fieldset>
                    <legend>Personal Info</legend>
                    <div>
                        <label>First Name : <input type="text" id="fname" required /></label>
                    </div>
                    <div>
                        <label>Last Name : <input type="text" id="lname" required /></label>
                    </div>
                    <div>
                        <label>Birthday : <input type="date" id="bday" required /></label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Contact Info</legend>
                    <div>
                        <label>Email : <input type="email" id="email" required /></label>
                    </div>
                    <div>
                        <label>Phone Number : <input type="text" value="+" pattern="+[0-9]{2}" style={{width: "40px"}} /><input type="tel" id="phone" pattern="[0-9]{10}" /></label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Participation Info</legend>
                    <label>Day(s) of Participation</label>
                    <div>
                        <input type="checkbox" id="days1" name="days1" /><label for="days1">Day 1 : 7-3-23</label>
                    </div>
                    <div>
                        <input type="checkbox" id="days2" name="days2" /><label for="days2">Day 2 : 8-3-23</label>
                    </div>
                    <div>
                        <input type="checkbox" id="days3" name="days3" /><label for="days3">Day 3 : 9-3-23</label>
                    </div>
                    <div>
                        <label>T-Shirt Size</label>
                        <select>
                            <option value="ch1">Small</option>
                            <option value="ch2">Medium</option>
                            <option value="ch3">Large</option>
                            <option value="ch4">XL</option>
                            <option value="ch5">XXL</option>
                        </select>
                    </div>
                </fieldset>
                <div>
                    <input type="submit" id="submit" value="Submit" />
                </div>
            </div>
			<Footer />
        </div>
    );
}

export default Reg;