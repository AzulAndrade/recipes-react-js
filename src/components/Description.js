import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Description = () => {
  return (
    <div>
      <div class="recipe-headline my-5">
        <span>April 05, 2018</span>
        <h2>Vegetarian cheese salad</h2>
        <div class="recipe-duration">
          <h6>Prep: 15 mins</h6>
          <h6>Cook: 30 mins</h6>
          <h6>Yields: 8 Servings</h6>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="recipe-ratings text-right my-5">
          <div class="ratings">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </div>
          <a href="#" class="btn delicious-btn">
            For Begginers
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="single-preparation-step d-flex">
            <h4>01.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </div>
          <div class="single-preparation-step d-flex">
            <h4>02.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </div>
          <div class="single-preparation-step d-flex">
            <h4>03.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </div>
          <div class="single-preparation-step d-flex">
            <h4>04.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="ingredients">
            <h4>Ingredients</h4>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              ></input>
              <label class="custom-control-label" for="customCheck1">
                4 Tbsp (57 gr) butter
              </label>
            </div>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck2"
              ></input>
              <label class="custom-control-label" for="customCheck2">
                2 large eggs
              </label>
            </div>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck3"
              ></input>
              <label class="custom-control-label" for="customCheck3">
                2 yogurt containers granulated sugar
              </label>
            </div>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck4"
              ></input>
              <label class="custom-control-label" for="customCheck4">
                1 vanilla or plain yogurt, 170g container
              </label>
            </div>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck5"
              ></input>
              <label class="custom-control-label" for="customCheck5">
                2 yogurt containers unbleached white flour
              </label>
            </div>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck6"
              ></input>
              <label class="custom-control-label" for="customCheck6">
                1.5 yogurt containers milk
              </label>
            </div>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck7"
              ></input>
              <label class="custom-control-label" for="customCheck7">
                1/4 tsp cinnamon
              </label>
            </div>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck8"
              ></input>
              <label class="custom-control-label" for="customCheck8">
                1 cup fresh blueberries{" "}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="section-heading text-left">
            <h3>Leave a comment</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="contact-form-area">
            <form action="#" method="post">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                  ></input>
                </div>
                <div class="col-12 col-lg-6">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="E-mail"
                  ></input>
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                  ></input>
                </div>
                <div class="col-12">
                  <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button class="btn delicious-btn mt-30" type="submit">
                    Post Comments
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
