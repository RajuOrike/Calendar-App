import React from 'react'

export default function CalendarHeader({ date, onPrev, onNext, onToday }){
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-2">
        <button onClick={onPrev} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">Prev</button>
        <button onClick={onNext} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">Next</button>
        <button onClick={onToday} className="px-3 py-2 rounded-lg bg-blue-500 text-white hover:opacity-90">Today</button>
      </div>
      <h2 className="text-xl font-semibold">{date.format('MMMM YYYY')}</h2>
      <div />
    </div>
  )
}
