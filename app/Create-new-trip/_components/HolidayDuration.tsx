import React from 'react'



function HolidayDuration({onSelectionOption}:any) {
    const [days, setDays]= React.useState<number>(1);
     const decreaseDays = () => {
    if (days > 1) {
      setDays(days - 1);
    }
  };

  const increaseDays = () => {
    if( days <=10){
        setDays(days + 1);
    }else{
        alert("You can select a maximum of 10 days");
    }
    
  };
  const onSelectDuration = () => {
    if(days===1){
        onSelectionOption(` one day `);
        console.log("Selected duration: 1 day i am from if condition");
        
    }
    switch (days) {
        case 1:
            console.log("Selected duration: 1 day from switch case");
    }
    console.log(`Selected duration: ${days} days`);
  }
  return (
   <div className="flex flex-col gap-4 justify-center items-center p-4">
  <h2 className="text-xl font-semibold text-center">Holiday Duration</h2>

  {/* Counter */}

   <div className="flex items-center gap-6 border border-gray-300 rounded-lg px-6 py-3 bg-white shadow-md">
     <p className='font-bold text-gray-700'>"How any days are you palnning for Trip , If the AI response takes longer than 7 seconds, please send 'hi' again 👋."</p>
    {/* Minus Button */}
    {/* <button
      onClick={decreaseDays}
      className="px-4 py-2 text-xl font-bold bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
    >
      −
    </button> */}

    {/* Days Display */}
    {/* <h1 className="text-2xl font-semibold text-gray-800">{days}</h1> */}

    {/* Plus Button */}

    {/* <button
      onClick={increaseDays}
      className="px-4 py-2 text-xl font-bold bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition"
    >
      +
    </button> */}
  </div> 

  {/* Okay Button */}
  {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition" onClick={()=>{
    onSelectDuration();
    onSelectionOption(` ${days} days `);
   
  }}>
    Select your Holiday Duration🌴
  </button> */}
</div>

  )
}

export default HolidayDuration