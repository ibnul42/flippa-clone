import "./profile.scss";
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState } from 'react';
import Setting from "./Setting/Setting";
import MyProfile from "./MyProfile/MyProfile";
import Verification from "./Verification/Verification";
import Contact from "./Contact/Contact";
// import Overview from './Overview/Overview';
// import Message from './Message/Message';
// import Selling from './Selling/Selling';
// import Invoice from './Invoice/Invoice';
// import Watching from './Watching/Watching';
// import Buying from './Buying/Buying';

function Profile() {
    const [settingSection, setSeetingSection] = useState(true);
    const [profileSection, setProfileSection] = useState(false);
    const [verificationSection, setVerificationSection] = useState(false);
    const [contactSection, setContactSection] = useState(false);

    const activeSectionHandler = (section) => {
        if (section === "Setting") {
            setSeetingSection(!settingSection);
            setProfileSection(false);
            setVerificationSection(false);
            setContactSection(false);
        } else if (section === "Profile") {
            setSeetingSection(false);
            setProfileSection(!profileSection);
            setVerificationSection(false);
            setContactSection(false);
        } else if (section === "Verification") {
            setSeetingSection(false);
            setProfileSection(false);
            setVerificationSection(!verificationSection);
            setContactSection(false);
        } else if (section === "Contact") {
            setSeetingSection(false);
            setProfileSection(false);
            setVerificationSection(false);
            setContactSection(!contactSection);
    }
}
    return (
        <div className='profile'>
            <div className="container">
                <h2>My Account</h2>
                <div className="menu">
                    <div className="left_menu">
                        <ul onClick={() => activeSectionHandler('Setting')} className={`${settingSection ? 'active' : ""}`}>
                            <AiOutlineSetting />
                            <p>Settings</p>
                        </ul>
                        <ul onClick={() => activeSectionHandler('Profile')} className={`${profileSection ? 'active' : ""}`}>
                            <BsFillPersonFill />
                            <p>Profile</p>
                        </ul>
                        <ul onClick={() => activeSectionHandler('Verification')} className={`${verificationSection ? 'active' : ""}`}>
                            <MdOutlineVerifiedUser />
                            <p>Verification</p>
                        </ul>
                        <ul onClick={() => activeSectionHandler('Contact')} className={`${contactSection ? 'active' : ""}`}>
                            <AiOutlineMessage />
                            <p>Contact</p>
                        </ul>
                    </div>
                    <div className="right_menu">
                        {settingSection ? <Setting /> :
                         profileSection ? <MyProfile /> :
                         verificationSection ? <Verification /> :
                         contactSection ? <Contact /> :
                         settingSection}
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
