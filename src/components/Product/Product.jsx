import "./product.scss";
import { BsYoutube } from 'react-icons/bs';
import { FiCrop } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <div className="product_container">
                <div className="img_container">
                    <BsYoutube className="image" />
                </div>
                <div className="product_details">
                    <div className="title_time">
                        <h5>VBooster - Views and watch time booster</h5>
                        <p>16 bids <span>5 days left</span></p>
                    </div>
                    <div className="info">
                        <div className="type">
                            <p>Type</p>
                            <h6>Android App</h6>
                        </div>
                        <div className="monitize">
                            <p>Monitization</p>
                            <h6>Advertising</h6>
                        </div>
                        <div className="netprofit">
                            <p>Net Profit</p>
                            <h6>$16 p/mo</h6>
                        </div>
                        <div className="highest_bid">
                            <p>$255</p>
                            <h6>Multiple 1.5x</h6>
                        </div>
                    </div>
                    <div className="desc">
                        <p>High potential App. Similiar App sare making huge money per month. Check the proof in the description.</p>
                        <FiCrop />
                    </div>
                    <div className="buttons_all">
                        <button type="button" className="wacth_btn">Watch</button>
                        <button type="button" className="view_btn">
                            <Link to={`/product/${1}`}>View Listing</Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;