import React from "react";

const CommunityCard = ({ name = "", activities = [], address = "" }) => {
  return (
    <div class="min-h-screen ">
      <div class="  max-w-xs p-4 bg-white rounded-3xl shadow-xl">
        <div></div>
        <div class="flex flex-col space-y-4 ">
          <div class="flex flex-col items-center md:items-start">
            <h1 className="text-xl font-medium mb-2">{name}</h1>

            <h2 class="text-base font-medium text-gray-400">Activity</h2>

            <p class="text-sm">
              {activities.map((activity) => activity + " - ")}
            </p>

            <h2 class="text-base font-medium text-gray-400">Address</h2>
            <p class="text-sm">{address}</p>
          </div>
          <div class="flex items-center justify-center space-x-3 md:justify-start items-end">
            <button class="bg-blue rounded-3xl md:flex-rows">
              <p> Read More... </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
