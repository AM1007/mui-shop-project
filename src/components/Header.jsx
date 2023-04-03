import { Toolbar, Typography, IconButton, AppBar } from '@mui/material';

import { ShoppingBasket } from '@mui/icons-material';

function Header(handleCart) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="6" component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color="inherit" onClick={handleCart}>
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
