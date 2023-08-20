import React from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpeg'

const FlexComp = () => {
  return (
    <div className="flex  h-screen bg-[#3A3C41] justify-around ">
       <div className='text-[#f8fafc] w-1/2 font-semibold py-20 px-20  text-left'>
       <div className='text-6xl'>

          <h1>Flexible</h1>
          <h1>ruitmes om jouw</h1>
          <h1>ideale werkplek</h1>
          <h1>te creeren</h1>
       </div>

          <div className='w-3/4  h-96 mt-10 overflow-hidden scrollbar-hidden custom-scroll'>
          <div className='snap-y snap-mandatory h-full scroll-smooth overflow-y-auto'>


          <div className='text-[#f8fafc] w-full h-96 flex flex-col justify-center scroll-snap-align:start'>
            <p className='text-2xl'><span className='text-orange-400'>01</span> Multi-inzetbare units</p>
            <div  className='text-xl mt-2 leading-none'>
            <p >Met minstens twee verdiepingen</p>
            <p>eenvoudig te richten als werk-, kantoor of </p>
            <p>opslagruimte.</p>
            </div>
          </div>

{/* 
          <div className='text-[#f8fafc] w-full font-semibold  text-left'>
            <p className='text-2xl'><span className='text-orange-400'>02</span> Eigen parkeerplaatsen</p>
            <div className='text-xl mt-2 leading-none'>
            <p>Iedere unit beschikt over 1 tot 4 </p>
            <p>eigen parkeerplaatsen.</p>
            </div>
          </div> */}


          {/* <div>
            <p>03 Flexibel & koppelbaar</p>
            <p>De bedrijfsunits variëren van grootte en zijn</p>
            <p>aan elkaar te schakelen om meer</p>
            <p>oppervlakte te creëren.</p>
          </div> */}
       </div>
          </div>

          </div>

       <div className='w-1/2 h-170 py-40'>
            <div className='w-4/5 snap-y h-96 space-y-28 cursor-grab hover:overflow-y-scroll rounded-xl scroll-smooth scroll-auto overflow-y-hidden custom-scroll' >
                <img className='w-full scroll-ml-6  overflow-hidden touch-pan-y snap-center  rounded-xl' src={img1} />

                <img className='w-full scroll-ml-6 overflow-hidden touch-pan-y snap-center rounded-xl' src={img2} />
        
                <img className='w-full scroll-ml-6  overflow-hidden touch-pan-y snap-center rounded-xl' src={img3} />
        </div>
       </div>
    </div>
  )
}

export default FlexComp