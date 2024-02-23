import React from 'react'
import meat from '../../Images/meat.png';
import chillimeat from '../../Images/chillimeat.png';
import fishfry from '../../Images/fishfry.png';
import rasberrypu from '../../Images/rasberrypu.png';
import salad from '../../Images/salad.png';
import fishburey from '../../Images/fishburey.png';



const Menu = () => {
  return (
    <div id='menu' className='mx-6 sm:mx-10 md:mx-10 mt-[0%] lg:mx-20 sm:mt-[0%] md:mt-[2%] lg:mt-[8%] lg:mb-0 h-screen flex flex-col'>
        {/* explore tag */}
        <div className='mt-20 md:mt-0 lg:mb-[70%] flex flex-col items-center'>
            <div className='text-indigo-900 font-semibold'>Explore Our Foods</div>
            <div className='mt-4 text-[10px] text-gray-400'>Lorem ipsum dolor sit amel, consetetur sad pscing elit, sea aiam nonumy eirmod.<br/>
                tempor invidunt ut labore et dolore magna.</div>
            </div>

            {/* menu items */}
            <div className="mt-12 md:mt-[-65%]  lg:mt-[-65%] flex h-screen justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-auto">
        {[meat, chillimeat, fishfry, rasberrypu, salad, fishburey].map((image, index) => (
          <div key={index} className="h-auto md:h-64 cursor-pointer rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150">
            <img src={image} className="h-36 w-full md:h-36 md:w-60 rounded-t-lg" alt={`ham${index}`} />
            <div className="flex flex-col justify-between px-4 py-2">
              <div>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Ham Sandwich
                </p>
                <p className="text-base font-bold text-green-900">$10.50</p>
              </div>
              <div className="text-xs text-gray-300">
                <p>Lorem ipsum dolor sit amet, consetetur</p>
                <p>sadipscing elitr.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Menu