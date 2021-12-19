import "./offer.scss";
import {TiArrowUnsorted} from 'react-icons/ti'; 

function Offer() {
    return (
        <div className="offer">
            <h5>Your Offers</h5>
            <table class="GeneratedTable">
                <thead>
                    <tr>
                        <th>Pending Offers <TiArrowUnsorted /> </th>
                        <th>Offerer <TiArrowUnsorted /></th>
                        <th>When <TiArrowUnsorted /></th>
                        <th>Amount <TiArrowUnsorted /></th>
                        <th>Status <TiArrowUnsorted /></th>
                    </tr>
                </thead>
                <tbody>
                    <p>No Offers</p>
                </tbody>
            </table>
        </div>
    )
}

export default Offer
