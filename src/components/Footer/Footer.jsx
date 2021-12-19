import './footer.scss'

const Footer = () => {
    return (
        <div className="container footer">
            <div className="d-flex justify-content-between">
                <div className="logo">
                    <h3>Logo</h3>
                </div>
                <div>
                    <h4>Title 01</h4>
                    <div className="d-flex flex-column text-muted">
                        <ul>
                            <li>Link 01</li>
                            <li>Link 02</li>
                            <li>Link 03</li>
                            <li>Link 04</li>
                            <li>Link 05</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Title 02</h4>
                    <div className="d-flex flex-column text-muted">
                        <ul>
                            <li>Link 01</li>
                            <li>Link 02</li>
                            <li>Link 03</li>
                            <li>Link 04</li>
                            <li>Link 05</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Title 03</h4>
                    <div className="d-flex flex-column text-muted">
                        <ul>
                            <li>Link 01</li>
                            <li>Link 02</li>
                            <li>Link 03</li>
                            <li>Link 04</li>
                            <li>Link 05</li>
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