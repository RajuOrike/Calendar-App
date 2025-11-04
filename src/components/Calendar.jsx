import React, { useState } from 'react'
import dayjs from 'dayjs'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'
import events from '../data/events.json'

export default function Calendar(){
  const [date, setDate] = useState(dayjs())

  const handlePrev = () => setDate(date.subtract(1, 'month'))
  const handleNext = () => setDate(date.add(1, 'month'))
  const handleToday = () => setDate(dayjs())

  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg">
      <CalendarHeader date={date} onPrev={handlePrev} onNext={handleNext} onToday={handleToday} />
      <CalendarGrid date={date} events={events} />
    </div>
  )
}
