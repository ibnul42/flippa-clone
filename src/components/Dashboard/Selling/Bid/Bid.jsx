import "./bid.scss";
import {TiArrowUnsorted} from 'react-icons/ti';

function Bid() {
    return (
        <div className="bid">
            <h5>Your Bids</h5>
            <table class="GeneratedTable">
                <thead>
                    <tr>
                        <th>Pending Bidders <TiArrowUnsorted /> </th>
                        <th>Listing <TiArrowUnsorted /></th>
                        <th>When <TiArrowUnsorted /></th>
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

export default Bid
