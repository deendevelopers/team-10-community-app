import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import locations from "../lib/locations";

const Left = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-5xl mb-9">Where do you live?</h1>
      <div className="w-full md:w-1/3 flex flex-wrap mb-4 pr-0 md:pr-4">
        <div className="relative w-full border-none">
          <select
            className="bg-white appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full mx-4"
            name="location"
            id="location"
            onChange={(e) =>
              history.push(
                "/community-list" + location.search + "&location=" + e.target.value
              )
            }
          >
            {locations.map((location) => (
              <option value={location} key={location}>
                {location}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <i className="fas fa-chevron-down text-gray-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
