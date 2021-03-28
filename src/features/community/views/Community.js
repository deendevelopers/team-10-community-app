import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import communities from "../../community-list/lib/communities";
import CommunityComponent from "../components/Community";

const Community = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);
  useEffect(() => {
    setCommunity(communities.filter((community) => community.id == id)[0]);
  }, []);

  if (community) return <CommunityComponent community={community} />;

  return <></>;
};

export default Community;
