import React,{useState, useEffect} from "react";



const DataFetchingComponent = () => {
    const [data, setData] = useState({})
    const [search , setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:4001/trips?keywords=')
            .then(response => response.json())
            .then(response => setData(response.data));
    }, []);


    return (
<>
<div className=" ml-4 flex flex-row gap-4 font-bold" >
    <label htmlFor="Search">Search Here :</label>

<input
    className="border-solid border-2" 
    type="text"
    placeholder='Search Location'
    onChange={(e) => setSearch(e.target.value)}
     />
</div>

       <div className="flex flex-col items-center gap-5 mt-10 ml-4" >
       
        {data.length > 0 ? (
          data
          .filter((item) =>{
            return search.toLowerCase() === ''
            ? item
            : item.title.toLowerCase().includes(search)
          })
          
          
          
          
          .map((data, index) => (
        
            <div className="w-full">
            <div className=" ">
                <body className="flex flex-row justify-start items-center gap-10 w-full">
                <div className="object-cover w-96" key={index}><img className="rounded-3xl" src={data.photos[0]} alt="" /></div>
                <div className="flex flex-col justify-between gap-2">
            <title key={index} className="font-Prompt text-lg font-bold"> {data.title} </title>
            <p key={index} className="font-Prompt text-sm whitespace-nowrap truncate w-96">{data.description}</p>
            <p className="font-Prompt text-sky-600 underline text-sm hover:font-bold">อ่านต่อ</p>
            <div className="flex flex-row gap-2">
            <span className="font-Prompt text-sm">Tag:</span>
            <span className="flex flex-row gap-2 font-Prompt text-sm hover:font-bold"> 
            {data.tags.map((tag) => (
        <div  key={tag}> {tag} </div>
      ))}
                

                 </span>
                 </div>
            
            <div className="flex flex-row gap-4">
                <div key={index} className="object-contain w-32"><img className="rounded-3xl" src={data.photos[1]} alt="" /></div>
                <div key={index} className="object-contain w-32"> <img className="rounded-3xl" src={data.photos[2]} alt="" /></div>
                <div key={index} className="object-contain w-32"><img className="rounded-3xl" src={data.photos[3]} alt="" /></div>
            </div>
            </div>
            </body>
            </div>
            </div>
           
          ))
        ) : (
          <p>No blogs found.</p>
        )}
        
        

        
       </div>
       </>
    )
    
}


export default DataFetchingComponent
