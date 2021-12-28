import "./myProfile.scss";
import { BsInfoCircle, BsPersonCircle } from 'react-icons/bs'
import { useState } from "react";

function MyProfile() {
    const [imgProfile, setimgProfile] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvm7JsBE_Ep8gb3nQ4BBdH95or1azEOQoNQ&usqp=CAU")

    const imageUploader = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setimgProfile(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    }
    return (
        <div className="my_profile">
            <h3>Profile</h3>
            <p>Information in your public profile is available to all users.</p>
            <form action="">
                <h6>Avatar</h6>
                <p>We recommend using a square image with the dimensions 120px x 120px</p>
                <div className="photo_section">
                    <div className="img_container">
                        <img src={imgProfile} alt="" />
                    </div>
                    <input onChange={imageUploader} type="file" name="" id="" accept='image/*' />
                </div>

                <h6>First Name</h6>
                <input type="text" placeholder="John" />

                <h6>Last Name</h6>
                <input type="text" placeholder="Doe" />

                <div className="checkbox_item">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Notify me when a comment is placed on one of my listings.</label>
                </div>
                <div className="group">
                    <div className="icon">
                        <BsInfoCircle size={35} color='cadetblue' />
                    </div>
                    <div className="info">
                        <p>If you opt to hide your last name from the public, may still use your full name for verification purposes.</p>
                    </div>
                </div>

                <h6>Bio</h6>
                <textarea name="" id="" cols="" rows="5" style={{ width: '100%' }}></textarea>
                <button type="submit" className='btn_style'>Save Changes</button>
            </form>
        </div>
    )
}

export default MyProfile
