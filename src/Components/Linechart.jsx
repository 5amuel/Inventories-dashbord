import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minWidth: 275,
        flexGrow:1,
    },
    // content: {
    //     flexGrow: 1,
    //     padding: theme.spacing(2),
    // },
    // underBar: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     padding: theme.spacing(15, 3),
    //     // necessary for content to be below app bar
    //     ...theme.mixins.toolbar,
    //     justifyContent: 'flex-start',
    // },
}));

const data = [ 
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400}, 
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 2400, amt: 2400}, 
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000}, 
]

const Linechart = () => {
    const classes = useStyles()
    const theme = useTheme()
    return ( 
        <Container style={{ paddingTop: 100 }}>
            <Grid container spacing={6} >
                <Grid container item xs={12} sm={7}  spacing={3}>                  
                    <Card className={classes.root}>
                        <CardContent>
                            <div style={{ width: '100%', height: 200 }}>
                                <ResponsiveContainer>
                                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                    </LineChart>
                                </ResponsiveContainer>   
                            </div>      
                        </CardContent>
                    </Card>
                </Grid>  
                <Grid container item xs={12} sm={5} spacing={3}>
                    <Paper className={classes.paper}>Text
                    
                    </Paper>

                </Grid>
            </Grid>
       </Container>
     );
}

export default Linechart;