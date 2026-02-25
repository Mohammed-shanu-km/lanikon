import React from 'react'
import nesto from '../../assets/nesto.jpg'

const Clientsecond = () => {
    return (
        <div className='px-[100px] py-[50px] md-small:px-[20px]  sm-max:px-[20px]'>
            <div className='flex items-center justify-center gap-[20px] sm-max:flex flex-col'>
                <div className='h-[300px] w-[100%] border border-[2px] flex items-center justify-center'>
                    <img className='h-[250px] w-[250px] object-cover' src={nesto} />

                </div>
                <div className='h-[300px] w-[100%]  border-[2px] flex items-center justify-center'>

                </div>
                <div className='h-[300px] w-[100%] border-[2px] flex items-center justify-center'>

                </div>

            </div>

        </div>
    )
}

export default Clientsecond
