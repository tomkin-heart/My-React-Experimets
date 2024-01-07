const events = [
	{
		from: 'Mon, 11 Dec 2023 16:30:00 GMT',
		till: 'Mon, 11 Dec 2023 18:00:00 GMT',
		description: '16:30-18:00 Hatha Yoga',
	},
	{
		from: 'Wed, 13 Dec 2023 17:30:00 GMT',
		till: 'Wed, 13 Dec 2023 19:00:00 GMT',
		description: '17:30-19:00 Group Music Therapy',
	},
	{
		from: 'Sun, 17 Dec 2023 10:00:00 GMT',
		till: 'Sun, 17 Dec 2023 12:00:00 GMT',
		description: '10:00-12:00 Soul Motion Dance',
	},
]

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
]

export default function () {
	const startDate = new Date('Mon, 08 Jan 2024 00:00:00 GMT')

	return (
		<div className='flex'>
			{days.map((day, index) => {
				const day_beg = new Date(startDate.getTime())
				day_beg.setDate(day_beg.getDate() + index)

				const day_end = new Date(startDate.getTime())
				day_end.setDate(day_end.getDate() + index + 1)

				const filteredEvents = events.filter(
					event =>
						new Date(event.from).getDay() ===
						new Date(day_beg).getDay()
				)

				return (
					<div className='flex-1 border rounded'>
						<div className='text-center p-2 text-[10px]'>
							{day} {day_beg.getDate()}
						</div>
						<div className='h-[370px] relative'>
							{filteredEvents.map(event => {
								const d_from = new Date(event.from)
								const d_till = new Date(event.till)
								const top = (d_from.getHours() - 10) * 30
								const bottom = (d_till.getHours() - 10) * 30
								return (
									<div
										style={{top: top, height: bottom - top}}
										className='absolute bg-[#d0dc3c] rounded-[8px] border-[1px] border-lime-200 text-xs pt-2 pl-1'
									>
										{event.description}
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}
