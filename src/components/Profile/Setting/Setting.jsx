import './setting.scss';
import { BsInfoCircle } from 'react-icons/bs'

function Setting() {
    return (
        <div className="setting">
            <h3>Your Setting</h3>

            <div className="all_setting">
                <div className="preference">
                    <h4>Email Preferences</h4>
                    <div className="listing">
                        <div className="icon">
                            <BsInfoCircle size={35} color='cadetblue' />
                        </div>
                        <div className="info">
                            <h6>Manage watched listing emails</h6>
                            <p>To stop receiving updates on watched listings, manage your <a href="!#">Watchlist</a> .</p>
                        </div>
                    </div>
                    <div className="alert">
                        <div className="icon">
                            <BsInfoCircle size={35} color='cadetblue' />
                        </div>
                        <div className="info">
                            <h6>Manage alerts emails</h6>
                            <p>To stop receiving updates on alerts, manage your <a href="!#">Alerts</a>.</p>
                        </div>
                    </div>

                    <form action="">
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Subscribe me to the newsletter.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me when I'm sent a private message.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me when a bid or an offer is placed on one of my listings.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me when a comment is placed on one of my listings.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me when a comment is placed on a listing I'm watching.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me when a bid is placed above one of my bids.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me new listings appear for my watched categories.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me when a seller I'm watching creates new listings.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me about post auction negotiations.</label>
                        </div>
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Notify me about my listings insights.</label>
                        </div>
                        <button type="submit" className='btn_style'>Save Changes</button>
                    </form>
                </div>

                <div className="alert">
                    <h4>Buying Preferences and Alerts</h4>
                    <p>This will connect you with businesses for sale which match your profile and send you email alerts.</p>
                    <button type="submit" className='btn_style'>Update Preference</button>
                </div>

                <div className="privacy">
                    <h4>Privacy</h4>
                    <form action="">
                        <div className="checkbox_item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Subscribe me to the newsletter.</label>
                        </div>
                        <button type="submit" className='btn_style'>Save Changes</button>
                    </form>
                </div>

                <div className="request_data">
                    <h4>Request Data</h4>
                    <p>To retrieve all of the personal information stored on your account, please click on the button below. We will email a copy of your personal information to the email associated to the account.</p>
                    <button type="submit" className='btn_style'>Update Preference</button>
                </div>

                <div className="close_account">
                    <h4>Close Account</h4>
                    <h6>Are you sure you want to do this?</h6>
                    <p>By closing your account, we will remove you from our mailing lists and stop the processing of your data.</p>
                    <button type="submit" className='btn_style close'>Close Account</button>
                </div>
            </div>
        </div>
    )
}

export default Setting
