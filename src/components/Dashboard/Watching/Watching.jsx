import { useState } from "react";
import { Link } from "react-router-dom";
import WatchCategory from "./WatchCategory/WatchCategory";
import "./watching.scss";
import WatchListing from "./WatchListing/WatchListing";
import WatchSeller from "./WatchSeller/WatchSeller";

function Watching() {
    const [listing, setListing] = useState(true);
    const [categories, setCategories] = useState(false);
    const [seller, setSeller] = useState(false);

    const menuHandler = (e) => {
        setListing(false);
        setCategories(false);
        setSeller(false);

        if(e === "listing"){
            setListing(true);
        } else if(e === "categories"){
            setCategories(true);
        } else if(e === "seller"){
            setSeller(true);
        }
    }

    return (
        <div className="container">
            <div className="head">
                <h2>Watching</h2>
            </div>

            <div className="menu_items">
                <div className="menu">
                    <Link to="#!" onClick={() => menuHandler("listing")} className={`${listing ? 'active' : ''}`}>Listings</Link>
                    <Link to="#!" onClick={() => menuHandler("categories")} className={`${categories ? 'active' : ''}`}>Categories</Link>
                    <Link to="#!" onClick={() => menuHandler("seller")} className={`${seller ? 'active' : ''}`}>Sellers</Link>
                </div>
            </div>

            <div className="all_categories">
                {listing ? <WatchListing /> :
                 categories ? <WatchCategory /> :
                 seller ? <WatchSeller /> :
                null}
            </div>
        </div>
    )
}

export default Watching;
