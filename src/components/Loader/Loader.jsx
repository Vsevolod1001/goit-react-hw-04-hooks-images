import React from "react";
import { Watch  } from "react-loader-spinner";
import { WrapperLoader } from "./Loader.styled";

const Loader = () => {
    return (
        <WrapperLoader>
           <Watch 
              heigth={300}
              width={300}
              color="#5e3a7a"        
              ariaLabel="loading-indicator"        
          />
        </WrapperLoader>
       
    );
}
export default Loader