import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./home.scss";

const Home = () => {

    const [ecommerceView, setEcommerceView] = useState(true);
    const [contentView, setContentView] = useState(false);
    const [appsView, setAppsView] = useState(false);
    const [saasView, setSaasView] = useState(false);
    const [serviceView, setServiceView] = useState(false);

    const activeSectionHandler = (section) => {
        if (section === "Ecommerce") {
            setEcommerceView(!ecommerceView);
            setContentView(false);
            setAppsView(false);
            setSaasView(false);
            setServiceView(false);
        } else if (section === "Content") {
            setEcommerceView(false);
            setContentView(!contentView);
            setAppsView(false);
            setSaasView(false);
            setServiceView(false);
        } else if (section === "Apps") {
            setEcommerceView(false);
            setContentView(false);
            setAppsView(!appsView);
            setSaasView(false);
            setServiceView(false);
        } else if (section === "Saas") {
            setEcommerceView(false);
            setContentView(false);
            setAppsView(false);
            setSaasView(!saasView);
            setServiceView(false);
        } else if (section === "Services") {
            setEcommerceView(false);
            setContentView(false);
            setAppsView(false);
            setSaasView(false);
            setServiceView(!serviceView);
        }
    }
    return (
        <div className="home container">
            <h2>Begginers sites, new apps to kick start your digital journey</h2>
            <div className="submenu">
                <ul className="">
                    <li className={`${ecommerceView ? "active" : ""}`}>
                        <Link to="#" onClick={() => activeSectionHandler('Ecommerce')} >Ecommerce</Link>
                    </li>
                    <li className={`${contentView ? "active" : ""}`}>
                        <Link to="#" onClick={() => activeSectionHandler('Content')} >Content / Advertising</Link>
                    </li>
                    <li className={`${appsView ? "active" : ""}`}>
                        <Link to="#" onClick={() => activeSectionHandler('Apps')} >Apps</Link>
                    </li>
                    <li className={`${saasView ? "active" : ""}`}>
                        <Link to="#" onClick={() => activeSectionHandler('Saas')} >Saas</Link>
                    </li>
                    <li className={`${serviceView ? "active" : ""}`}>
                        <Link to="#" onClick={() => activeSectionHandler('Services')} >Services</Link>
                    </li>

                    {/* className={`${activeSectionSetting ? "active" : ""}`} */}
                </ul>
            </div>
            <div className="product_content">
                {ecommerceView ? (
                    <>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    </>
                ) : (contentView ? (
                    <h3>Content / Advertising View</h3>
                ) : (appsView ? (
                    <>
                    <Product />
                    <Product />
                    </>
                ) : (saasView ? (
                    <Product />
                ) :(serviceView ? (
                    <h3>services View</h3>
                ) : <h3>Ecommerce</h3> && setEcommerceView(true)))))}
            </div>
        </div>
    );
};

export default Home;