import React from 'react'
import { MdInfo } from 'react-icons/md'

function EmptyList({text}) {
  return (
        <div className='d-flex flex-column align-items-center mt-3'>
            <MdInfo  size={35}/>
             <h2 className='text-center'>{text}</h2> 
        </div>
        )
}

export default EmptyList