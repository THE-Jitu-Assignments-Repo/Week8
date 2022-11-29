import React from "react";
import { FaChartArea, FaInbox, FaMobile, FaTelegram, FaWhatsapp } from "react-icons/fa";
import './contact.css';

function Contact() {
  return (
    <div className="contact--main">
      <div className="contact--img">
        <img src="/assests/cotact us.svg" alt="contact-us" />
      </div>

      <div className="contact--form">
        <div className="contact--form--item">
          <div className="contact--form--item--label">
            <div className="contact--form--item--label-text">
              Contact us
            </div>
            <div className="contact-links">
              <span>WE WOULD LOVE TO HEAR FROM YOU</span>
              <p>Wheather you are curious about a new feature or a new product in the E-market...</p>
            </div>
            <div className="contact-to">
              <div className="sales">
                <div className="sales-img">
                  <img src="https://imgs.search.brave.com/Hw_3B98E7OedpCAWRIajaMhZxfFHV8Lr3ZjZrnVf0gU/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zYWxl/cy1yZXByZXNlbnRh/dGl2ZS1hYnN0cmFj/dC1jb25jZXB0LXZl/Y3Rvci1pbGx1c3Ry/YXRpb24tYi1hZ2Vu/dC10ZWxlbWFya2V0/aW5nLWNvbW1lcmNp/YWwtZGlyZWN0LW1h/cmtldGluZy1idXNp/bmVzcy1kZXZlbG9w/bWVudC0yMDQ5NDcx/NDYuanBn" alt="sales" />
                </div>
                <span>Talk to Sales</span>
                <div className="text">
                  <p>interested with advertising or saling your products with E-market? Just pick up the phone and call this Number..</p>
                  <p>+254 797934037</p>
                </div>
              </div>
              <div className="sales">
                <div className="sales-img">
                  <img src="https://imgs.search.brave.com/wDeNGFnTKKZoh-KxYsNzhVmXkLrHnRccEdTat5-MQ54/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzU2/MC8wMjkvb3JpZ2lu/YWwvY3VzdG9tZXIt/c2VydmljZS13b21h/bi13aXRoLWhlYWRw/aG9uZXMtYW5kLW1p/Y3JvcGhvbmUtd2l0/aC1sYXB0b3AtY29u/Y2VwdC1pbGx1c3Ry/YXRpb24tZm9yLXN1/cHBvcnQtY2FsbC1j/ZW50ZXItdmVjdG9y/LmpwZw" alt="sales" />
                </div>
                <span>Contact Customer Support</span>
                <div className="text">
                  <p>Sometimes you need a little help from your peer and E-market support rep. Don't worry we are here for you.. </p>
                  <ul className="contact-icon">
                  <li><FaTelegram /></li>
                  <li><FaWhatsapp /> </li>
                  <li><FaMobile /></li>
                  <li><FaInbox /></li>  
                   </ul>
                </div>
              </div>

            </div>
  
             
      </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
