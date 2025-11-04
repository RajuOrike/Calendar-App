import React from 'react'

export default function DayCell({ day, isToday, events }){
  return (
    <div className={`min-h-[96px] p-2 border rounded-lg ${isToday ? 'ring-2 ring-blue-300' : ''}`}>
      {day ? <div className="font-semibold mb-1">{day}</div> : null}
      <div className="flex flex-col gap-1">
        {events.map((e, i) => (
          <div key={i} className="text-xs bg-blue-100 text-blue-800 rounded px-1 py-0.5 truncate">
            <div className="font-medium">{e.title}</div>
            <div className="text-[10px]">{e.time} {e.duration ? `• ${e.duration}` : ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
