import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import * as React from 'react';
import { data } from './data';

export default function TravelCardsCmp({ setPlaces1 }) {

  const [alert1, setAlert] = React.useState(false);
  const [name1, setname] = React.useState("");
  const [place1, setPlace] = React.useState("");
  const [price1, setPrice] = React.useState("");
  const [discountedPrice1, setDiscountedPrice] = React.useState("");
  const [duration1, setDuration] = React.useState("");
  const [image, setImage] = React.useState("");
  // const myObj = {
  //   name: name1,
  //   price: price1,
  //   discountedPrice: discountedPrice1
  // }

  // const myObject = JSON.stringify(myObj);
  const [places, setPlaces] = React.useState([]);
  console.log(places)

  function handleBookPlace(index) {
    setPlaces([...places, { name1, place1, price1, discountedPrice1, image }])
    setPlaces1(places);
    // localStorage.setItem('myObj', places);
    // console.log(localStorage);
    // localStorage.setItem('place1', place1);
    // localStorage.setItem('price1', price1);
    // localStorage.setItem('discountedPrice1', discountedPrice1);
    // localStorage.setItem('duration1', duration1);
    setAlert(true);
    // alert("Booked");
    // console.log(index + 1 + name1 + place1 + price1 + discountedPrice1);
  }

  return (
    <Box sx={{ flexWrap: "wrap", display: "flex", alignItems: "center", justifyContent: "space-around", margin: "16px 16px 24px 16px" }}>
      {data.map((data, index) => (
        <Card sx={{ width: "20rem", marginTop: "24px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200rem"
              image={data.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight={600} letterSpacing={1}>
                {data.name}
              </Typography>
              <Box sx={{ display: "flex" }}>
                {data.places.map((pla) => (
                  <Typography variant="body2" color="text.secondary" letterSpacing={1} >
                    {pla},
                  </Typography>
                ))}
              </Box>
              {data.discountedPrice != null ? <Box sx={{ lineHeight: "4px" }}>
                <Typography mt={1} gutterBottom sx={{ fontSize: "12px", color: "red" }} component="div" letterSpacing={1}>
                  ₹{data.discountedPrice}
                </Typography>
                <Typography sx={{ textDecorationLine: "line-through", }} mt={1} gutterBottom variant="p" component="div" letterSpacing={1}>
                  ₹{data.price}
                </Typography>
              </Box> : <Typography mt={1} gutterBottom variant="p" component="div" letterSpacing={1}>
                ₹{data.price}
              </Typography>}
              {data.duration.map((dur) => (
                <Box>
                  <Typography mt={2} gutterBottom variant="p" component="div" letterSpacing={1}>
                    Duration: {dur.d} Days and {dur.n} Nights
                  </Typography>
                </Box>
              ))}
              <Typography mt={1} gutterBottom variant="p" component="div" fontWeight={600} letterSpacing={1}>
                {moment(data.date).format('LL')}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button sx={{ bottom: 0, color: "green", fontWeight: "600" }} size="small" color="primary" letterSpacing={1} onClick={() => {
              handleBookPlace(index)
              setname(data.name);
              setPlace(data.places)
              setPrice(data.price);
              setDiscountedPrice(data.discountedPrice);
              setDuration(data.duration)
              setImage(data.image)
            }}>
              BOOK NOW
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}