import React from "react";
import { ButtonLm, BtnDiv } from "./Button.styled";
import PropTypes from "prop-types";


const Button = ({setPage}) => {
    return (
        <BtnDiv>
            <ButtonLm type="submit" onClick={() => setPage(page => page + 1)}>
                Load more
            </ButtonLm>
        </BtnDiv>
    )

}
Button.propTypes = {
    setPage: PropTypes.func.isRequired,
}
export default Button
