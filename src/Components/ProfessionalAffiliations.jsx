import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const ProfessionalAffiliations = () => {
    return (
        <>
        <p className="font-bold text-lg">Publications & Media Appearances</p>
        <div className=" h-44 w-[79vw] rounded-3xl mt-4 overflow-y-auto scrollbar-hide snapp grid grid-flow-col gap-3 place-items-center">
            {
                [1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                    <>
                        <div className='w-44 h-44 rounded-3xl bg-white'>
                            <img src={image1} className='w-44 h-44 rounded-3xl' alt="" />
                        </div>
                        <div className='w-44 h-44 rounded-3xl bg-white'>
                            <img src={image2} className='w-44 h-44 rounded-3xl' alt="" />
                        </div>
                        <div className='w-44 h-44 rounded-3xl bg-white'>
                            <img src={image3} className='w-44 h-44 rounded-3xl' alt="" />
                        </div>
                    </>



                ))
            }
        </div>
    </>
    )
}

export default ProfessionalAffiliations
