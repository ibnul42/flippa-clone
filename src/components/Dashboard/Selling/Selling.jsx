import { useState } from "react";
import { Link } from "react-router-dom"
import Bid from "./Bid/Bid";
import Draft from "./Draft/Draft";
import Listing from "./Listing/Listing";
import Offer from "./Offer/Offer";
import "./selling.scss"

function Selling() {
    const [listing, setListing] = useState(true);
    const [draft, setDraft] = useState(false);
    const [bid, setBid] = useState(false);
    const [offer, setOffer] = useState(false);
    

    const menuHandler = (e) => {
        setListing(false);
        setDraft(false);
        setBid(false);
        setOffer(false);

        if(e === "draft"){
            setDraft(true);
        } else if(e === "listing"){
            setListing(true);
        } else if(e === "bid"){
            setBid(true);
        } else if(e === "offer"){
            setOffer(true);
        }
    }

    return (
        <div className="container">
            <div className="head">
                <h2>Selling</h2>
                <a href="#!">Domain Portfolio</a>
            </div>

            <div className="menu_items">
                <div className="menu">
                    <Link to="#!" onClick={() => menuHandler("listing")} className={`${listing ? 'active': ''}`}>Listings</Link>
                    <Link to="#!" onClick={() => menuHandler("draft")} className={`${draft ? 'active': ''}`}>Drafts</Link>
                    <Link to="#!" onClick={() => menuHandler("bid")} className={`${bid ? 'active': ''}`}>Bids</Link>
                    <Link to="#!" onClick={() => menuHandler("offer")} className={`${offer ? 'active': ''}`}>Offers</Link>
                </div>
                <div className="all_types">
                    {listing ? (
                        <select name="types" id="types">
                        <option value="all">All</option>
                        <option value="open">Open</option>
                        <option value="canceled">Canceled</option>
                        <option value="expired">Expired</option>
                        <option value="suspended">Suspended</option>
                        <option value="won">Won</option>
                        <option value="completed">Completed</option>
                        <option value="submitted">Submitted</option>
                    </select>
                    ): null}
                </div>
            </div>

            <div className="all_categories">
                {listing ? (<Listing />) : draft ? (<Draft />): bid ? (<Bid />) : offer ? (<Offer />) : null}
            </div>
        </div>
    )
}

export default Selling
