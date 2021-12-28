import { TiArrowUnsorted } from "react-icons/ti";
import "./winning.scss";

function Winning() {
    return (
        <div className="winning">
            {/* <h5>Your Listing</h5> */}
            <table class="GeneratedTable">
                <thead>
                    <tr>
                        <th>Listing <TiArrowUnsorted /> </th>
                        <th>End Date <TiArrowUnsorted /></th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <p>No won listings</p>
                </tbody>
            </table>
        </div>
    )
}

export default Winning
