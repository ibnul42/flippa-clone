import './search.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import Product from '../Product/Product';

const Search = () => {
    const [sortOption, setSortOption] = useState("Most Relevent");
    const [sortOptionMenu, setSortOptionMenu] = useState(false);

    const [showItem, setShowItem] = useState(25);
    const [showItemMenu, setshowItemMenu] = useState(false);



    const sortOptionHandler = (e) => {
        setSortOption(e);
    }

    const itemShowHandler = (e) => {
        setShowItem(e);
    }

    return (
        <div className="search">
            <div className="search_main">
                <div className="container">
                    <ul>
                        <li>Website <MdOutlineKeyboardArrowDown /> </li>
                        <li>Apps <MdOutlineKeyboardArrowDown /></li>
                        <li>Domains <MdOutlineKeyboardArrowDown /></li>
                        <li>Ecommerce <MdOutlineKeyboardArrowDown /></li>
                        <li>Content <MdOutlineKeyboardArrowDown /></li>
                        <li>Marketplaces <MdOutlineKeyboardArrowDown /></li>
                        <li>Services <MdOutlineKeyboardArrowDown /></li>
                        <li>Saas <MdOutlineKeyboardArrowDown /></li>
                        <li>Adsense</li>
                    </ul>
                </div>
            </div>

            <div className="container d-flex flex-column">
                <h2 className="my-4">Search Online Businesses for Sale</h2>
                <div className="row">
                    <div className="col-md-3 col-xl-2 d-flex flex-column">
                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Filter by</p>
                            <Link to="#!">clear</Link>
                        </div>

                        <div className="d-flex flex-column justify-content-between my-2 py-4 border-bottom keyword_search">
                            <p className="h6 search_text_font">Keyword</p>
                            <input type="text" class="form-control" placeholder="Enter keyword" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Revenue-generating</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Asset Type</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Website Types</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Industry</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Monthly Users</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Monthly Pageviews</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Monthly Profit</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Price Range</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Age</p>
                            <AiOutlineArrowDown />
                        </div>

                        <div className="d-flex justify-content-between my-2 border-bottom">
                            <p className="h6 search_text_font">Status</p>
                            <AiOutlineArrowDown />
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-row justify-content-between">
                            <p>1-25 of 558 results</p>
                            <div className="d-flex flex-row align-items-center justify-content-between sort_option" onClick={() => setSortOptionMenu(!sortOptionMenu)}>
                                <p>Sort by:</p>
                                <p className="sort_alias d-flex flex-row align-items-center justify-content-between">{sortOption} <MdOutlineKeyboardArrowDown /></p>
                                <div className={`sort_option_popup ${sortOptionMenu ? 'active' : ''}`}>
                                    <ul onClick={(e) => sortOptionHandler("Most Relevent")} >Most Relevent</ul>
                                    <ul onClick={(e) => sortOptionHandler("Most Active")} >Most Active</ul>
                                    <ul onClick={(e) => sortOptionHandler("Lowest Price")} >Lowest Price</ul>
                                    <ul onClick={(e) => sortOptionHandler("Highest Price")} >Highest Price</ul>
                                    <ul onClick={(e) => sortOptionHandler("Most Recent")} >Most Recent</ul>
                                    <ul onClick={(e) => sortOptionHandler("Ending Soonest")} >Ending Soonest</ul>
                                    <ul onClick={(e) => sortOptionHandler("Most Profitable")} >Most Profitable</ul>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>

                        <div className="d-flex align-items-center justify-content-between my-3">
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                pageCount={15}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={`handlePageClick`}
                                containerClassName={`pagination`}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item'}
                                nextLinkClassName={'page-link'}
                                breakClassName={'page-item'}
                                breakLinkClassName={'page-link'}
                                activeClassName={`active`}
                            />

                            <div className="show_item_option d-flex flex-row align-items-center justify-content-between" onClick={() => setshowItemMenu(!showItemMenu)}>
                                <p className="item_to_show d-flex flex-row align-items-center justify-content-between">{showItem} items <MdOutlineKeyboardArrowDown /></p>
                                <div className={`show_option_popup ${showItemMenu ? 'active' : ''}`}>
                                    <ul onClick={() => itemShowHandler(25)}>25 items</ul>
                                    <ul onClick={() => itemShowHandler(50)}>50 items</ul>
                                    <ul onClick={() => itemShowHandler(75)}>75 items</ul>
                                    <ul onClick={() => itemShowHandler(100)}>100 items</ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Search;