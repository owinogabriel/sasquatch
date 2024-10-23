import React, { useEffect,useState } from 'react'


const chartData = () => {
  const [data,setData] = ([]);
  const [loading,setLoading] = (false)

  //Fechting bar data from data.json
  useEffect(() => {
    async function fetchData(){
      try{
        const response =  await fetch('/public/data.json')
        const data = await response.json();
        setData(data)
      }catch(error){
        throw new Error(error)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  },[])
}


function Bar(){
  return (
    <div className='fixed bg-primary w-[35%] h-96 ml-96 mt-5 rounded-2xl'>
      <div className='flex flex-row ml-10 mt-5 text-black text-xl font-bold  top-4'>Spending - Last 7 days</div>
      
    </div>
  )
}

export default Bar;