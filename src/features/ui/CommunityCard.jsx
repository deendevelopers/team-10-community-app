import React from 'react'

const CommunityCard = () => {
    return (
        <div class="flex items-center justify-center min-h-screen ">
        <div class="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-3xl md:flex-row">
            <div >
    
            </div>
            <div class="flex flex-col space-y-4 ">
            <div class="flex flex-col items-center md:items-start">
         
        <img
            class="w-auto h-48"
            src="https://i.imgur.com/kbUhOko.png"
            alt="Ahmed Kamel"
        />
      
                <h1 class="text-xl font-medium ">Longsight Community</h1>
                
                <h2 class="text-base font-medium text-gray-400">Activity</h2>
           
                <p class="text-sm">Homeless Shelter - Language Support - Helping Hand - FoodBank </p>

                
                <h2 class="text-base font-medium text-gray-400">Address</h2>
                <p class="text-sm"> Longsight Community Church of the Nazarene, Tollgate Close, Manchester</p>
            </div>
            <div class="flex items-center justify-center space-x-3 md:justify-start">
               <button class="bg-blue rounded-3xl md:flex-row">
                   <p> Read More... </p>
               </button>
            </div>
            </div>
        </div>
    
         
    
    </div>
    )
}

export default CommunityCard
