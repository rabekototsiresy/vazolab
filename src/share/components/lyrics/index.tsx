import React,{useState} from 'react';
import ReactTooltip from 'react-tooltip';

import {Button,Modal } from 'react-bootstrap';
import {BsFileTextFill} from 'react-icons/bs';

function Lyrics({lyrics,title,type_lyrics}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div onClick={handleShow}>
        <span className='d-flex align-items-center rounded-circle border p-2 cursor-pointer lyrics-icon-background ' data-tip='Tononkira'>
          <BsFileTextFill size={20} color='#fff'/>
          <ReactTooltip />
        </span>
        
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-2'>
          {
            type_lyrics === 0 ? <div dangerouslySetInnerHTML={{__html: lyrics}} />

            : <img className="img-fluid w-100 p-1" src={lyrics} alt="lyrics" />
          }
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Lyrics;