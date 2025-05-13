import React, { useEffect } from "react";
import Sellerproducts from "../Components/Sellerproduct"

export default function SellerPage(){
    // Validate component
    useEffect(() => {console.log("Rendering: SellerPage.jsx");}, []);

    return(
        <>
        {}
        <Sellerproducts/>
        </>
    )

}