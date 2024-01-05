import Link from 'next/link'

export default function () {
	return (
		<div className='p-10'>
			<h1>Hi this are my React experiments:</h1>
			<br />
			<ul>
				<li>
					<Link href='/table_experiment'>Table_Experiment</Link>
				</li>
				<li>
					<Link href='/my-website-design-system'>
						My_Website_Design_System
					</Link>
				</li>
				<li>
					<Link href='/tee_cozy'>Design_Project_Tee-Cozy</Link>
				</li>
				<li>
					<Link href='/flexbox_buisness_webpage'>
						Flexbox_Buisness_Webpage
					</Link>
				</li>
			</ul>
		</div>
	)
}
