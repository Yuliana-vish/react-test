import ProductItem from "./ProductItem";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 10,      /// [0, 10, 10, 10] якщо треба задати різні параметри, то через масив

  }

});

const ProductList = ({ products }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {products.map(product =>
        // рендер по условию
        product.count > 0 ? (
          <ProductItem key={product.id} product={product} />
        ) : null,
        // или такой вариант
        // !!product.count && <ProductItem key={product.id} product={product} />
        // двойное отрицание НЕ чтобы не отображался 0
      )}
    </ul>
  );
}
    



export default ProductList;
