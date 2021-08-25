import React from 'react'
import './App.css'
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './Styles'

const cards=[1,2,3,4,5,6,7,8,9]
function App() {
  const classes=useStyles()
  return (
    <>
     <CssBaseline/>
      <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant="h6">Photoalbum</Typography>
      </Toolbar>
      </AppBar>
       <main>
         <div className={classes.container}>
           <Container maxWidth="sm">
               <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                 Photo album
               </Typography>
               <Typography variant="h5" align="center" color="textSecondary" paragraph>
               Hello everyone this is a phota album  i make the sentence as log as possible so we can how it lloks like
               </Typography>
               <div className={classes.buttons}>
                 <Grid container spacing={2} justify="center">
                   <Grid item>
                     <Button variant="contained" color="primary">
                          c ma photos
                     </Button>
                     <Button variant="outlined" color="primary">
                          secondary action
                     </Button>
                   </Grid>
                 </Grid>
               </div>
           </Container>
         </div>
         <Container className={classes.cardGrid} maxWidth='md' >
              <Grid container spacing={4}>
                {cards.map(()=>(
                 <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                     title="image-title"
                     />
                     <CardContent className={classes.cardContent}>
                       <Typography gutterBottom variant="h5">
                         Heading
                         </Typography>
                         <Typography>
                           this is a  media card.you can descride ur product here i really dont know what to typr
                         </Typography>


                     </CardContent>
                     <CardActions>
                       <Button size="small" color="primary">view</Button>
                       <Button size="small" color="primary">edit</Button>
                     </CardActions>
                    </Card>
                 </Grid>))}
              </Grid>
         </Container>
       </main>
    </>
  )
}

export default App
