import React from 'react'


export const BudgetOptions = [
    {
        id:1,
        title:"Low Budget",
        description:"Budget-friendly options",
        icon:"💵",
        budget:"RS.1000 - Rs.2000",
        color:"bg-green-200 text-green-800"

    },
    {
        id:2,
        title:"Mid Range",
        description:"Comfortable and affordable",
        icon:"💰",
        budget:"Rs.2000 - Rs.5000",
        color:"bg-yellow-200 text-yellow-800"
    },
    {
        id:3,
        title:"Luxury",
        description:"High-end experiences",
        icon:"💎",
        budget:"Rs.5000+",
        color:"bg-purple-200 text-purple-800"
    }

]
function BudgetUi({onSelectOptopn}:any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start mt-2 p-4 ">
      {BudgetOptions.map((item, index) => (
        <div 
          key={index}
            onClick={() => 
                onSelectOptopn(item.title + "  " + item.description + "  " + item.budget)
              
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
           
           <h2 className="text-green-800 font-bold">{item.budget}</h2>
         
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BudgetUi