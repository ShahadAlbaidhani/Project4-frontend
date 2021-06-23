import React, { Component } from 'react'
import { ArrowRight } from 'react-bootstrap-icons';
import * as Icon from 'react-bootstrap-icons';

// import { IconName } from "react-icons/bs";

export class ListServies extends Component {
  render() {
    return (
      <>
        <div class="d-flex justify-content-center mt-5">
          <div>
            <div class="services-container ">
              <div class="inner-width">
                <h1 class="services-title">How do you request a repair?</h1>
                <div class="services-border"></div>
                <div class="services-content">

                  <div class="services-content--box">
                    <div class="services-content__icon">
                      <i><Icon.Laptop /></i>
                    </div>
                    <div class="services-content__title">
                      Choose the device / software type            </div>

                  </div>




                  <div class="services-content--box">
                    <div class="services-content__icon">
                      <i ><Icon.PersonCheck /></i>
                    </div>
                    <div class="services-content__title">
                      Choose the technician           </div>

                  </div>
                  <div class="services-content--box">
                    <div class="services-content__icon">
                      <i ><Icon.ChatDots /></i>
                    </div>
                    <div class="services-content__title">
                      Write your problem </div>

                  </div>
                  <div class="services-content--box">
                    <div class="services-content__icon">
                      <i><Icon.Check /></i>
                    </div>
                    <div class="services-content__title">
                      Waite for an approval from the technician          </div>
                  </div>
                  <div class="services-content--box">
                    <div class="services-content__icon">
                      <i ><Icon.GeoAlt /></i>
                    </div>
                    <div class="services-content__title">
                      We take your device </div>
                  </div>
                  <div class="services-content--box">
                    <div class="services-content__icon">
                      <i><Icon.Wrench /></i>
                    </div>
                    <div class="services-content__title">
                      Repair it and return it to you            </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </>

    )
  }
}

export default ListServies



