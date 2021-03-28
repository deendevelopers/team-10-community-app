import React, {useState} from "react";

import locations from "../lib/locations"

const Left = () => {
    const [loc, setLoc] = useState(null);
    console.log(loc);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="text-5xl mb-9">Where do you live?</h1>
            <div class="w-full md:w-1/3 flex flex-wrap mb-4 pr-0 md:pr-4">
                <div class="relative w-full border-none">
                    <select class="bg-white appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full mx-4"name="location"
                    id="location"
                    onChange={(e)=>setLoc(e.target.value)}>
                        {locations.map((location) => (
                        <option value={location} key={location}>{location}</option>
                        ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;
