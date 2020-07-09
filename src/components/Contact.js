import React, { Fragment } from "react";
import "../style.css";
import Logo from "../img/bg-img/logofinal.png";

const Contact = () => {
  return (
    <Fragment>
      <div>
        <div
          id="contact"
          class="contact-information-area section-padding-80 mb-80"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="logo mb-80">
                  <img src="img/core-img/logo.png" alt=""></img>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-5">
                <div class="elements-title mb-80">
                  <h2>Contact</h2>
                </div>
                <div class="contact-text">
                  <p>
                    I am Azul, a systems engineer working as a frontend
                    developer and UX designer. Hard-working, with high attention
                    to detail, who loves to code, build great products in the
                    least amount of time and help businesses succeed with their
                    goals.
                  </p>
                  <p>
                    I have designed and developed several mobile and webapps with React
                    JS and Wordpress. Passionate about web development and UX-UI design.
                  </p>
                </div>
              </div>

              <div class="col-12 col-lg-3">
                <div class="elements-title mb-80">
                  <br></br>
                </div>
                <div class="single-contact-information mb-30">
                  <h6>LinkedIn:</h6>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/azul-andrade/"
                  >
                    <p>/azul-andrade</p>
                  </a>
                </div>
                <div class="single-contact-information mb-30">
                  <h6>Email:</h6>
                  <a href="mailto:azulandrade1@gmail.com">
                    <p>azulandrade1@gmail.com</p>
                  </a>
                </div>
              </div>

              <div class="col-12 col-lg-4">
                <div class="newsletter-form bg-img bg-overlay">
                  <a href="index.html">
                    <img class="footer-logo" src={Logo} alt=""></img>
                  </a>
                  <p>See more of my projects</p>
                  <button type="submit" class="btn delicious-btn w-100">
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
