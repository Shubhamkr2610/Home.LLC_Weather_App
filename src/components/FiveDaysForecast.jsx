import React from 'react'

const FiveDaysForecast = () => {
  return (
    <div className='w-6/12 h-full px-6 py-2 flex flex-col items-center justify-start gap-2 rounded-[30px] text-white bg-[#0f62fe]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>

      <div className='text-4xl font-bold'>5 Days Forecast:</div>
      <div className='flex justify-center items-center gap-3'>
        <p className='text-2xl font-bold'>20 &deg;C</p>
        <p className='text-xl font-bold'>Fiday, 1 sep</p>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <p className='text-2xl font-bold'>20 &deg;C</p>
        <p className='text-xl font-bold'>Fiday, 1 sep</p>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <p className='text-2xl font-bold'>20 &deg;C</p>
        <p className='text-xl font-bold'>Fiday, 1 sep</p>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <p className='text-2xl font-bold'>20 &deg;C</p>
        <p className='text-xl font-bold'>Fiday, 1 sep</p>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <p className='text-2xl font-bold'>20 &deg;C</p>
        <p className='text-xl font-bold'>Fiday, 1 sep</p>
      </div>
    </div>
  )
}

export default FiveDaysForecast