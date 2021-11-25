import React from 'react'
import Services from './Services'
import FormicForm from '../components/FormicForm'
import { Grid } from '@material-ui/core'
const Booking = () => {
    return (
        <Grid container spacing={1}>
            <Grid item lg='6' xs='auto' md='auto'>
                <Services/>
            </Grid>
            <Grid item lg='6' xs='auto' md='auto'>
                <FormicForm/>
            </Grid>
        </Grid>
    )
}

export default Booking
