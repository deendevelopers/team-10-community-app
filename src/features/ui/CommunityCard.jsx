import React from "react";
import { useHistory } from "react-router-dom";

const CommunityCard = ({ name = "", services = [], address = "", id="" }) => {
  const history = useHistory()

  return (
  <div class="max-w-xs p-4 m-6 bg-white rounded-3xl shadow-xl">
  <div class="flex flex-col space-y-4 h-full justify-between">
    <div class="flex flex-col items-center md:items-start">
      <h1 className="text-xl font-medium mb-2">{name}</h1>

      <h2 class="text-base font-medium text-gray-400">Services</h2>

      <p class="text-sm">
        {services.map((service) => service + " - ")}
      </p>

      <h2 class="text-base font-medium text-gray-400">Address</h2>
      <p class="text-sm">{address}</p>
    </div>
    <div class="flex justify-center space-x-3 md:justify-end items-end">
      <button class="bg-blue rounded-3xl md:flex-rows" onClick={() => history.push("/community/" +id)}>
        <p> Read More... </p>
      </button>
    </div>
  </div>
</div>)
}
export default CommunityCard;
