import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";
function Dashboard() {
  const [allData,setAllData]=useState([])
  const [load,setLoad]=useState(false)
  const [page,setPage]=useState(1)
  const [filtercompo,setFilter]=useState('')
  const [tot,setTotal]=useState(0)
  let filterselectBox=["All",
          "Fine Dining",
          "Ethnic",
          "Fast Food",
          "Cafe",
          "Casual Dining"]
  let bilterBox=["",
          "fine_dining",
          "ethnic",
          "fast_food",
          "cafe",
          "casual_dining"]
  function Data(filter){
    setLoad(true)
     fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10&filter=${filter}`)
     .then((req)=>{
      return req.json()
     })
     .then((res)=>{
      console.log(res);
      setLoad(false)
      setTotal(res.data.length)
      setAllData([...res.data])
     })
  }
  function handalChange(e){
      setFilter(e.target.value)
      Data(filtercompo)
   }
   function handalPageChange(){
    
   }
  useEffect(()=>{
       Data(filtercompo)
  },[])
  console.log(allData,"all data");
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div>
        <select onClick={handalChange}  data-testid="filter-box">
          
          {filterselectBox.map((item)=>(
            <option key={item} value={item}>{item}</option>
          ))}
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
         {load && <Loader/>}
          {allData.length>0 && <RestaurantTable props={allData}/>}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}
      <Pagination totalPage={tot} currentPage={page} handlePageChange={handalPageChange}/>
      </div>
    </div>
  );
}

export default Dashboard;
