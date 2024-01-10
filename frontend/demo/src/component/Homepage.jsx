import { useEffect, useState } from "react"
import "./home.css"
const Homepage=()=>{
    const [name,setName]=useState('')
    const [data,setData]=useState([])
   const datarender=()=>{
   fetch("http://localhost:7000/data")
    .then((req)=>{
        return req.json()
    })
    .then((res)=>{
        console.log(res,"respons");
        setData([...res])
    })
    .catch((err)=>{
        console.log(err);
    })
   }

   const handalASD=()=>{
    fetch("http://localhost:7000/asd")
    .then((req)=>{
        return req.json()
    })
    .then((res)=>{
        console.log(res,"respons");
        setData([...res])
    })
    .catch((err)=>{
        console.log(err);
    })
   }

   const handalDSD=()=>{
    fetch("http://localhost:7000/dsd")
    .then((req)=>{
        return req.json()
    })
    .then((res)=>{
        console.log(res,"respons");
        setData([...res])
    })
    .catch((err)=>{
        console.log(err);
    })
   }


   const searchHandal=()=>{
    //setData([])
    fetch(`http://localhost:7000/data?name=${name}`)
     .then((req)=>{
         return req.json()
     })
     .then((res)=>{
         console.log(res,"respons");
         setData([...res])
     })
     .catch((err)=>{
         console.log(err);
     })
    }

   useEffect(()=>{
      datarender()
   },[])
    return (
        <div>
             <div className="nav">
                 <div>
                    <button onClick={handalASD}>Low to High</button>
                    <button onClick={handalDSD}>High to Low</button>
                 </div>
                 <div>
                    <input type="text" value={name} placeholder="enter name" onChange={(e)=>{setName(e.target.value)}} />
                    <button onClick={searchHandal}>Search</button>
                 </div>
             </div>

             <div>
                {(data.length>0)?data.map((item)=>(
                    <div className="sub" key={item._id}>
                         <h3>{item.name}</h3>
                         <h3>{item.price}</h3>
                    </div>
                )):<div><h3>Loading</h3></div>}
             </div>

        </div>
    )
}
export default Homepage