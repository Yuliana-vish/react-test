import ProductList from "../Components/ProductList";
  
  
const products = [
  {
    id: 1,
    name: 'phone 1',
    price: 5000,
    count: 10,
    img:
      'https://cdn.pixabay.com/photo/2014/04/03/21/15/tablet-313002_960_720.jpg',
  },

  {
    id: 2,
    name: 'phone 2',
    price: 3000,
    count: 8,
    img:
      'https://cdn.pixabay.com/photo/2014/04/03/21/15/tablet-313002_960_720.jpg',
  },

  {
    id: 3,
    name: 'phone 3',
    price: 7000,
    count: 0,
    img:
      'https://cdn.pixabay.com/photo/2014/04/03/21/15/tablet-313002_960_720.jpg',
  },

  {
    id: 4,
    name: 'notebook',
    price: 27000,
    count: 6,
    img:
      'https://cdn.pixabay.com/photo/2014/04/03/21/15/tablet-313002_960_720.jpg',
  },
];

const Products = () => {
  const handleClick = () => console.log("hello");

  return (
    <div className="products">
      <ProductList products={products} />
    </div>
  );
}
export default Products;