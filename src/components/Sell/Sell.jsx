import React from 'react'

function Sell() {
    return (
        <div class="pt-5">
            <div class="container-up-xl">
                <div class="heading">
                    <h2 class="text-center mb-2">What are you selling?</h2>
                </div>
                <h5 class="text-center text-muted pt-1 mb-5">300,000+ buyers are waiting</h5>
            </div>

            <div class="container m-2">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <form accept-charset="UTF-8">
                            <div class="row mt-3">
                                <div class="col-md-10 pr-md-0">
                                    <h6>Enter your URL to start selling</h6>
                                    <div class="border rounded">
                                        <input type="text" name="url" class="rounded border-0 w-100 p-3" autocomplete="off" />
                                    </div>
                                    <small class="form-text text-muted d-block d-md-none">Use Play Store or App Store URL for mobile apps.</small>
                                </div>
                                <div class="col-md-2 mt-3 mt-md-0 align-self-end">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block btn-h">Continue</button>
                                </div>
                            </div>
                            <small class="form-text text-muted d-none d-md-block">Use Play Store or App Store URL for mobile apps.</small>
                        </form>
                    </div>
                </div>
            </div>



            <div class="container">
                <h5 class="text-center mt-5">What you can sell here:</h5>

                <div class="row mt-4">
                    <div class="col-12 col-md-6 col-lg-3 mb-4">
                        <div class="border rounded p-4 big-tile">
                            <div class="">
                                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#E5E8EC"></circle>
                                    <path fill="#7996A4" d="M12 16h6v13h-6zM21 11h7v18h-7z"></path>
                                </svg>

                            </div>
                            <p class="mt-3 mb-1 font-weight-bold">Established Websites and Online Businesses</p>
                            <p class="text-muted">Websites or online businesses that are trading and have been generating revenue for at least 1 year.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-4">
                        <div class="border rounded p-4 big-tile">
                            <div class="">
                                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#C4F3DF"></circle>
                                    <path fill="#00C57F" d="M12 12h16v3H12zM12 17h4v11h-4zM18 17h10v11H18z"></path>
                                </svg>

                            </div>
                            <p class="mt-3 mb-1 font-weight-bold">Starter/Template Websites</p>
                            <p class="text-muted">Starter site less than 1 year old, or a template site.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-4">
                        <div class="border rounded p-4 big-tile">
                            <div class="">
                                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#FEDDD1"></circle>
                                    <path d="M26.802 21.475c.198.181.25.462.146.693a.668.668 0 01-.615.402h-3.98l2.095 4.781a.638.638 0 01-.354.844l-1.844.754a.68.68 0 01-.875-.342l-1.99-4.54-3.25 3.134a.677.677 0 01-.468.19.689.689 0 01-.25-.05.645.645 0 01-.417-.592V11.643c0-.261.167-.493.417-.593a.689.689 0 01.25-.05c.177 0 .344.06.468.19l10.667 10.285z" fill="#FF7A45"></path>
                                </svg>

                            </div>
                            <p class="mt-3 mb-1 font-weight-bold">Domains</p>
                            <p class="text-muted">Domain names that are undeveloped or parked.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-4">
                        <div class="border rounded p-4 big-tile">
                            <div class="">
                                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#E1D4F5"></circle>
                                    <path d="M17.67 18.857h-4.484A1.187 1.187 0 0112 17.671v-4.485c0-.655.531-1.186 1.186-1.186h4.485c.655 0 1.186.531 1.186 1.186v4.485c0 .655-.531 1.186-1.186 1.186zM26.815 18.857h-4.484a1.187 1.187 0 01-1.186-1.186v-4.485c0-.655.531-1.186 1.186-1.186h4.484c.655 0 1.187.531 1.187 1.186v4.485c0 .655-.532 1.186-1.187 1.186zM17.67 28h-4.484A1.187 1.187 0 0112 26.814v-4.485c0-.655.531-1.186 1.186-1.186h4.485c.655 0 1.186.531 1.186 1.186v4.485c0 .655-.531 1.186-1.186 1.186zM26.815 28h-4.484a1.187 1.187 0 01-1.186-1.186v-4.485c0-.655.531-1.186 1.186-1.186h4.484c.655 0 1.187.531 1.187 1.186v4.485c0 .655-.532 1.186-1.187 1.186z" fill="#8A5DDA"></path>
                                </svg>

                            </div>
                            <p class="mt-3 mb-1 font-weight-bold">iOS or Android Apps</p>
                            <p class="text-muted">Established or Starter Apps for mobile or tablet.</p>
                        </div>
                    </div>
                </div>

                <div class="row mt-1 mb-6">
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/amazon-fba-8ea9f352d11296dffe4729ba7f73a45d6a1e4377a4188938b9314d6fa784dbae.png" alt="Amazon fba" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Amazon FBA Stores</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/amazon-fbm-719c8ef620f38a2769c162074353d886f83bc0e45f42ca7494823916959a0ec2.svg" alt="Amazon fbm" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Amazon FBM Stores</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/amazon-kdp-9d33d779ba40f8463cd2be66e281a830843c4230572646df708730ef3aef10ed.png" alt="Amazon kdp" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Amazon KDP</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/amazon-merch-82e94f7e99ac6b5cc2e57644415b01abb8215db65c458b610916a036e1e6dad4.png" alt="Amazon merch" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Merch by Amazon</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/saas-app-6f9d4830b264cc146e4e512e121249288d150b78fd2d249b95d0e5e1d2bbb385.png" alt="Saas app" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Saas Apps</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/bigcommerce-store-000cad67fdc9fec9bebd7d52bc086dfc94534ff7a8d621ad154f7084901d0d97.png" alt="Bigcommerce store" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">BigCommerce Stores</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/shopify-store-f1a8e633d45e94244037867a8ba6c8fa48133e0c28e6a08403989493ed643a21.png" alt="Shopify store" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Shopify Stores</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/desktop-app-43ac711a54a4f80e76a2adc9edfd1dbfc45d06201aa046607a2487a187a3449e.png" alt="Desktop app" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Desktop Apps</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/newsletter-912ea561ab3f0351e716d3ee26c571c8b27e2c461a20cab7bdd20ac446fdf285.png" alt="Newsletter" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Newsletters</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="border rounded p-4">
                            <div class="d-inline mr-3">
                                <img src="https://d1zazrti94enmy.cloudfront.net/assets/sell/side-project-c54fb048be60093749d361c968d4801c3e9a53be4ffddc7cb22426d4e2ebff0e.png" alt="Side project" />
                            </div>
                            <p class="mt-3 mb-1 d-inline font-weight-bold">Side Projects</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Sell
