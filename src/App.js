import React from 'react'
import analytics from './analytics.json'
import { Flex, Box, Text } from '@chakra-ui/core'
// import useSWR from 'swr'
// import fetcher from './utils/fetcher'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import Header from './Header'
// const zone = process.env.REACT_APP_ZONE
// const endpoint = `/client/v4/zones/${zone}/analytics/dashboard?since=2019-04-01T12:23:00Z&until=2020-03-27T12:23:00Z&continuous=false`

function App() {
  // const { data, error } = useSWR(endpoint, fetcher, {
  //   shouldRetryOnError: false,
  // })
  const dataJson = analytics.timeseries.map(day => {
    return {
      day: new Date(day.until).toLocaleString('en-US', {
        timeZone: 'UTC',
        // year: 'yy',
        month: 'short',
        day: 'numeric',
      }),
      uniques: day.uniques.all,
      pageViews: day.pageviews.all,
    }
  })
  return (
    <>
      <Header />
      <Flex align="center" my="10">
        <Box
          size="33%"
          p="10"
          mx="10"
          align="center"
          justify="center"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          borderColor="gray.200">
          <Text>Total Unique Visitors</Text>
          <Text fontSize="4xl">{analytics.totals.uniques.all}</Text>
        </Box>
        <Box
          size="33%"
          p="10"
          mx="10"
          align="center"
          justify="center"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          borderColor="gray.200">
          <Text>Maximum Unique Visitors</Text>
          <Text fontSize="4xl">
            {Math.max(...dataJson.map(a => a.uniques))}
          </Text>
        </Box>
        <Box
          size="33%"
          p="10"
          mx="10"
          align="center"
          justify="center"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          borderColor="gray.200">
          <Text>Minimum Unique Visitors</Text>
          <Text fontSize="4xl">
            {Math.min(...dataJson.map(a => a.uniques))}
          </Text>
        </Box>
      </Flex>

      <LineChart
        width={1280}
        height={500}
        data={dataJson}
        margin={{ top: 30, right: 0, left: 0, bottom: 5 }}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="uniques"
          stroke="#8884d8"
          activeDot={{ r: 3 }}
        />
      </LineChart>

      <LineChart
        width={1280}
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
