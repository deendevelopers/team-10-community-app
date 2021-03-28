import React from "react";

const Community = ({ community }) => {
  console.log(community);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div className="w-full py-8 md:w-10/12 flex flex-col flex-wrap mb-4 pr-0 md:px-4 bg-white shadow-md rounded-lg">
        <h1 className="text-5xl text-center mb-9">{community.name}</h1>
        <div className="flex mx-4">
          <div className="flex flex-col w-2/3 ">
            <div className="mb-5">
              <h2 className="mb-2">Description:</h2>
              <p className="bg-gray-100 shadow-md p-3">
                {community.description}
              </p>
            </div>
            <div className="mb-5">
              <h2>Languages:</h2>
              <p className="bg-gray-100 shadow-md p-3">
                {community.languages.map((language, i, arr) =>
                  i === arr.length - 1 ? language : language + ", "
                )}
              </p>
            </div>
            <div className="mb-5">
              <h2>Location:</h2>
              <p className="bg-gray-100 shadow-md p-3">{community.city}</p>
            </div>
            <div>
              <h2>Services:</h2>
              <p className="bg-gray-100 shadow-md p-3">
                {/* {community.services.map((service, i, arr) => i === arr.length - 1 ? service : service + " - ")} */}
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-3 justify-between shadow-md h-full">
            <div className="mb-4">
              <img src="https://i2-prod.mylondon.news/incoming/article17930853.ece/ALTERNATES/s615/1_ELM-and-LMC-front-1.jpg" />
            </div>
            <div className="shadow-md w-full h-1/2">
              <div className="flex flex-col mx-3 items-end">
                {community.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
