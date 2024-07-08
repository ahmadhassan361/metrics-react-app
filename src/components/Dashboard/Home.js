import React from 'react'
import ChartComponent from '../DataVisualization/Chart'

export const Home = () => {
  return (
    <div className='p-3'>
        <h1 className='text-danger py-2 bg-secondary-custom px-2'>Home</h1>
        <ChartComponent/>
    </div>
  )
}
