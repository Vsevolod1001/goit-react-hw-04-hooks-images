import {useEffect} from "react";
import { Overlay, ModalEl } from "./Modal.styled";
import PropTypes from "prop-types";


export default function Modal ({onClose, srsLarge}) {
   
  
    
    useEffect(() => {
        window.addEventListener('keydown', hendleKeyDown);
    
      return () => {          
        window.removeEventListener('keydown', hendleKeyDown)
      };
    }, []);
 
    const hendleKeyDown = e => {
        console.log(e)
        if (e.code === 'Escape') {
            onClose()
          }
    }
    const hendleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            onClose();
        }
    }
        return (
            <Overlay onClick={hendleBackdropClick}>
                <ModalEl>
                    <img src={srsLarge} alt="" />
                </ModalEl>
            </Overlay>
        )
    
      
}
Modal.propTypes = {
    srsLarge: PropTypes.string.isRequired,
} 
