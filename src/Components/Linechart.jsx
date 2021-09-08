import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Box, Link } from '@material-ui/core';



const useStyles = makeStyles(() => ({
    root: {
      minWidth: 275,
      flexGrow: 1,
    },

    title: {
        fontSize: 20,
    },
    Ytitle: {
        transform: "rotate(-90deg)",
        width: "60px",
        margin: "80px 0px 0px -25px", 
        position: 'fixed',
    },
}));

const data = [ 
    {name: '00:00', uv: 600, pv: 2400, amt: 2400}, 
    {name: '03:00', uv: 1200, pv: 1398, amt: 2210},
    {name: '06:00', uv: 600, pv: 2400, amt: 2400}, 
    {name: '09:00', uv: 2400, pv: 3908, amt: 2000},
    {name: '12:00', uv: 1200, pv: 3908, amt: 2000},  
    {name: '15:00', uv: 1000, pv: 3908, amt: 2000}, 
    {name: '18:00', uv: 2000, pv: 3908, amt: 2000}, 
    {name: '21:00', uv: 2400, pv: 3988, amt: 2400}, 
    {name: '24:00', uv: 2400, pv: 3908, amt: 2000}, 
]

const Linechart = () => {
    const classes = useStyles()
    
    return ( 
        <Container style={{ paddingTop: 100 }}>
            <Grid container spacing={6} justifyContent="center">
                <Grid container item xs={12} sm={12} md={8} lg={9} spacing={3}>                  
                    <Card className={classes.root}>
                        <CardContent >
                            <Typography  className={classes.title} color="primary" variant="h6" >Today</Typography>
                            <div style={{ width: '100%', height: 200 }}>
                                <Typography className={classes.Ytitle}>Sales $</Typography>
                                <ResponsiveContainer>
                                
                                    <LineChart width={600} height={300} data={data} margin={{ top: 30, right: 20, bottom: 5, left: 0 }}>
                                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                    </LineChart>
                                </ResponsiveContainer>   
                            </div>      
                        </CardContent>
                    </Card>
                </Grid>  
                <Grid container item xs={12} sm={12} md={4} lg={3} spacing={3}>
                   <Card className={classes.root}>
                       <CardContent>
                            <Box style={{ width: '100%' }}>
                                <Typography  color="primary" variant="h6">
                                    <Box fontSize={20} pl={1}  display="block">
                                        Recent Deposits
                                    </Box>
                                </Typography>

                                <Typography variant="h4" >
                                    <Box pl={1}  display="block" >    
                                        $3,024.00
                                    </Box>
                                </Typography>
                                <Typography variant="h6" >
                                    <Box fontSize={16} pl={1} display="block" >
                                        on 15 March, 2019
                                    </Box>
                                </Typography>
                                <Typography  color="primary" variant="h5">
                                    <Box fontSize={15} pl={1} mt={15} display="block">
                                        <Link href="#" >
                                            View balance
                                        </Link>
                                    </Box>
                                </Typography>
                            </Box>
                       </CardContent>
                    </Card>
                </Grid>
            </Grid>
       </Container>
     );
}

export default Linechart;