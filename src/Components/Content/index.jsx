import { routes } from '../routes';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {routes.map(({ path, component: Component }) =>
        pathname === path ? <Component key={path} /> : null,
      )}
    </div>
  );
};

export default Content;






// import Products from "../../Pages/Products";
// import Counters from "../../Pages/Counters";


// const Content = () => {
//     const { pathname } = window.location;

//     return (
//       <div className="content">
//         {pathname === '/poducts' && <Products />}
//         {pathname === '/counters' && <Counters />}
//       </div>
//     );
// }

// export default Content;