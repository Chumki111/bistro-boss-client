
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Featured = () => {
    return (
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8'>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        object-fit='true'
          component="img"
          height="140"
          image="https://i.ibb.co/7JyKhHs/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-fe.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            How donation help
          </Typography>
          <Typography variant="body2" color="text.secondary">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        object-fit='true'
          component="img"
          height="140"
          image="https://i.ibb.co/pJCB6Hw/young-arab-doctor-shakes-hands-with-nurse-hospital-against-background-human-body-155404-29.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Why give blood
          </Typography>
          <Typography variant="body2" color="text.secondary">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         object-fit='true'
          component="img"
          height="140"
          image="https://i.ibb.co/Byy3Fsg/closeup-woman-s-hand-while-donating-blood-blood-donation-center-186673-11807.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Become A Donar
          </Typography>
          <Typography variant="body2" color="text.secondary">
           But I must to you how all this mistaken idea of denouncing and praising pain was born and I will give.... 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
       </div>
    );
};

export default Featured;