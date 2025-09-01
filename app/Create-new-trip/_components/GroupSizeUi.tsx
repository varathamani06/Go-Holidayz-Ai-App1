import React from 'react'

export const SelectTravelList=[
    {
        id:1,
        title:"Just me",
        description:"Solo traveler",
        icon:"😎",
        people:"1"

    },
    {
        id:2,
        title:"Me and my partner",
        description:"Couple trip",
        icon:"🥂",
        people:"2"
    },
    {
        id:3,
        title:"Family trip",
        description:"Family trip with kids or firends",
        icon:"🏡",
        people:"3people-4people"
    },
    {
        id:4,
        title:"Friends trip",
        description:"A trip with friends",
        icon:"👫",
        people:"4+ people to 10 people"
    }
]

function GroupSizeUi({onSelectOptopn}:any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start mt-2 p-4 ">
  {SelectTravelList.map((item, index) => (
    <div 
      key={index}
        onClick={() => 
            onSelectOptopn(item.title + " " + item.people)
            }

      className="flex flex-col items-center text-center border rounded-lg bg-white shadow-sm 
       md:aspect-square md:max-w-[150px] w-full mx-auto
                 transition-all duration-300 ease-in-out cursor-pointer
                 hover:shadow-2xl hover:bg-blue-100 hover:scale-[1.02]"
    >
      
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-800 mb-3">
        <span className="text-2xl">{item.icon}</span>
      </div>

      
      <h2 className="text-blue-800 font-bold">{item.title}</h2>

     
      <p className="text-gray-600 text-sm">{item.people}</p>
    </div>
  ))}
</div>

  )
}

export default GroupSizeUi