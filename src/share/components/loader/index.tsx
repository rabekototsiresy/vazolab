import React from 'react'
import ReactDOM from 'react-dom';
import { SpinnerDotted	 } from 'spinners-react';
import { PropsLoader } from '../../../common/interfaces/props/ProspLoader';


function Loader(props: PropsLoader) {
  return ReactDOM.createPortal(
    <div className='loader' hidden={!props.enabled}>
    <SpinnerDotted	color='#fff' enabled={props.enabled} />
    </div>,
  document.getElementById("loader") as any
  )
}

export default Loader