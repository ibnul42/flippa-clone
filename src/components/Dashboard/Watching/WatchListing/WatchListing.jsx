import "./watchListing.scss";
import {TiArrowUnsorted} from 'react-icons/ti';

function WatchListing() {
    return (
        <div className="listing">
            <h5>Your Listing</h5>
            <table class="GeneratedTable">
                <thead>
                    <tr>
                        <th>Listing <TiArrowUnsorted /> </th>
                        <th>Price <TiArrowUnsorted /></th>
                        <th>Ends <TiArrowUnsorted /></th>
                    </tr>
                </thead>
                <tbody>
                    <p>No watched Listing</p>
                </tbody>
            </table>
        </div>
    )
}

export default WatchListing
