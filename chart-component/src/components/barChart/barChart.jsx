import React, { useEffect, useState } from 'react'


const chartData = () => {
  const [data, setData] = ([]);
  const [loading, setLoading] = (false)

  //Fechting bar data from data.json
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/public/data.json')
        const data = await response.json();
        setData(data)
      } catch (error) {
        throw new Error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
}


function Bar() {
  return (
    <div className='fixed bg-primary w-[35%] h-96 ml-96 mt-5 rounded-2xl'>
      <div className='flex flex-row ml-10 mt-5 text-black text-xl font-bold  top-4'>Spending - Last 7 days</div>
      <div className='flex'>
        <div className='bg-background w-[12%] h-12 rounded-md mt-48 ml-9'></div>
        <p className='flex flex-row mt-60 '>mon</p>
      </div>
    </div>
  )
}

export default Bar;