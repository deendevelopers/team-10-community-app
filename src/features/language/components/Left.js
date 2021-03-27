import React from "react";
import { useHistory } from "react-router-dom";
import languages from "../lib/languages";

const Left = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center justify-center h-screen font-bold text-purple-500 text-xl w-2/3">
      <h1>What Language do you speak...</h1>
      <select
        name="language"
        id="language"
        onChange={(e) => history.push("/location?language=" + e.target.value)}
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
  );
};

export default Left;
