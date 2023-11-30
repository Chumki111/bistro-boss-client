import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const BlogCard = ({blog}) => {
    const handleDelete =() =>{
        console.log('hmm');
    }

    const createMarkup = (content) => {
      return { __html: content };
  };
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={blog?.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <div dangerouslySetInnerHTML={createMarkup(blog?.content)} />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleDelete} size="small" color="primary">
            Delete
          </Button>
          <Button size="small">Publish</Button>
        </CardActions>
      </Card>
    );
};

export default BlogCard;