import React from "react";

const Community = ({ community }) => {
  console.log(community);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
      <div className="w-full max-w-screen-lg md:py-8 md:w-10/12 flex flex-col flex-wrap mb-4 pr-0 md:px-4 bg-white shadow-md rounded-lg">
        <h1 className="text-5xl text-center mb-9 md:mt-0">{community.name}</h1>
        <div className="flex flex-col md:flex-row mx-2">
          <div className="flex flex-col md:w-2/3 w-11/12 mr-4 justify-between">
            <div className="mb-5">
              <h2 className="mb-1">Description:</h2>
              <p className="shadow p-3">
                {community.description}
              </p>
            </div>
            <div className="mb-5">
              <h2 className="mb-1">Languages:</h2>
              <p className="shadow p-3">
                {community.languages.map((language, i, arr) =>
                  i === arr.length - 1 ? language : language + ", "
                )}
              </p>
            </div>
            <div>
              <h2 className="mb-1">Services:</h2>
              <p className="shadow p-3">
                {community.services.map((service, i, arr) => i === arr.length - 1 ? service : service + " - ")}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between shadow-sm h-full">
            <div className="m-4">
            <iframe
              loading="lazy"
              allowfullscreen
              className="w-auto h-full"
              src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyD4c2GZXzjZIwdpUoLJLDvCvLIRoIbZDBg&q=" + community.address}>
            </iframe>
            </div>
            <div className="w-full">
              <h2 className="mb-1">Contact:</h2>
              <div className="shadow flex flex-col items-end p-3">
                <div>
                  <a href={"mailto:"+community.contact.email}>{community.contact.email}</a>
                </div>
                <div>
                  {community.contact.phone}
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="mb-1">Address:</h2>
              <div className="flex flex-col items-end p-3 shadow">
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
