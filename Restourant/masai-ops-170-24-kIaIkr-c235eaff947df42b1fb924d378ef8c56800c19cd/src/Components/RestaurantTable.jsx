import RestaurantCard from "./RestaurantCard";

function RestaurantTable({props}) {
  const data=props
  console.log(data,"data",props,"props")
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>(
          <RestaurantCard key={item.id} ID={item.id} name={item.name} type={item.type} price={item.price_starts_from} rating={item.rating}/>
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
