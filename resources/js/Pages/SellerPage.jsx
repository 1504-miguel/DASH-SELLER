import React, { useEffect } from "react";
import Sellerdash from "../Components/DashboardComponents/Sellerdash";


export default function SellerPage(){
    // Validate component
    useEffect(() => {console.log("Rendering: SellerPage.jsx");}, []);

    return(
        <>
        {}
        <Sellerdash/>
        </>
    )

}