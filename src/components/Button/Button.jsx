import React from "react";
import { ButtonLm, BtnDiv } from "./Button.styled";
import PropTypes from "prop-types";


const Button = ({onClick}) => {
    return (
        <BtnDiv>
            <ButtonLm type="submit" onClick={onClick}>
                Load more
            </ButtonLm>
        </BtnDiv>
    )

}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}
export default Button
