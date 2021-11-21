import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import reviews from '../reviews.json'

 const useStyles=makeStyles((theme)=>({
     root:{
         flexGrow: 1,
         padding:theme.spacing(2)
     },
     quotation:{
         display:'inline-block',
         margin:'0 5px'
     }

 })) 

const Reviews = () => {
    const classes=useStyles()
    const quoteUp = <span className={classes.quotation}>“</span>;
    const quoteDown = <span className={classes.quotation}>„</span>;
    return (
       <React.Fragment>
            <Typography style={{marginTop:'25px'}} variant='h5'  align='center'>Reviews</Typography>
        <div className={classes.root}>
            <Grid container spacing={2} >
                {reviews.map(review=>{
                       return(
                           <Grid item xs='auto' key={review.id}>
                            <Card variant='outlined'>
                                <CardContent>
                                    <Typography variant='body2' color='textSecondary'>{quoteUp}{review.review}{quoteDown}</Typography>
                                    <Typography variant='subtitle1'>{review.name}</Typography>
                                    <Typography variant='subtitle2' color='textSecondary'>{review.car}</Typography>
                                </CardContent>
                            </Card>
                           </Grid>
                       ) 
                })}
            </Grid>
        </div>
       </React.Fragment>
    )
}

export default Reviews
