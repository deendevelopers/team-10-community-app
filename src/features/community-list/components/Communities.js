import React from 'react'
import CommunityCard from '../../ui/CommunityCard'

const Communities = ({communities, params}) => 
    <div>
        <div className="flex md:flex-row flex-col">
                {communities.map(community => 
                    <div className="flex items-stretch flex-1">
                        <CommunityCard id={community.id} name={community.name} address={community.address} services={community.services} />
                    </div>
                )}
        </div>
    </div>

    

export default Communities;