import './dashboard.scss';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { MdOutlineSell, MdOutlineCreditScore } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { GiCloverSpiked } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Overview from './Overview/Overview';
import Message from './Message/Message';
import Selling from './Selling/Selling';
import Invoice from './Invoice/Invoice';
import Watching from './Watching/Watching';
import Buying from './Buying/Buying';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

function Dashboard() {

    const [searchParams, setSearchparams] = useSearchParams();
    const searchTerm = searchParams.get('myStr') || '';

    

    

    const [overviewSection, setOverviewSection] = useState(true);
    const [messagesSection, setMessagesSection] = useState(false);
    const [sellingSection, setSellingSection] = useState(false);
    const [invoicesSection, setInvoicesSection] = useState(false);
    const [watchingSection, setWatching] = useState(false);
    const [buyingSection, setBuyingSection] = useState(false);

    useEffect(() => {
        if(searchTerm === 'Messages'){
            setMessagesSection(!messagesSection);
            setOverviewSection(false);
            setSellingSection(false);
            setInvoicesSection(false);
            setBuyingSection(false);
            setWatching(false);
        } else if (searchTerm === "Watching") {
            setMessagesSection(false);
            setOverviewSection(false);
            setSellingSection(false);
            setInvoicesSection(false);
            setBuyingSection(false);
            setWatching(!watchingSection);
        }
    },[searchTerm])

    

    const activeSectionHandler = (section) => {
        if (section === "Overview") {
            setOverviewSection(!overviewSection);
            setMessagesSection(false);
            setSellingSection(false);
            setInvoicesSection(false);
            setBuyingSection(false);
            setWatching(false);
        } else if (section === "Messages") {
            setMessagesSection(!messagesSection);
            setOverviewSection(false);
            setSellingSection(false);
            setInvoicesSection(false);
            setBuyingSection(false);
            setWatching(false);
        } else if (section === "Selling") {
            setMessagesSection(false);
            setOverviewSection(false);
            setSellingSection(!sellingSection);
            setInvoicesSection(false);
            setBuyingSection(false);
            setWatching(false);
        } else if (section === "Invoices") {
            setMessagesSection(false);
            setOverviewSection(false);
            setSellingSection(false);
            setInvoicesSection(!invoicesSection);
            setBuyingSection(false);
            setWatching(false);
        } else if (section === "Buying") {
            setMessagesSection(false);
            setOverviewSection(false);
            setSellingSection(false);
            setInvoicesSection(false);
            setBuyingSection(!buyingSection);
            setWatching(false);
        } else if (section === "Watching") {
            setMessagesSection(false);
            setOverviewSection(false);
            setSellingSection(false);
            setInvoicesSection(false);
            setBuyingSection(false);
            setWatching(!watchingSection);
        }
    }
    return (
        <div className='dashboard'>
            <div className="container">
                <h2>Dashboard</h2>
                <div className="menu">
                    <div className="left_menu">
                        <ul onClick={() => activeSectionHandler('Overview')} className={`${overviewSection ? 'active' : ""}`}>
                            <GiCloverSpiked />
                            <p>Overview</p>
                        </ul>
                        <ul onClick={() => activeSectionHandler('Messages')} className={`${messagesSection ? 'active' : ""}`}>
                            <FiMail />
                            <p>Messages</p>
                        </ul>
                        <ul onClick={() => activeSectionHandler('Selling')} className={`${sellingSection ? 'active' : ""}`}>
                            <MdOutlineSell />
                            <p>Selling</p>
                        </ul>
                        <ul onClick={() => activeSectionHandler('Invoices')} className={`${invoicesSection ? 'active' : ""}`}>
                            <FaFileInvoiceDollar />
                            <p>Invoices</p>
                        </ul>
                        
                        <ul onClick={() => activeSectionHandler('Watching')} className={`${watchingSection ? 'active' : ""}`}>
                            <AiOutlineEye />
                            <p>Watching</p>
                        </ul>
                        <ul onClick={() => activeSectionHandler('Buying')} className={`${buyingSection ? 'active' : ""}`}>
                            <MdOutlineCreditScore />
                            <p>Buying</p>
                        </ul>
                    </div>
                    <div className="right_menu">
                        {overviewSection ? <Overview /> :
                         messagesSection ? <Message /> :
                         sellingSection ? <Selling /> :
                         invoicesSection ? <Invoice /> :
                         watchingSection ? <Watching /> :
                         buyingSection ? <Buying /> :
                         <Overview />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
