import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>ITFIXSAUDI</h3>

				<p class="footer-links">
					<a href="/home" class="link-1">Home</a>
					
					<a href="/Service">Service</a>
				
					<a href="/support">Support</a>
				
				
				</p>

				<p class="footer-company-name">ITFIXSAUDI © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>11564.Riyadh</span> Riyadh , Saudi Arabia</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@ITFIXSAUDI.com">support@itfixSaudi.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>follow us</span>
				</p>

				<div class="footer-icons">

					<a href="#"><i><img src='https://www.svgrepo.com/show/183608/twitter.svg'></img></i></a>
					<a href="#"><img src='https://www.svgrepo.com/show/183607/facebook.svg'></img></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
        )
    }
}
