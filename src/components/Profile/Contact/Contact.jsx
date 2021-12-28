import "./contact.scss"
import { BsInfoCircle } from 'react-icons/bs';

function Contact() {
    
    return (
        <div className="contact">
            <h3>Contact Details</h3>
            <p>Your contact details aren't displayed publicly and are only used for Flippa to get in touch with you.</p>
            <form action="">

                <h6>Email Address</h6>
                <input type="email" placeholder="john@doe.com" />

                
                <div className="group">
                    <div className="icon">
                        <BsInfoCircle size={35} color='cadetblue' />
                    </div>
                    <div className="info">
                        <p>You may change your email address, but will need to confirm it.</p>
                    </div>
                </div>

                <h6>Phone Number</h6>
                <input type="tel" placeholder="+0123456789" disabled />

                <h6>Street Address</h6>
                <input type="text" placeholder="" />
                <input type="text" placeholder="" />

                <h6>City</h6>
                <input type="text" placeholder="" />

                <h6>State</h6>
                <input type="text" placeholder="" />

                <h6>Post Code</h6>
                <input type="text" placeholder="" />

                <h6>Country</h6>
                <select name="country" id="country">
                    <option value=""></option>
                    <option value="">Arabia</option>
                    <option value="">Bahrain</option>
                    <option value="">Canada</option>
                </select>

                <h6>Paypal Account</h6>
                <input type="text" placeholder="" />

                <button type="submit" className='btn_style'>Save Changes</button>
            </form>
        </div>
    )
}

export default Contact;

