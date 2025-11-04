import React from 'react'
import { generateCalendar } from '../helpers/dateUtils'
import DayCell from './DayCell'
import dayjs from 'dayjs'

const WEEKDAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

export default function CalendarGrid({ date, events }){
  const days = generateCalendar(date.format('MM'), date.format('YYYY'))
  const today = dayjs().format('YYYY-MM-DD')

  return (
    <div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {WEEKDAYS.map(w => (
          <div key={w} className="text-center font-medium">{w}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((d, idx) => {
          const fullDate = d ? date.date(d).format('YYYY-MM-DD') : null
          const dayEvents = fullDate ? events.filter(ev => ev.date === fullDate) : []
          return (
            <DayCell key={idx} day={d} isToday={fullDate === today} events={dayEvents} />
          )
        })}
      </div>
    </div>
  )
}
