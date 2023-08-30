import Link from 'next/link'

export default function () {
	return (
		<div className='p-10'>
			<h1>Hi this are my React experiments:</h1>
			<br />
			<li>
				<ul>
					<Link href='/table_experiment'>Table Experiment</Link>
				</ul>
			</li>
		</div>
	)
}
