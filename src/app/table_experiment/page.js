import './style.css'

const data = [
	{
		tag: '<table>',
		name: 'Table',
		description: 'The wrapper element for all HTML tables.',
	},
	{
		tag: '<thead>',
		name: 'Table Head',
		description: 'The set of rows defining the column headers in a table.',
	},
	{
		tag: '<tbody>',
		name: 'Table Body',
		description: 'The set of rows containing actual table data.',
	},
	{
		tag: '<tr>',
		name: 'Table Row',
		description: 'The table row container.',
	},
	{
		tag: '<td>',
		name: 'Table Data',
		description: 'The table row container.',
	},
	{
		tag: '<tfoot>',
		name: 'Table Foot',
		description: 'The set of rows defining the footer in a table.',
	},
]

export default function () {
	return (
		<div className='p-10'>
			<h1>HTML Table Tags</h1>
			<br />
			<table>
				<tr>
					<th>tag</th>
					<th>name</th>
					<th>description</th>
				</tr>
				{data.map(row => (
					<tr>
						<td>
							<span className='tag'>{row.tag}</span>
						</td>
						<td>{row.name}</td>
						<td>{row.description}</td>
					</tr>
				))}
			</table>
		</div>
	)
}
