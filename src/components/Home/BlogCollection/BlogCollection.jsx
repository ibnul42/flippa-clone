import "./blogCollection.scss";

function BlogCollection() {
    return (
        <div className="blog d-flex ">
            <div className="col-md-4 mb-3 mb-md-0">
                <a href="#!" className="text-decoration-none">
                    <img className="rounded" alt="..." src="https://d2jafhvbn4akdi.cloudfront.net/public/blog_thumbnails/Featured-Listing-New-Blog-2-4-1.jpg" />
                    <div className="mt-2">
                        <p className="mb-1 font-size-small text-secondary font-weight-bold">FEATURED LISTINGS</p>
                        <p className="mb-1 lead font-weight-bold">Featured Listing: Work Life Organised – Planner</p>
                        <p className="mb-1 text-secondary">By Antoinette Stephenson</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <a href="#!" className="text-decoration-none">
                    <img className="rounded" alt="..." src="https://d2jafhvbn4akdi.cloudfront.net/public/blog_thumbnails/Featured-Listing-New-Blog-2-3-2.jpg" />
                    <div className="mt-2">
                        <p className="mb-1 font-size-small text-secondary font-weight-bold">FEATURED LISTINGS</p>
                        <p className="mb-1 lead font-weight-bold">Featured Listing: PPP Detective</p>
                        <p className="mb-1 text-secondary">By Antoinette Stephenson</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <a href="#!" className="text-decoration-none">
                    <img className="rounded" alt="..." src="https://d2jafhvbn4akdi.cloudfront.net/public/blog_thumbnails/amazon-fba-stats-2021-1024x664.jpg" />
                    <div className="mt-2">
                        <p className="mb-1 font-size-small text-secondary font-weight-bold">UNCATEGORIZED</p>
                        <p className="mb-1 lead font-weight-bold">Top 52 Incredible Amazon FBA Stats In 2021</p>
                        <p className="mb-1 text-secondary">By Tory Gregory</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BlogCollection
