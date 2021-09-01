import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
  });
const data = [ 
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page B', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page D', uv: 400, pv: 2400, amt: 2400}, 
]
const Linechart = () => {
    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            <CardContent>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </CardContent>
        </Card>
     );
}
 
export default Linechart;