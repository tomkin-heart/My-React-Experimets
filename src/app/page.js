import Link from 'next/link'

export default function () {
	return (
		<div className='p-10'>
			<h1>Hi this are my React experiments:</h1>
			<br />
			<ul>
				<li>
					<Link href='/table_experiment'>Table Experiment</Link>
				</li>
				<li>
					<Link href='/my-website-design-system'>
						My-website-design-system
					</Link>
				</li>
				<li>
					<Link href='/tee_cozy'>Design-Project_Tee-Cozy</Link>
				</li>
			</ul>
		</div>
	)
}
