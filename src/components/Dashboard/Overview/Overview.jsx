import "./overview.scss"

function Overview() {
    return (
        <div className="container">
            <h2>Overview</h2>
            <div className="list">
                <div className="updated">
                    <h3>Updates</h3>
                    <div className="update_container"></div>
                </div>
                <div className="watched">
                    <h3>Watched Listings</h3>
                    <div className="watched_container"></div>
                </div>
            </div>
        </div>
    )
}

export default Overview
