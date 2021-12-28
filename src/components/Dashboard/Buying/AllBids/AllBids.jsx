import { TiArrowUnsorted } from "react-icons/ti"
import "./allBids.scss"

function AllBids() {
    return (
        <div className="bid">
            {/* <h5>Your Listing</h5> */}
            <table class="GeneratedTable">
                <thead>
                    <tr>
                        <th>Listing <TiArrowUnsorted /> </th>
                        <th>Current Price <TiArrowUnsorted /> </th>
                        <th>Your last did <TiArrowUnsorted /> </th>
                        <th>Auction end date <TiArrowUnsorted /> </th>
                        <th>Status <TiArrowUnsorted /></th>
                    </tr>
                </thead>
                <tbody>
                    <p>No bids</p>
                </tbody>
            </table>
        </div>
    )
}

export default AllBids
