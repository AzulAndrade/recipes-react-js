import React, { Fragment } from "react";
import Search from "./Search";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div>
        <div class="header-area">
          <div class="delicious-main-menu">
            <div class="classy-nav-container breakpoint-off">
              <div class="container">
                <nav
                  class="classy-navbar justify-content-between"
                  id="deliciousNav"
                >
                  <a class="nav-brand" href="index.html">
                    <img src="img/core-img/logo.png" alt=""></img>
                  </a>

                  <div class="classy-navbar-toggler">
                    <span class="navbarToggler">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>

                  <div class="classy-menu">
                    <div class="classycloseIcon">
                      <div class="cross-wrap">
                        <span class="top"></span>
                        <span class="bottom"></span>
                      </div>
                    </div>

                    <div class="classynav">
                      <ul>
                        <li class="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <Router>
                            <Link to="/Search">Drinks</Link>
                            <Route path="/Search">
                              <Search />
                            </Route>
                          </Router>
                        </li>
                        <li>
                          <a href="recipe-post.html">Food</a>
                        </li>
                        <li>
                          <Router>
                            <Link to="#Contact">Contact</Link>
                          </Router>
                        </li>
                      </ul>
                      <div class="search-btn">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                      <div class="search-btn">
                        <i class="fa fa-github" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-area">
          <div class="hero-slides">
            <div class="single-hero-slide bg-img">
              <div class="container h-100">
                <div class="row h-100 align-items-center">
                  <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div
                      class="hero-slides-content"
                      data-animation="fadeInUp"
                      data-delay="100ms"
                    >
                      <p data-animation="fadeInUp" data-delay="700ms">
                        Welcome to this awesome recipes App developed with React JS and REST APIs.
                        Here you can learn how to make you favourite drinks and
                        meals.
                        <br></br>
                      </p>
                      <a
                        href="#"
                        class="btn delicious-btn"
                        data-animation="fadeInUp"
                        data-delay="1000ms"
                      >
                        Get Started!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recipe-post-area section-padding-250">
          <div class="recipe-post-search mb-180">
            <div class="container">
              <div class="elements-title mb-80">
                <h2>What are you looking for?</h2>
              </div>
              <div class="row">
                <div class="col-12 col-lg-3 text-right">
                  <button class="btn delicious-btn">Food</button>
                </div>
                <div class="col-12 col-lg-3 text-right">
                  <button class="btn delicious-btn">Drinks</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
