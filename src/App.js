import React from 'react'
import analytics from './analytics.json'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
function App() {
  const dataJson = analytics.timeseries.map(day => {
    return {
      day: new Date(day.until).toLocaleString('en-US', {
        timeZone: 'UTC',
        // year: 'yy',
        month: 'short',
        day: 'numeric',
      }),
      unique: day.uniques.all,
      pageViews: day.pageviews.all,
    }
  })
  return (
    <>
      <LineChart
        width={1400}
        height={500}
        data={dataJson}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="unique"
          stroke="#8884d8"
          activeDot={{ r: 3 }}
        />
      </LineChart>
      <LineChart
        width={1400}
        height={500}
        data={dataJson}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pageViews" stroke="#82ca9d" />
      </LineChart>
    </>
  )
}
export default App
