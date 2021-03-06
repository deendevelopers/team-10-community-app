import React from "react";
import { useHistory } from "react-router-dom";
import CommunityCard from "../../ui/CommunityCard";
import languages from "../lib/languages";

const Left = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-5xl mb-9">What language do you speak?</h1>
      <div className="w-full md:w-1/3 flex flex-wrap mb-4 pr-0 md:pr-4">
        <div className="relative w-full border-none">
          <select
            className="bg-white appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full mx-4"
            name="language"
            id="language"
            onChange={(e) =>
              history.push("/location?language=" + e.target.value)
            }
          >
            <option disabled selected>
              Select a language
            </option>
            {languages.map((language) => (
              <option value={language} key={language} className="w-auto">
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Left;
