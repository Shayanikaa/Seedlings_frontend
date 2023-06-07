import React from 'react'
import "../styles/contact.css"

export default function ContactUs() {
    return (
        <div>
            <div className="map">
            <iframe title='mymap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21192781714!2d88.27731213729851!3d22.535570755472904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1677356411116!5m2!1sen!2sin" ></iframe>
            </div>
            <h1 className='contactheading'>Contact Us</h1>
            <div className="myform">
                
                <div>
                    <form className='formflex'
                        action="https://formspree.io/f/xnqydevr"
                        method="POST"
                    >
                        <label>
                            Your email:
                            <br />
                            <input type="email" name="email"/>
                        </label>
                        <label>
                            Your message:
                            <br />
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}