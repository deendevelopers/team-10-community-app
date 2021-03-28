import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import languages from "../../language/lib/languages";

import communities from "../lib/communities"

import Communities from "./Communities";

const CommunityList = () => {
    const history = useHistory();
    const query = useQuery();
    const params = {
        language: query.get("language"),
        location: query.get("location")
    };

    console.log(communities)
    
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="text-5xl mb-9">All communities</h1>
            <Communities communities={communities} params={params}/>
        </div>
    );
};

export default CommunityList;
