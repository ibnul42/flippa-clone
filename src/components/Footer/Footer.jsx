import './footer.scss'

const Footer = () => {
    return (
        <div className="container footer">
            <div className="d-flex justify-content-between">
                <div className="logo">
                    <h3>Logo</h3>
                </div>
                <div>
                    <h4>Business Type</h4>
                    <div className="d-flex flex-column text-muted">
                        <ul>
                            <li>Websites</li>
                            <li>Apps</li>
                            <li>Domains</li>
                            <li>Ecommerce</li>
                            <li>Content</li>
                            <li>Marketplaces</li>
                            <li>Services</li>
                            <li>Saas</li>
                            <li>Adsense</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Buy and Sell</h4>
                    <div className="d-flex flex-column text-muted">
                        <ul>
                            <li>Browse Businesses</li>
                            <li>Sell my Business</li>
                            <li>Support</li>
                            <li>Referral Program</li>
                            <li>Link 05</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Company</h4>
                    <div className="d-flex flex-column text-muted">
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Webinars</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <p className="text-muted">© 2021 Logo.com Pty Ltd. All rights reserved. Terms of Service Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;