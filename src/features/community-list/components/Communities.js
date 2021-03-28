import React from 'react'

const Communities = ({communities, params}) => {
    console.log("comms orig", communities);
    console.log("params", params);
    console.log("params lang", params.language);
    console.log("Comms2", communities.filter(community => community.languages.includes(params.language) && community.location === params.location));
    return <></>
};

export default Communities;