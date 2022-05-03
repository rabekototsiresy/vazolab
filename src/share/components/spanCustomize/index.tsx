import React from 'react'
import { PropsSpanI } from '../../../common/interfaces/props/PropsSpanI';

function SpanCustomize(props: PropsSpanI) {
  return (
    <b className='bg-green text-white p-2'>
        {props.text}
    </b>
  )
}

export default SpanCustomize