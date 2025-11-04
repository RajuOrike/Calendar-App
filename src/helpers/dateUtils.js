import dayjs from 'dayjs'

export const generateCalendar = (month, year) => {
  const startOfMonth = dayjs(`${year}-${month}-01`)
  const startDay = startOfMonth.day() // 0 (Sun) - 6 (Sat)
  const daysInMonth = startOfMonth.daysInMonth()

  const days = []
  // push blanks for first week
  for (let i = 0; i < startDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)
  // ensure total cells divisible by 7 (optional)
  while (days.length % 7 !== 0) days.push(null)
  return days
}
