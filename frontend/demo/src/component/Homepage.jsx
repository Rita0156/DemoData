import { useEffect, useState } from "react"
import "./home.css"
const Homepage=()=>{
    const [name,setName]=useState('')
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
   const datarender=()=>{
   fetch(`http://localhost:7000/data/?page=${page}&limit=6`)
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
    //setPage(1)
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
    //setPage(1)
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
    console.log("inside search");
    fetch(`http://localhost:7000/search/?name=${name}`)
     .then((req)=>{
        console.log("req",req);
         return req.json()
     })
     .then((res)=>{

         console.log(res,"respons");
         setData([...res])
     })
     
    }

    function handalNext(){
        if(page<3){
            setPage(page+1)
        }
    }
    function handalPrev(){
        if(page>=2){
            setPage(page-1)
        }
        
    }
   //datarender()
   useEffect(()=>{
      datarender()
   },[page])
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

             <div className="box">
                {(data.length>0)?data.map((item)=>(
                    <div className="sub" key={item._id}>
                        
                         <h3>{item.name}</h3>
                         <h3>{item.price}</h3>
                    </div>
                )):<div><h3>Loading</h3></div>}
             </div>
             <div>
                <button onClick={handalNext}>Next</button>
                <h2>{page}</h2>
                <button onClick={handalPrev}>Prev</button>
             </div>

        </div>
    )
}
export default Homepage