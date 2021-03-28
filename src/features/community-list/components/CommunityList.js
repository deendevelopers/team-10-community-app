import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import firebase from "firebase";

import Communities from "./Communities";

const CommunityList = () => {
    const [communities, setCommunities] = useState([]);
    const history = useHistory();
    const query = useQuery();
    const params = {
        language: query.get("language"),
        location: query.get("location")
    };

    useEffect(async () => {
        const db = firebase.firestore();
        const commRef = db.collection('communities');
        const snapshot = await commRef
        .where('languages', 'array-contains', params.language)
        .get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }  
        snapshot.forEach(doc => {
            doc.data().address.includes(params.location) && 
            setCommunities(communities => [...communities, { id: doc.id, ...doc.data()} ])
        });
      }, []);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
            <h1 className="text-5xl mb-9">{!!communities.length ? "All Communities" : "No Communities were found"}</h1>
            <Communities communities={communities} params={params}/>
        </div>
    );
};

export default CommunityList;
