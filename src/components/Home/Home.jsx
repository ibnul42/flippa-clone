import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import BlogCollection from "./BlogCollection/BlogCollection";
import CollectionList from "./CollectionList/CollectionList";
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
        <>
            {/* home */}
            <div id="heroSection" className="bg-grad-cus container-fluid position-relative pb-5 pb-lg-0">
                <div className="container text-white">
                    <div className="row pt-5 pt-md-6">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col">
                                    <h1 className="font-weight-700">
                                        <span>#1 marketplace to buy and sell</span>
                                    </h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-10 pb-5 pb-md-6">
                                    <h5 className="py-3 hero-description">Buy an online business, become an acquisition entrepreneur,
                                        and invest in digital real estate.</h5>

                                    <form action="/search" className="ng-pristine ng-valid">
                                        <div className="row mt-3">
                                            <div className="col-md-9 pr-md-0">
                                                <div className="bg-white rounded mr-2 w-100 text-nowrap text-truncate">
                                                    <input type="text" name="query[keyword]" className="border-0 w-100 p-3"
                                                        placeholder="e.g. Fitness Blog, SaaS, Shopify Stores" autocomplete="off"
                                                        autofocus="true" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 mt-3 mt-md-0">
                                                <input type="submit" className="btn btn-block btn-success p-3 font-weight-bold"
                                                    value="Search" />
                                            </div>
                                        </div>
                                    </form>

                                    <div className="my-3 row">
                                        <div className="col-12">
                                            <img alt="Live listings" className="mr-2"
                                                src="https://d1zazrti94enmy.cloudfront.net/assets/homepage/icon-signal-white-5eec8601352e1deb435d1e7f912388999ef0a3620280401c204725dfa89a6754.svg" />
                                            Live Listings: <span className="font-weight-bold">5,796 </span>
                                            <span className="font-weight-bold ml-3 d-none d-md-inline">Ready to sell? <a
                                                className="link-color-inherited text-white" href="/">Sell Now</a></span>
                                        </div>
                                        <div className="col-12 d-block d-md-none font-weight-bold mt-3">Ready to sell? <a
                                            className="link-color-inherited text-white" href="/">Sell Now</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center">
                            <iframe width="420" height="275" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* home */}


            <div className="home container">

                <h2>Browse top online businesses</h2>
                <p className="">These are all revenue generating websites, ecommerce stores and other online businesses</p>
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
                    ) : (serviceView ? (
                        <h3>services View</h3>
                    ) : <h3>Ecommerce</h3> && setEcommerceView(true)))))}
                </div>

                <div className="collection">
                    <h4>Collections</h4>
                    <p>Expertly curated searches designed to help you discover your next project</p>
                    <CollectionList />
                </div>

                <div className="latest_blog py-3">
                    <div className="mb-4 d-flex justify-content-between align-items-end">
                        <h4 class="m-0">Latest from the blog</h4>
                        <a href="/" class="lead font-weight-bold text-decoration-none">See more</a>
                    </div>

                    <div className="row mt-3">
                        <BlogCollection />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;