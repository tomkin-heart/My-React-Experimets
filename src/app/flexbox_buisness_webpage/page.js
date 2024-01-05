import './styles.css'
import Calender from './components/Calender'

export default function () {
	return (
		<div className='max-w-[1200px] m-auto'>
			<nav className='fixed bg-tranparent w-full max-w-[1200px]'>
				<ul className='nav flex gap-8 justify-end py-4 px-8'>
					<li>
						<a href='#events'>Events</a>
					</li>
					<li>
						<a href='#schedule'>Schedule</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
			<div className='w-full bg-[url("/flexbox_business/bg.jpg")] bg-cover bg-center rounded flex justify-center items-center'>
				<h1 className='text-center py-40 px-10 max-w-[700px]'>
					Creative Place Cologne
				</h1>
			</div>
			<div className='quoteDiv text-center h-[70vh] flex justify-center items-center px-8'>
				<p className='quote'>
					Welcome to the unique place for selfcare, health and
					creativity.
				</p>
			</div>
			<div className='bg-gray-100 rounded' id='events'>
				<h2 className='text-center p-14'>Actuall Events:</h2>
				<div className='events flex gap-1 justify-center pb-14'>
					<div className='text-center'>
						<img
							src='/flexbox_business/Moya.jpg'
							className='flex-1 max-w-full h-48 object-cover rounded'
						/>
						<h3 className='p-3'>
							Soul Motion Dance with{' '}
							<a
								href='https://www.mukulala.com/körper/soul-motion-tanz/'
								target='_blank'
							>
								Moya
							</a>
						</h3>
					</div>
					<div className='text-center'>
						<img
							src='/flexbox_business/Ritu.jpg'
							className=' flex-1 h-48 max-w-full object-cover rounded'
						/>
						<h3 className='p-3'>
							Yoga with{' '}
							<a
								href='https://www.yogagyani.com/about/'
								target='_blank'
							>
								Ritu
							</a>
						</h3>
					</div>
					<div className='text-center'>
						<img
							src='/flexbox_business/Musiktherapie.png'
							className='flex-1 max-w-full h-48 object-cover rounded'
						/>
						<h3 className='p-3'>
							Music Therapy with{' '}
							<a
								href='https://www.tamara-serikova.com/media'
								target='_blank'
							>
								Toma
							</a>
						</h3>
					</div>
				</div>
			</div>
			<div className='py-16' id='schedule'>
				<h2 className='p-8 text-center'>Shedule:</h2>
				<Calender />
			</div>
			<div className='text-center px-16 pb-32 pt-16' id='contact'>
				<h2 className='pb-10'>Contact us:</h2>
				<div className='flex justify-center gap-10  w-full'>
					<div className='bg-gray-100 p-10 rounded w-[500px]'>
						<form className='w-full'>
							<div className='form'>
								<label>Your name:</label>
								<input className='w-full' />
								<br />
							</div>
							<div className='form'>
								<label>Your e-mail:</label>

								<input className='w-full' />
								<br />
							</div>
							<div className='form'>
								<label>Your message:</label>

								<input className='h-10 w-full' />
								<br />
							</div>
							<button className='w-32 bg-[#d0dc3c] rounded p-4 hover:opacity-50 active:bg-green-950'>
								Submit
							</button>
						</form>
					</div>
					<div className='bg-gray-100 p-10 rounded w-[500px]'>
						<h3 className='mb-2'>Location:</h3>
						<div className='location'>
							<p className='adress'>
								Breite Strasse 555 <br />
								50667 Köln
							</p>
							<img
								src='/flexbox_business/location.png'
								className='h-48 mt-4'
							/>
						</div>
					</div>
				</div>
			</div>
			<footer className='bg-[#d0dc3c] p-6'>
				<h3>2023 All rights reserved</h3>
			</footer>
		</div>
	)
}
