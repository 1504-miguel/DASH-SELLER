import React from "react";
import bag from "../../Assets/bag.png"
import notebook from "../../Assets/notebook.webp"
import pen from "../../Assets/pen.png"
import desktop from "../../Assets/desktop.png"
import health from "../../Assets/health.png"
import gadget from "../../Assets/gadget.png"


export default function Category(){
    return(
        <>
            {/* Categories */}
            <div class="max-w-screen-lg mx-auto">
                <h2 class="text-sm font-bold text-[#5a1c1c] border-b border-gray-300 pb-1 uppercase text-center">Categories</h2>
                <div class="overflow-x-auto hide-scrollbar mt-6">
                <div class="flex flex-nowrap gap-8 px-4">
                    <div class="flex flex-col items-center w-52 flex-shrink-0">
                    <div class="rounded-full shadow-lg p-4 bg-white">
                        <img src={notebook} alt="Stationery" class="w-30 h-30 object-cover" />
                    </div>
                    <p class="mt-2 text-sm text-[#5a1c1c] text-center">Stationery</p>
                    </div>

                    <div class="flex flex-col items-center w-52 flex-shrink-0">
                        <div class="rounded-full shadow-lg p-4 bg-white">
                            <img src={bag} alt="Bags" class="w-30 h-30 object-contain" />
                        </div>
                        <p class="mt-2 text-sm text-[#5a1c1c] text-center">Bags</p>
                        </div>

                        <div class="flex flex-col items-center w-52 flex-shrink-0">
                        <div class="rounded-full shadow-lg p-4 bg-white">
                            <img src={pen} alt="Writing Tools" class="w-30 h-30 object-contain" />
                        </div>
                        <p class="mt-2 text-sm text-[#5a1c1c] text-center">Writing Tools</p>
                        </div>

                        <div class="flex flex-col items-center w-52 flex-shrink-0">
                        <div class="rounded-full shadow-lg p-4 bg-white">
                            <img src={desktop} alt="Desk Supplies" class="w-30 h-30 object-contain" />
                        </div>
                        <p class="mt-2 text-sm text-[#5a1c1c] text-center">Desk Supplies</p>
                        </div>

                        <div class="flex flex-col items-center w-52 flex-shrink-0">
                        <div class="rounded-full shadow-lg p-4 bg-white">
                            <img src={health} alt="Desk Supplies" class="w-30 h-30 object-contain" />
                        </div>
                        <p class="mt-2 text-sm text-[#5a1c1c] text-center">Health and Safety</p>
                        </div>

                        <div class="flex flex-col items-center w-52 flex-shrink-0">
                        <div class="rounded-full shadow-lg p-4 bg-white">
                            <img src={gadget} alt="Writing Tools" class="w-30 h-30 object-contain" />
                        </div>
                        <p class="mt-2 text-sm text-[#5a1c1c] text-center" >Technology and Gadgets</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}