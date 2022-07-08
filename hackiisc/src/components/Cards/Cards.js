import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from "./Cards.module.css"

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: '80%' }} className={styles.center}>
      <CardMedia
        component="img"
        height="300"
        image={props.src}
        alt= {props.alt}
      />
      <CardContent className =  {styles.heading }>
        {/* <Typography gutterBottom variant="h5" component="div" className={styles.heading}> */}
          {props.text}
        {/* </Typography> */}
      </CardContent>
    </Card>
  );
}
