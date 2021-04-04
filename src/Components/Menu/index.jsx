import { routes } from '../routes';

const Menu = () => {
  return (
    <div className="menu">
      <p>menu</p>

      {routes.map(({ path, label }) => (
        <a key={path} href={path}>
          {label}
        </a>
      ))}
    </div>
  );
};


// const Menu = () => {
//     return (
//       <div className="menu">
//         <p>Menu</p>

//         <a href="/products">Products</a>
//         <a href="/products/4545">Products Detail</a>
//         <a href="/cart">Cart</a>
//         <a href="/order">Order</a>
//         <a href="/profile">Profile</a>
//         <a href="/counters">Counters</a>  
//       </div>
//     );
// };

export default Menu;
