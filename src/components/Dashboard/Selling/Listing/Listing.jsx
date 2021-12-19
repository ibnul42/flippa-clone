import "./listing.scss";
import {TiArrowUnsorted} from 'react-icons/ti';

function Listing() {
    return (
        <div className="listing">
            <h5>Your Listing</h5>
            <table class="GeneratedTable">
                <thead>
                    <tr>
                        <th>Listing <TiArrowUnsorted /> </th>
                        <th>Price <TiArrowUnsorted /></th>
                        <th>Status <TiArrowUnsorted /></th>
                        <th>End Date <TiArrowUnsorted /></th>
                    </tr>
                </thead>
                <tbody>
                    <p>Nothing to show</p>
                </tbody>
            </table>
        </div>
    )
}

export default Listing
