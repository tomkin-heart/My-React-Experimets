'use client'

import './styles.css'
import {useState} from 'react'

export default function () {
	const [getTheme, setTheme] = useState(true)

	return (
		<div
			className={`${
				getTheme ? 'theme-light' : 'theme-dark'
			} background-middle`}
		>
			<button
				className='btn primary switch'
				onClick={e => setTheme(!getTheme)}
			>
				{getTheme ? 'dark' : 'light'}
			</button>
			<h1>My Website Style Guide</h1>
			<div className='hug'>
				<div className='container'>
					<table>
						<tbody>
							<tr>
								<td className='desc'>
									text-30-header: Huge Franklin Gothic Medium
								</td>
								<td
									id='header-huge'
									style={{lineHeight: '90%'}}
								>
									Header Huge
								</td>
							</tr>
							<tr>
								<td className='desc'>
									text-20-header: Big Text Helvetica
								</td>
								<td>
									<h1>Header Big</h1>
								</td>
							</tr>
							<tr>
								<td className='desc'>
									text-10-header: Big Text Helvetica
								</td>
								<td>
									<h2>Header Small</h2>
								</td>
							</tr>
							<tr>
								<td className='desc'>
									text-10: Big Text Helvetica
								</td>
								<td
									style={{
										display: 'inline-block',
										maxWidth: '75ch',
										fontSize: 'var(--t10)',
									}}
								>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry.
								</td>
							</tr>
							<tr>
								<td className='desc'>
									text-00-header: Normal Text Helvetica
								</td>
								<td>
									<h4>Subheading</h4>
								</td>
							</tr>
							<tr>
								<td className='desc'>
									text-00: Normal Text Helvetica
								</td>
								<td>
									Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
								</td>
							</tr>
							<tr>
								<td className='desc'>
									text-01: Small Text Helvetica
								</td>
								<td style={{fontSize: 'var(--t01)'}}>
									Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='container'>
					<h2>Colors</h2>
					<div className='color-themes'>
						<div
							className='theme-light'
							style={{
								border: '1px solid var(--sl)',
								borderRadius: 32,
								backgroundColor: 'var(--bg)',
							}}
						>
							<h4 style={{textAlign: 'center', paddingTop: 16}}>
								Light Theme
							</h4>
							<div className='theme-structure'>
								<p
									className='color line'
									style={{
										backgroundColor: 'var(--bg)',
										gridColumn: 'span 2',
									}}
								>
									Background: white
								</p>
								<p
									className='color'
									style={{backgroundColor: 'var(--sa)'}}
								>
									Surface-area: <br />
									hsla(0, 0%, 20%, 0.1)
								</p>
								<p
									className='color line'
									style={{borderColor: 'var(--sl)'}}
								>
									Surface-line: <br />
									hsla(0, 0%, 20%, 0.2)
								</p>
								<p
									className='color'
									style={{backgroundColor: 'var(--ma)'}}
								>
									Middle-area: <br />
									hsla(0, 0%, 20%, 0.35)
								</p>
								<p
									className='color line'
									style={{borderColor: 'var(--ml)'}}
								>
									Middle-line: <br />
									hsla(0, 0%, 20%, 0.4)
								</p>
								<p
									className='color'
									style={{
										backgroundColor: 'var(--fg)',
										color: 'white',
										gridColumn: 'span 2',
									}}
								>
									Forground: black
								</p>
								<p
									className='color'
									style={{
										backgroundColor: 'var(--active)',
										color: 'white',
										gridColumn: 'span 2',
									}}
								>
									Active: hsl(291, 85%, 50%);
								</p>
							</div>
						</div>
						<div
							className='theme-dark'
							style={{
								borderRadius: 32,
								backgroundColor: 'var(--bg)',
								border: '1px solid var(--sl)',
							}}
						>
							<h4 style={{textAlign: 'center', paddingTop: 16}}>
								Dark Theme
							</h4>
							<div className='theme-structure'>
								<p
									className='color line'
									style={{
										backgroundColor: 'var(--bg)',
										gridColumn: 'span 2',
									}}
								>
									Background: hsl(0, 0%, 15%);
								</p>
								<p
									className='color'
									style={{backgroundColor: 'var(--sa)'}}
								>
									Surface-area: <br />
									hsla(0, 0%, 20%, 0.1)
								</p>
								<p
									className='color line'
									style={{borderColor: 'var(--sl)'}}
								>
									Surface-line: <br />
									hsla(0, 0%, 20%, 0.2)
								</p>
								<p
									className='color'
									style={{backgroundColor: 'var(--ma)'}}
								>
									Middle-area: <br />
									hsla(0, 0%, 20%, 0.35)
								</p>
								<p
									className='color line'
									style={{borderColor: 'var(--ml)'}}
								>
									Middle-line: <br />
									hsla(0, 0%, 20%, 0.4)
								</p>
								<p
									className='color'
									style={{
										backgroundColor: 'var(--fg)',
										color: 'black',
										gridColumn: 'span 2',
									}}
								>
									Forground: white
								</p>
								<p
									className='color'
									style={{
										backgroundColor: 'var(--active)',
										color: 'white',
										gridColumn: 'span 2',
									}}
								>
									Active: hsl(300, 59%, 47%);
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<h2>Buttons</h2>
					<br />
					<div
						style={{
							display: 'grid',
							gap: 16,
							gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
							gridAutoFlow: 'column',
						}}
					>
						<button className='btn-test primary'>primary</button>
						<button className='btn-test primary test-hover'>
							hover
						</button>
						<button className='btn-test primary test-active'>
							active
						</button>
						<button className='btn-test primary test-disabled'>
							disabled
						</button>
						<button className='btn primary'>Test</button>
						<button className='btn-test'>secondary</button>
						<button className='btn-test test-hover'>hover</button>
						<button className='btn-test test-active'>active</button>
						<button className='btn-test test-disabled'>
							disabled
						</button>
						<button className='btn'>Test</button>
					</div>
				</div>
			</div>
		</div>
	)
}
