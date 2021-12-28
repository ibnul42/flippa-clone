import { useState } from "react";
import { Link } from "react-router-dom";
import AllBids from "./AllBids/AllBids";
import AllOffer from "./AllOffer/AllOffer";
import "./buying.scss";
import Winning from "./Winning/Winning";

function Buying() {
    const [wonSection, setWonSection] = useState(true);
    const [bidSection, setBidSection] = useState(false);
    const [offerSection, setOfferSection] = useState(false);

    const menuHandler = (e) => {
        setWonSection(false);
        setBidSection(false);
        setOfferSection(false);

        if (e === "won") {
            setWonSection(true);
        } else if (e === "bid") {
            setBidSection(true);
        } else if (e === "offer") {
            setOfferSection(true);
        }
    }
    return (
        <div className="container">
            <div className="head">
                <h2>Buying</h2>
            </div>

            <div className="menu_items">
                <div className="menu">
                    <Link to="#!" onClick={() => menuHandler("won")} className={`${wonSection ? 'active' : ''}`}>Won</Link>
                    <Link to="#!" onClick={() => menuHandler("bid")} className={`${bidSection ? 'active' : ''}`}>Bids</Link>
                    <Link to="#!" onClick={() => menuHandler("offer")} className={`${offerSection ? 'active' : ''}`}>Offers</Link>
                </div>
                <div className="all_types">
                    {!wonSection ? <select name="types" id="types">
                        <option value="all">All</option>
                        <option value="sellerRes">Awaiting Seller's Response</option>
                        <option value="myRes">Awaiting Your Response</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                        <option value="cancled">Cancled</option>
                    </select> : null}
                    
                </div>
            </div>

            <div className="all_categories">
                {
                    wonSection ? <Winning /> :
                        bidSection ? <AllBids /> :
                            offerSection ? <AllOffer /> :
                                null
                }
            </div>
        </div>
    )
}

export default Buying
