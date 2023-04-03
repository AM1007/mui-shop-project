import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from '@mui/material';

const GoodsItem = props => {
  const { name, price, setOrder, poster } = props;

  return (
    <Grid item sx="12" md="4">
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          image={poster}
          alt={name}
          title={name}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>

          <Typography variant="body1">Цена: {price} грн.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
