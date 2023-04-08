import React, { Suspense, useEffect, useState } from "react";
import logo from '../public/dd-removebg-preview.png'
function App() {
  const [endPoint, setendPoint] = useState("game");
  const [finalPoint, setfinalPoint] = useState("");
  const [content, setcontent] = useState([]);
  const [catchError , setcatchError] = useState(false);

  useEffect(() => {
    fetchData()
  }, [finalPoint]);
  const fetchData = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6e65183711mshc7d479a886548fap10d211jsn9136c65f7cc5',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
      .then(response => response.json())
      .then(response => setcontent(response.d))
      .catch(err => {
        console.error(err);
        setcatchError(true);
      });
  };
  const handleChange = (event) => {
    event.preventDefault();
    setendPoint(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setfinalPoint(endPoint);
  };
  return (
    <div className="flex justify-start items-center pt-4 flex-col gap-10 ">
      <form onSubmit={handleSubmit} className="w-full flex justify-center gab-20">
        <input
          className="border-2 p-2 focus:outline-none rounded  w-[70%] "
          type="text"
          placeholder="What do you wanna watch?"
          onChange={handleChange}
        />
        <button
          className="bg-gray-200 ml-4 rounded p-2 hover:opacity-90 "
          type="submit"
          onClick={(e) => {handleSubmit}}
        >
          Submit
        </button>
      </form>
       <ul className="m-10 flex justify-center flex-wrap gap-10 h-full">
       {content && content.map((item)=>{
             return (
               <li className="w-[280px] min-h-[300px] relative group
                bg-slate-200 hover:opacity-50 rounded-md cursor-pointer
                 border-2 flex flex-col space-between " key={item.id}>
                <img src={logo} className="w-12 opacity-0 absolute top-[40%] right-[40%] group-hover:opacity-100"/>
              {item.i &&  <img className="rounded-lg h-[90%]" src={item.i.imageUrl} alt="photo"/>}
               <h1 className="text-center text-lg h-[10%] pt-2 ">{item.l}</h1>
             </li>
             );
           })
         }
     </ul>
        {catchError && <div className="flex text-white justify-center items-start">
           <h1>please try another time...</h1>
          </div>} 
    </div>
  );
}

export default App;
