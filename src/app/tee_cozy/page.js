import './style.css'

export default function () {
	return (
		<div className='bigContainer'>
			<header>
				<img src='./photos/img-tea-cozy-logo.png' className='label' />
				<nav>
					<a>Mission</a>
					<a>Featured Tea</a>
					<a>Locations</a>
				</nav>
			</header>

			<div className='landing'>
				<img src='./photos/img-mission-background.jpg' />
				<div>
					<h2>Our Mission</h2>
					<h4>
						Handpicked, Artisanally curated, Free Range,
						Sustainable, Small Batch, Fair Trade, Organic Tea
					</h4>
				</div>
			</div>

			<div className='products'>
				<h2>Tea of the Month</h2>
				<h4>What's steeping at the Tea Cozy?</h4>
				<div className='teaSorts'>
					<div>
						<img src='./photos/img-berryblitz.jpg' />
						<h4>Fall Berry Blitz Tea</h4>
					</div>
					<div>
						<img src='./photos/img-spiced-rum.jpg' />
						<h4>Spiced Room Tea</h4>
					</div>
					<div>
						<img src='./photos/img-donut.jpg' />
						<h4>Seasonal Donuts</h4>
					</div>
					<div>
						<img src='./photos/img-donut.jpg' />
						<h4>Myrtle Ave Tea</h4>
					</div>
					<div>
						<img src='./photos/img-bedford-bizarre.jpg' />
						<h4>Bedford Bizzare Tea</h4>
					</div>
				</div>
			</div>

			<div className='locations'>
				<h2>Locations</h2>
				<div className='adresses'>
					<div>
						<h3>Downtown</h3>
						<p>384 West 4th St</p>
						<p>Suite 108 </p>
						<p> Portland, Maine</p>
					</div>
					<div>
						<h3>East Bayside</h3>
						<p>3433 Phisherman's Avenue </p>
						<p>(Northwest Corner)</p>
						<p> Portland, Maine</p>
					</div>
					<div>
						<h3>Oakdale</h3>
						<p>515 Crescent Avenue </p>
						<p>Second Floor </p>
						<p>Portland, Maine</p>
					</div>
				</div>
			</div>

			<div className='contact'>
				<h2>The Tea Cozy</h2>
				<h5>contact@theteacozy.com</h5>
				<p>917-555-8904</p>
			</div>

			<footer>Copyright The Tea Cozy 2017</footer>
		</div>
	)
}
