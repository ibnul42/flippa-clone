import './productListing.scss'
import { Link } from 'react-router-dom';
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { TiChevronRight } from 'react-icons/ti';
import { FaFacebookF } from 'react-icons/fa'


const ProductListing = () => {
    return (
        <div className='product_listing'>
            <div className="d-none d-md-block container-fluid sticky-top bg-white shadow z-index-800 js-sticky-header">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <Link to="#description-section" className='text-decoration-none'>
                                <div className="py-3 me-3 font-weight-bold text-secondary d-none d-lg-block">
                                    Description
                                </div>
                            </Link>
                            <Link to="#financials" className='text-decoration-none'>
                                <div className="py-3 me-3 font-weight-bold text-secondary d-none d-lg-block">
                                    Financials
                                </div>
                            </Link>
                        </div>

                        <div className="d-flex align-items-center m-md-2">
                            <div className="me-4 d-none d-xl-block"><span className="font-weight-bold">
                                Asking Price: </span>$9,999
                            </div>
                            <div className="me-4">
                                <span className="font-weight-bold">
                                    <Link to="#listing-comments" className='text-decoration-none'>Comments: </Link>
                                </span>
                                10
                            </div>
                            <div className="me-4">
                                <span className="font-weight-bold">Views: </span>999
                            </div>
                            <div className="me-4">
                                <span className="font-weight-bold">
                                    Watchers:
                                </span>
                                99
                            </div>
                            <div className="me-4">
                            </div>
                            <span className="watch_11050520">
                                <Link className="text-decoration-none" data-remote="true" rel="nofollow" data-method="post" to="/">
                                    <div className="position-relative btn btn-outline-success text-nowrap btn-inline-block btn-img-hover-white d-block font-weight-bold" >
                                        <span className="align-text-bottom">
                                            <img src="https://d1zazrti94enmy.cloudfront.net/assets/icons/eye-icon-08915a9adb19df5836577d28a3d7eacab8bdbab3b7d7cfcb2634f78314e12753.svg" alt="Eye icon" />
                                        </span>
                                        <span>Watch</span>
                                    </div>
                                </Link></span>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="mb-4 mb-md-6">
                            <h6 className="font-weight-700 letter-spacing-large text-uppercase">iOS and Android App</h6>
                            <div className="d-flex mt-4">
                                <h2 className="alternate-font mb-2 pr-2">Work Life Organised - Planner</h2>

                                <span className="ms-2 cursor-pointer" role="button">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmsns="http://www.w3.org/2000/svg">
                                        <path d="M12.4444 12.4444H1.55556V1.55556H7V0H1.55556C0.692222 0 0 0.7 0 1.55556V12.4444C0 13.3 0.692222 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V7H12.4444V12.4444ZM8.55556 0V1.55556H11.3478L3.70222 9.20111L4.79889 10.2978L12.4444 2.65222V5.44444H14V0H8.55556Z" fill="#63707E"></path>
                                    </svg>
                                </span>

                            </div>
                            <div className="d-flex flex-wrap mb-2">
                                <div className="d-flex align-items-center" data-title="This rating is taken from the Google Play Store.">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStarHalf />

                                    <span className="text-green pl-1">4.8</span>
                                </div>

                                <span className="text-muted px-1">|</span>
                                <span className="text-muted">
                                    250
                                    Google Play reviews
                                </span>
                            </div>
                            <div className="mb-4 d-flex flex-wrap">
                                <span className="border rounded px-2 py-1 font-weight-bold me-2 mb-3">Android</span>
                                <span className="border rounded px-2 py-1 font-weight-bold me-2 mb-3">iOS</span>
                                <span className="border rounded px-2 py-1 font-weight-bold me-2 mb-3">Lifestyle</span>
                                <span className="border rounded px-2 py-1 font-weight-bold me-2 mb-3"><img className="me-1 mb-1" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/sponsored_new-cd73b29aba37fc5abae2d7a7f824d402cc9490a9e7c56e0e19d893c906a34a71.svg" alt="Sponsored new" />Sponsored</span>
                            </div>
                            <div className="mb-4 d-flex flex-wrap align-items-center">
                                <div className="d-flex">
                                    <div className="me-4 mb-3">
                                        <span className="font-size-medium-small text-muted font-weight-bold">
                                            App Age
                                        </span>
                                        <h5>1 year </h5>
                                    </div>
                                    <div className="me-4 mb-3 left_custom_margin">
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-4 mb-3">
                                        <span className="font-size-medium-small text-muted font-weight-bold">
                                            App Installs
                                        </span>
                                        <h5>1K+ </h5>
                                    </div>
                                    <div className="me-4 mb-3 left_custom_margin">
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-4 mb-3">
                                        <span className="font-size-medium-small text-muted font-weight-bold">
                                            Multiple
                                        </span>
                                        <h5>90.5x </h5>
                                    </div>
                                    <div className="me-4 mb-3 left_custom_margin">
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-4 mb-3" >
                                        <span className="font-size-medium-small text-muted font-weight-bold">
                                            Profit Margin
                                        </span>
                                        <h5>99.99% </h5>
                                    </div>
                                    <div className="me-4 mb-3 left_custom_margin">
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-4 mb-3" data-title="This store price is taken from the Google Play Store.">
                                        <span className="font-size-medium-small text-muted font-weight-bold">
                                            Store Price
                                        </span>
                                        <h5>Free </h5>
                                    </div>
                                    <div className="me-4 mb-3 left_custom_margin">
                                    </div>
                                </div>

                            </div>
                            {/* TODO- Graph */}
                            <div className="border rounded mb-5">
                                <div className="d-none d-md-block border-left-thick-cyan p-4">
                                    <h5 className="mb-4">Editors comments</h5>
                                    <div className="d-flex flex-column flex-md-row">
                                        <img className="profile-avatar me-3 mb-3 mb-md-0 rounded-circle" src="https://d2jafhvbn4akdi.cloudfront.net/px140x140_avatar_1cdda894-3c3d-44b8-814d-6674af72ab15.png" alt="Px140x140 avatar 1cdda894 3c3d 44b8 814d 6674af72ab15" width="80" height="80" />
                                        <div className="font-size-medium-small align-item-center">
                                            <p>Check out our interview with the seller.
                                                <br /><Link to="/">https://mysite.com/blo...</Link></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="d-md-none border-bottom-thick-cyan p-4">
                                    <h5 className="mb-4">Editors comments</h5>
                                    <div className="d-flex flex-column flex-md-row">
                                        <img className="profile-avatar me-3 mb-3 mb-md-0" src="https://d2jafhvbn4akdi.cloudfront.net/px140x140_avatar_1cdda894-3c3d-44b8-814d-6674af72ab15.png" alt="Px140x140 avatar 1cdda894 3c3d 44b8 814d 6674af72ab15" width="80" height="80" />
                                        <div className="font-size-medium-small align-item-center">
                                            <p>Check out our interview with the seller.
                                                <br /><a href="https://flippa.com/blog/featured-listing-work-life-organised-planner/">https://flippa.com/blo...</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <h5 className="mb-4">
                                About the App
                            </h5>
                            <div id="description-section" >
                                <p><strong>Key Highlights</strong></p>
                                <ul>
                                    <li>Simple and effective organizer app</li>
                                    <li>Easy to use and understand (better than other apps in that field)</li>
                                    <li>Smart dashboard and category system</li>
                                    <li>Chat function and forum for user&nbsp;discussions</li>
                                    <li>ready to scale up with a kickstarter campaign for 2022 (new year's resolution, new year new luck, new year new me etc<br />--&gt; CPI of 0.13$</li>
                                </ul>
                                <p><strong>Operations</strong></p>
                                <p>The app "Work Life Organised" was born in December 2020 out of the motivation to provide an organizer app that is easy to understand and offers simplicity and clarity. It is available on Google Play Store and Apple App Store.</p>
                                <p>The dashboard shows the user all features (Tasks, Habits, Goals and more) along their stats and statuses.&nbsp;<br />User allocates his/her entries in those features to either 'personal' oder 'professional' space, hence the name of the app. User can add more depth by adding customised categories to create your mental folder system in the app which will become your digital memory.&nbsp;</p>
                                <p>Besides a smart category system that ensures proper archiving of your entries within a feature, the app has a effective reminder and calendar system.</p>
                                <p>This way it is a combination of the general device apps (calendar, reminder, notes etc) and within each feature more powerful and everything is just a touch away.&nbsp;</p>
                                <p><strong>Users</strong></p>
                                <p>App speaks to a wide audience: male and female, age range of 20-40 up to 60. Target groups respond well to keywords such motivation, organised, time management and money.&nbsp;</p>
                                <p>Users aim to organize their life and heighten their self awareness by&nbsp;establishing personal and professional aspirations and contemplate their actions/thoughts and circumstances regurlarly.</p>
                                <p>Reminder and calendar system drives repeat use with positive user retention. Also, users feed the app and drive much input to the app by creating tasks and thoughts and other features. The more information the user gives, the more he is attached and the more valuable the app is for him.</p>
                                <p>Users' demographic and characteristics make them likely subscription purchaser.&nbsp;</p>
                                <p>User come from all over the world. Biggest user groups are in this order: United States, India, United Kingdom. Acquired user totals more than 4K.&nbsp;</p>
                                <p><strong>Financials</strong></p>
                                <p>The app just recently reached its product-market fit and been in active development over a year.</p>
                                <p>It has not seen much in marketing expenses, only to drive some feedback.&nbsp;<br />At current smaller marketing tryouts, the app sees CPAs of 0.13$. Adding organic growth rates, it results at a break-even point (average subscription price 4$) by ca. 31 users per subscription. So, ceteris paribus when advertising the app, ideally you want to see one subscription out of 31 new users. Something that seems reasonable and great to scale up by boosting marketing spend (not considering here organic growth/organic new users).</p>
                                <p>The subscription price is relatively low at 4$ for 6 months. There is huge potential if you want to catch up price wise with other apps in that field which are much much more costly.&nbsp;</p>
                                <p>Also, new year will be a great season for the app where you can spend the big bucks on marketing since this is the time where people make resolutions and want to start a new year with hope and plans.&nbsp;</p>
                                <p><strong>Additional Notes</strong></p>
                                <p>The app is for free use initially. The code runs a task count where every new user has a free task count of 20 activities. After that the user will be asked to continue with a subscription.</p>
                                <p>Currently the app has 1398 users with a task count between 1 and 10; 107 users with a task count between 10 and 20; 10 Users with task count &gt;20.&nbsp;</p>
                                <p>We see positive effects in user retention and activity by regular cloud messaging (in-app notifications). You can also speak to users via e-mail to drive up activity and propel subscriptions.&nbsp;</p>
                                <p>The app comes with an ever optimised code, all sorts of reporting models and data base and a Facebook page which was used for FB ads.&nbsp;</p>
                            </div>
                            <hr className="mt-5"></hr>
                            <div className="mt-5">
                                <div className="d-flex">
                                    <h5>Monetization Methods</h5>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex align-items-center mb-3">
                                    <img className="d-inline-flex me-3" height="20" width="20" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/onboarding/services-subscriptions-21ce1faaebe1d4043d39a474f2ce6936579eb96c7c773249cb465efc68b30acb.svg" alt="Services subscriptions" />
                                    <p className="d-inline-flex font-size-medium-small mb-0">Services &amp; Subscriptions</p>
                                </div>

                            </div>
                            {/* TODO- Graph */}
                            <div className="mt-5">
                                <div className="d-flex">
                                    <h5>Sale includes</h5>
                                </div>
                            </div>
                            <div className="font-size-medium font-weight-bold mt-4">
                                Assets
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Email address</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Social media accounts</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Email subscriber list</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Brand assets (logos, etc)</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Trademarks/patents</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Custom technology</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Other</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">Source Code</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mt-1">
                                    <div className="font-size-medium–small">
                                        <TiChevronRight />
                                        <span className="ms-2">iOS App</span>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <span className="font-size-medium font-weight-bold">
                                        Platform
                                    </span>
                                    <h5 className="mt-2">Android</h5>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="font-size-medium font-weight-bold">Post-sale support</span>
                                <div className="mt-2">
                                    <p className="font-size-medium-small">
                                        Included.
                                        All future plans and how to promote them. Guide through all reporting models etc
                                    </p>
                                </div>
                            </div>
                            <hr className="mt-5"></hr>
                            <h5 className="mt-5">Social media</h5>
                            <div className="mt-4">
                                <div className="d-flex align-items-center mb-3">
                                    <FaFacebookF />
                                    <Link className="d-inline-flex font-size-medium-small text-decoration-none ms-2" target="_blank" to="/">693 followers</Link>
                                </div>
                            </div>
                            <hr className='mt-5' />
                            <h5 className='mt-5'>Attachment</h5>
                            <hr className='my-5' />
                            <div>
                                <h5 className="mb-4">Comments</h5>
                                <form method="post" action="/auctions/11050520/comments" className="form ng-pristine ng-valid">
                                    <div className="form-group">
                                        <textarea new-listing-comment="" className="form-control p-4 rounded border border-dark mb-3" name="comment" placeholder="Questions added here are shared with all participants. Please keep comments productive. Unproductive or offensive comments can result in account suspension. Use ‘Contact Seller’ to request analytics access, pricing info, or to message the seller privately." tabIndex="2" rows="4"></textarea>
                                    </div>

                                    <Link to="/" className='text-decoration-none mt-3 mb-3'>Contact Seller</Link>

                                    <div className="row">
                                        <div className="col d-flex justify-content-end">
                                            <button type="submit" className="btn btn-success btn-wide mt-1 ng-isolate-scope" tabIndex="4">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="mb-5">
                            <div className="d-none d-md-block">
                                <div className="border rounded shadow mx-auto">
                                    <div className="OnboardingVisualMedia__hero mx-auto">
                                        <img className="img-fluid rounded-top" src="https://d2jafhvbn4akdi.cloudfront.net/bd7868b0-cb96-4dc8-b273-3d6f0292fa4d.png" alt="Bd7868b0 cb96 4dc8 b273 3d6f0292fa4d" />

                                        <div className="OnboardingVisualMedia__controls">
                                            <button name="button" type="submit" className="OnboardingLightbox btn btn-light btn-sm ml-1" data-lightbox-items="[{&quot;src&quot;:&quot;https://d2jafhvbn4akdi.cloudfront.net/bd7868b0-cb96-4dc8-b273-3d6f0292fa4d.png&quot;,&quot;type&quot;:&quot;image&quot;},{&quot;src&quot;:&quot;https://d2jafhvbn4akdi.cloudfront.net/e62e7ecc-43c4-4af1-a5a1-b85b453ea296.png&quot;,&quot;type&quot;:&quot;image&quot;},{&quot;src&quot;:&quot;https://d2jafhvbn4akdi.cloudfront.net/76204ba5-6dd1-40b7-a1ef-c8bab975ba4c.png&quot;,&quot;type&quot;:&quot;image&quot;}]">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444ZM4.27778 8.16667L6.22222 10.5078L8.94444 7L12.4444 11.6667H1.55556L4.27778 8.16667Z" fill="black"></path>
                                                </svg>
                                                Show all
                                            </button>

                                        </div>
                                    </div>

                                    <div className="p-md-4 pt-4 bg-white">
                                        <div className="row mb-2">
                                            <div className="col-6">
                                                <span className="font-weight-bold text-secondary">
                                                    Asking Price
                                                </span>
                                            </div>
                                            <div className="col-6 text-right">
                                                <span className="font-weight-bold ">
                                                </span>
                                            </div>
                                        </div>

                                        <div className="row align-items-end">
                                            <div className="col-6">
                                                <h3 className="mb-0">$7,999</h3>
                                            </div>
                                            <div className="col-6 text-right">
                                            </div>
                                        </div>


                                        <div className="mx-1 mt-4">
                                            <a className="btn btn-success btn-block mb-3" id="contact-seller-button" href="https://flippa.com/auctions/11050520/discussions/3323671">Contact Seller</a>
                                            <a className="btn btn-block btn-primary mb-3" href="/auctions/11050520/offers/make-an-offer">Make Offer</a>
                                            <span className="watch_11050520">
                                                <a className="btn-link-unstyled" data-remote="true" rel="nofollow" data-method="post" href="/watch_item?id=11050520&amp;origin=ListingPage&amp;return_to=%2F11050520&amp;type=listing&amp;unwatch_classNamees=d-block&amp;watch_classNamees=d-block">
                                                    <div className="position-relative btn btn-outline-success text-nowrap btn-inline-block btn-img-hover-white d-block font-weight-bold" >
                                                        <span className="align-text-bottom">
                                                            <img src="https://d1zazrti94enmy.cloudfront.net/assets/icons/eye-icon-08915a9adb19df5836577d28a3d7eacab8bdbab3b7d7cfcb2634f78314e12753.svg" alt="Eye icon" />
                                                        </span>
                                                        <span>Watch</span>
                                                    </div>
                                                </a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="px-md-3 mx-md-auto">
                                    <div className="py-2">
                                        <p className="font-size-medium font-weight-bold">
                                            About the seller
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img className="profile-avatar me-3" src="https://d2jafhvbn4akdi.cloudfront.net/px80x80_avatar_f2adb3d7-1705-400d-9dc9-c89d778e78c9.jpeg" alt="Px80x80 avatar f2adb3d7 1705 400d 9dc9 c89d778e78c9" width="70" height="70" />
                                            <div className="d-inline-block">
                                                <div className="mb-2">
                                                    <a href="https://flippa.com/users/3270159">
                                                        <span className="font-size-medium-small font-weight-bold">Felix Müller</span>
                                                        <img className="mb-1 ml-1" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/green-check-5c15d1911fbf9f5a236930b4941baad7dafbe003a20f2d09022cebc7023b0e96.svg" alt="Green check" />
                                                    </a>  </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="location__icon--dark"></div>
                                                    <span className="font-weight-bold text-vulcan">Germany</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div className="d-flex flex-row">
                                            </div>
                                            <div className="mt-2">
                                                Offering an Organizer-app that has reached a product-market-fit and is expected to perf...
                                                <a className="link-color-inherited" href="https://flippa.com/users/3270159">Read more</a>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="mt-4" />

                                    <div className="mt-4">
                                        <div className="py-2">
                                            <p className="font-size-medium font-weight-bold">
                                                Verification Complete
                                            </p>
                                            <div>
                                                <img className="mb-1 me-2" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/onboarding/check-circle-a73c90f3df4ce3b6d3cf0f72eb31d7be310f5a33ce21f00b9f0d031e1c3b9f85.svg" alt="Check circle" />
                                                <span className="font-size-medium-small">
                                                    Email address
                                                </span>
                                            </div>
                                            <div className="mt-3">
                                                <img className="mb-1 me-2" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/onboarding/check-circle-a73c90f3df4ce3b6d3cf0f72eb31d7be310f5a33ce21f00b9f0d031e1c3b9f85.svg" alt="Check circle" />
                                                <span className="font-size-medium-small">
                                                    Phone number
                                                </span>
                                            </div>
                                            <div className="mt-3">
                                                <img className="mb-1 me-2" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/onboarding/check-circle-a73c90f3df4ce3b6d3cf0f72eb31d7be310f5a33ce21f00b9f0d031e1c3b9f85.svg" alt="Check circle" />
                                                <span className="font-size-medium-small">
                                                    Government ID
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-4' />
                            <div className="px-md-3 mt-4">
                                <div className="py-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="font-size-medium font-weight-bold">
                                            Payment Methods
                                        </span>
                                    </div>

                                    <div className="mt-3">
                                        <div className="mb-3">
                                            <img className="mb-1 mr-2" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/onboarding/check-circle-a73c90f3df4ce3b6d3cf0f72eb31d7be310f5a33ce21f00b9f0d031e1c3b9f85.svg" alt="Check circle" />
                                            <span className="font-size-medium-small">
                                                Escrow.com
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="border rounded p-4">
                                    <h5>
                                        Buying Advice
                                    </h5>

                                    <p>Flippa’s platform is free for buyers. Here are our tips for first-time buyers:</p>

                                    <hr />
                                    <h6 className="simple-collapsible">
                                        Before making an offer
                                        <img className="simple-collapsible-icon-inactive pull-right" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/chevron-down-ff228944a540a48a7e44017d85c707f98dd06025583d55749b426f27c8a498bf.svg" alt="Chevron down" />
                                        <img className="simple-collapsible-icon-active pull-right" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/chevron-up-39be580ffdf9f2c2f08e7ae8da56939ea1e0b1140aa3cf656fb18dd6fde4aa9d.svg" alt="Chevron up" />
                                    </h6>
                                    <div className="simple-collapsible-content">
                                        <p className="mt-2">
                                            <strong>1. Look for verified sellers.</strong> Sellers should verify their email, phone, and government ID. When a seller has completed all verifications, we identify them with a checkmark like this:
                                            <br />
                                        </p><div>
                                            <img src="https://d1zazrti94enmy.cloudfront.net/assets/icons/green-check-5c15d1911fbf9f5a236930b4941baad7dafbe003a20f2d09022cebc7023b0e96.svg" alt="Green check" />
                                        </div>
                                        <p></p>

                                        <p><strong>2. Review financials.</strong> Financials are seller-provided inputs. Always ask for verified financials. Ask for a tax return or request access to their dashboard. if it’s an ecommerce store get a transaction report.</p>

                                        <p><strong>3. Review traffic.</strong> Sellers can grant you access to Google Analytics. Ask for read-only access to verify site traffic.</p>

                                        <p><strong>4. Schedule a call.</strong> Communication is key. The best way to find out more is to speak directly with the seller. For your protection, keep all communication within Flippa.</p>

                                        <p><strong>5. Make the offer on Flippa.</strong> We’re here to help. Flippa does not charge buyers and by making an offer on Flippa you’ll get access to our post-sales support team.</p>

                                        <p>Need help?<br /><a href="mailto:support@flippa.com?body=I%20would%20like%20some%20help%20with%20this%20listing%3A%20https%3A%2F%2Fflippa.com%2F11050520&amp;subject=I%20would%20like%20some%20help">Contact Support</a></p>
                                    </div>

                                    <hr />

                                    <h6 className="simple-collapsible">
                                        After a successful offer
                                        <img className="simple-collapsible-icon-inactive pull-right" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/chevron-down-ff228944a540a48a7e44017d85c707f98dd06025583d55749b426f27c8a498bf.svg" alt="Chevron down" />
                                        <img className="simple-collapsible-icon-active pull-right" src="https://d1zazrti94enmy.cloudfront.net/assets/icons/chevron-up-39be580ffdf9f2c2f08e7ae8da56939ea1e0b1140aa3cf656fb18dd6fde4aa9d.svg" alt="Chevron up" />
                                    </h6>

                                    <div className="simple-collapsible-content">
                                        <p className="mt-2">
                                            <strong>1. Agreements &amp; Contracts.</strong>
                                            Connect with a US-based lawyer or purchase asset-specific template legal documents via <a href="https://flippa.com/flippa-legal" target="_blank">Flippa Legal</a>.
                                        </p>

                                        <p>
                                            <strong>2. Conduct Due Diligence.</strong>
                                            You can conduct this yourself, or use our new official due diligence service. We provide a deep analysis, identify hidden risks, and independently assess the value of the business. Packages start at $1,000. <a target="_blank" href="https://www.flippa.com/due-diligence?discounted=false&amp;listing_id=11050520&amp;return_to=https%3A%2F%2Fflippa.com%2Fcart%2Fnew%3Flisting_id%3D11050520%26return_to%3Dhttps%253A%252F%252Fflippa.com%252F11050520">Learn More</a>
                                        </p>

                                        <p>Need help?<br /><a href="mailto:support@flippa.com?body=I%20would%20like%20some%20help%20with%20this%20listing%3A%20https%3A%2F%2Fflippa.com%2F11050520&amp;subject=I%20would%20like%20some%20help">Contact Support</a></p>
                                    </div>

                                    <p className="mt-3">
                                    </p><p>For more buyer tips read our guide on <a href="https://flippa.com/blog/first-time-buyers-guide-buying-your-first-online-business/">how to buy an Online Business</a>.</p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="border rounded p-4 mt-4">
                                <div className="p-2">
                                    <img src="https://d1zazrti94enmy.cloudfront.net/assets/flippa-legal-ea90452512afd3b556f9b7e19578936f90223dfa711d5af9d7f25b965d410d78.svg" alt="Flippa legal" />
                                    <div className="mt-3">
                                        Engage a lawyer or buy a contract.
                                        <Link target="_blank" className="link-underline" to="https://flippa.com/flippa-legal">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded p-4 mt-4">
                                <div className="p-2">
                                    <img src="https://d1zazrti94enmy.cloudfront.net/assets/flippa-due-diligence-7e9aea8d909604e41c8acac75c500373d3b8a8e08deadb1b48b3b8b193f81355.svg" alt="Flippa due diligence" />
                                    <div className="mt-3">
                                        A new business verification &amp; assessment service from Flippa.
                                        <a target="_blank" className="link-underline" href="https://www.flippa.com/due-diligence?discounted=false&amp;listing_id=11050520&amp;return_to=https%3A%2F%2Fflippa.com%2Fcart%2Fnew%3Flisting_id%3D11050520%26return_to%3Dhttps%253A%252F%252Fflippa.com%252F11050520">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded p-4 mt-4">
                                <div className="p-2">
                                    <img src="https://d1zazrti94enmy.cloudfront.net/assets/flippa-finder-8f328bdbf21ae8754ce9ea1709930fe5d835bdc8703cee3ea67e0f987b956e7a.svg" alt="Flippa finder" />
                                    <div className="mt-3">
                                        A simpler way for first-time buyers to find and acquire online businesses.
                                        <Link target="_blank" className="link-underline" to="https://www.flippa.com/flippa-finder">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded p-4 mt-4">
                                <div className="p-2">
                                    <img src="https://d1zazrti94enmy.cloudfront.net/assets/flippa-valuations-d3cd0bfe4d8ca719ff985efff9f670bfaba42d3cf2f3d5664aa040beecdde13e.svg" alt="Flippa valuations" />
                                    <div className="mt-3">
                                        A simpler way for first-time buyers to find and acquire online businesses.
                                        <Link target="_blank" className="link-underline" to="/online-business-valuation">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded p-4 mt-4">
                                <div className="p-2">
                                    <img src="https://d1zazrti94enmy.cloudfront.net/assets/logo_partner_market-d273977896236cd2b1b0a4958063c5c36d75a368063e12ca6bb600e01e5ce513.svg" alt="Logo partner market" />
                                    <div className="mt-3">
                                        Buy growth services like SEO and ad management from our curated marketplace.
                                        <a target="_blank" className="link-underline" href="https://partner-market.flippa.com/">Browse Partners</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing;
