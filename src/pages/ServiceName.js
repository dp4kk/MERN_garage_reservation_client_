import React from 'react'
import serviceName from '../servicedetail.json'
import {makeStyles, Paper, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
  },
  paper: {
    width: 800,
    justifyContent: "center",
  },
  content:{
      padding:theme.spacing(2)
  }
}));
const ServiceName = () => {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                {serviceName.map(service=>{
                    return (
                      <div key={service.id} className={classes.content}>
                        <Typography variant="h6">⦿{service.name}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          {service.detail}
                        </Typography>
                      </div>
                    );
                })}
            </Paper>
        </div>
    )
}

export default ServiceName
