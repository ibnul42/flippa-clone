import "./verification.scss"

function Verification() {
    return (
        <div className="verification">
            <h3>ID Verification</h3>

            <div className="phone_verific">
                <h4>Phone Verification</h4>
                <p>We highly encourage you to verify your phone number. It is necessary to perform some buyer actions, and helps instill confidence and trust in the marketplace.</p>
                <button type="submit" className='btn_style'>Verify Now</button>
            </div>

            <div className="credit_verific">
                <h4>Credit Card Verification</h4>
                <p>Before you can place a bid over $200 we require you to verify your credit card and billing information with us. This process is free and only takes a few minutes to complete.</p>
                <button type="submit" className='btn_style'>Verify Now</button>
            </div>

            <div className="linkedin_verific">
                <h4>LinkedIn Verification</h4>
                <p>Connecting your LinkedIn profile with Flippa gives other users extra confidence in you. They know that you're willing to tie your account and your identity to a site external to Flippa.</p>
                <button type="submit" className='btn_style'>Connect Now</button>
            </div>
            
        </div>
    )
}

export default Verification
