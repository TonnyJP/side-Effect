import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

function Modal({ open, children, onClose }) {
  const dialogRef = useRef();
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className='modal' ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
