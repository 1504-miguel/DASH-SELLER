import React, { useEffect } from "react";
import Sellerorder from "../Components/Sellerorder"


export default function SellerPage(){
    // Validate component
    useEffect(() => {console.log("Rendering: SellerPage.jsx");}, []);

    return(
        <>
        {}
        <Sellerorder/>
        </>
    )

}