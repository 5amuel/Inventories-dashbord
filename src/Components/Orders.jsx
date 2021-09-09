import { Table, TableRow, Paper, TableBody, TableCell, TableContainer, TableHead, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { useState, useEffect } from "react";
import { Box, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    
  },
  
  
  
});

const Orders = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/orders')
      .then(res => {
        return res.json();
      })
      .then(data =>{
        setOrders(data)
        console.log(data)
      })
  }, [])
console.log(orders)
  return (
  
      <TableContainer component={Paper} className={classes.container}>
        <Typography variant="h6" color="primary" >
          <Box pl={2} pt={1}>Recent Orders</Box>
        </Typography>
        <Box p={2}>
        <Table  size="small" aria-label="a dense table" >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders && orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell component="th" scope="row">
                  {order.date}
                </TableCell>
                <TableCell align="left">{order.name}</TableCell>
                <TableCell align="left">{order.ship}</TableCell>
                <TableCell align="left">{order.pmethod}</TableCell>
                <TableCell align="left">{order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
        <Box fontSize={15} pl={2} pt={1} display="block">
          <Link href="#" >
            See more orders
          </Link>
        </Box>
      </TableContainer>
   );
}
 
export default Orders;