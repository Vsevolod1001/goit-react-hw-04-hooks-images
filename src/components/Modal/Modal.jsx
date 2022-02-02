import React, {Component} from "react";
import { Overlay, ModalEl } from "./Modal.styled";
import PropTypes from "prop-types";


class Modal extends Component {
    static propTypes = {
        srsLarge: PropTypes.string.isRequired,
    } 
    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeyDown)

    }
    hendleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
          }
    }
    hendleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    render () {
        const { srsLarge } = this.props;
        
        return (
            <Overlay onClick={this.hendleBackdropClick}>
                <ModalEl>
                    <img src={srsLarge} alt="" />
                </ModalEl>
            </Overlay>
        )
    }
      
}

export default Modal