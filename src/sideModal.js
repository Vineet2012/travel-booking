import { Box, CardActionArea, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import moment from 'moment';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCmp({ open, handleClose, places1 }) {

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   setItems(JSON.parse(localStorage.getItem("myObj")))
  // }, [])

  console.log(places1)

  return (
    <Box>
      {places1.map((data) => (
        <React.Fragment>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"TRIP'S YOU HAVE PLANNED"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Card sx={{ width: "20rem", margin: "24px 24px 24px 24px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200rem"
                      image={data.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" fontWeight={600} letterSpacing={1}>
                        {data.name1}
                      </Typography>
                      <Typography gutterBottom variant="p" component="div" fontWeight={600} letterSpacing={1}>
                        {data.places1}
                      </Typography>
                      {data.discountedPrice1 != null ? <Box sx={{ lineHeight: "4px" }}>
                        <Typography mt={1} gutterBottom sx={{ fontSize: "12px", color: "red" }} component="div" letterSpacing={1}>
                          ₹{data.discountedPrice1}
                        </Typography>
                        <Typography sx={{ textDecorationLine: "line-through", }} mt={1} gutterBottom variant="p" component="div" letterSpacing={1}>
                          ₹{data.price1}
                        </Typography>
                      </Box> : <Typography mt={1} gutterBottom variant="p" component="div" letterSpacing={1}>
                        ₹{data.price1}
                      </Typography>}
                      <Typography mt={1} gutterBottom variant="p" component="div" fontWeight={600} letterSpacing={1}>
                        {moment(data.date1).format('LL')}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      ))}
    </Box>
  );
}