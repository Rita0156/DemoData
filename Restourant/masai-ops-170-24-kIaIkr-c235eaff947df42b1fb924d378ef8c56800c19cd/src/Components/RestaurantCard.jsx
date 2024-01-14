import { Link } from "react-router-dom";

export default function RestaurantCard({name,type,rating,price,ID}) {
  const path=`restau/${ID}`
  return (
    <tr data-testid="item">
      <td>
        <Link to={path} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating"> {rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
}
