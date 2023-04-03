import { ShoppingBasket } from '@mui/icons-material';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const Basket = props => {
  const {
    cartOpen,
    // order,
    // removeFormOrder,
    closeCart = Function.prototype,
  } = props;
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Basket;
