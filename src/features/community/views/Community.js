import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import communities from "../../community-list/lib/communities";
import CommunityComponent from "../components/Community";
import firebase from "../../../db/firebase";

const Community = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);
  useEffect(async () => {
    const db = firebase.firestore();
    const commRef = db.collection('communities').doc(id);
    const doc = await commRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      setCommunity(doc.data())
      console.log('Document data:', doc.data());
    }
  }, []);

  if (community) return <CommunityComponent community={community} />;

  return <></>;
};

export default Community;
