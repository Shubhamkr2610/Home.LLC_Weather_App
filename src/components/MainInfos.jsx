import React from 'react'

const MainInfos = () => {
    return (
        <div className="w-3/12 h-full p-6  flex flex-col items-center justify-center gap-8 rounded-[30px] text-[#c8d9f9] bg-[#0f62fe]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <h1 className="text-4xl font-bold">Mumbai</h1>

          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-8xl font-bold"> 00:38</h3>
            <h5 className="text-xl font-normal">Thurday, 31Aug</h5>
          </div>
        </div>
      );
}

export default MainInfos