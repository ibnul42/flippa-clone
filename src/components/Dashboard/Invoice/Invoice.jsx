import "./invoice.scss";
import {TiArrowUnsorted} from 'react-icons/ti';

function Invoice() {
    return (
        <div className="container">
            <h2>Invoices</h2>
            <div className="invoice">
            <h5>Invoices</h5>
            <table class="GeneratedTable">
                <thead>
                    <tr>
                        <th>Invoice # </th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <p>Nothing to show</p>
                </tbody>
            </table>
        </div>
        </div>
        
    )
}

export default Invoice
