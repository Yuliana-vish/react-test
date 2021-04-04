import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  item: {
    marginTop: 10,


    '& img': {     //// если нет возможности прописать className
      height: 100,
    },
    '&:hover': {
      backgroundColor: '#EEFFEE',
    },
    
  }, 
  card: {
    padding: 10,

  }
});

const ProductItem = ({ product }) => {
  const classes = useStyles();
  return (

    <li className={classes.item}>      
      <CardActionArea>
      <Card className={classes.card}>
          <img src={product.img} alt="img"/>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <IconButton>
            <AddShoppingCartIcon></AddShoppingCartIcon>
          </IconButton>
      </Card>
      </CardActionArea>      
    </li>
  )
};    
  
export default ProductItem;
