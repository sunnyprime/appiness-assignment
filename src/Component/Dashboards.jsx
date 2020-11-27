import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const user = [
  {
      "id":1,
      "name":"test1",
      "age" : "11",
      "gender":"male",
      "email" : "test1@gmail.com",
      "phoneNo" : "9415346313"
      },
      {
      "id" : 2,
      "name":"test2",
      "age" : "12",
      "gender":"male",
      "email" : "test2@gmail.com",
      "phoneNo" : "9415346314"
      },
      {
      "id":3,
      "name":"test3",
      
      "age" : "13",
      "gender":"male",
      "email" : "test3@gmail.com",
      "phoneNo" : "9415346315"
      },
      {
      "id":4,
      "name":"test4",
      "age" : "14",
      "gender":"male",
      "email" : "test4@gmail.com",
      "phoneNo" : "9415346316"
      },
      {
      "id":5,
      "name":"test5",
      "age" : "15",
      "gender":"male",
      "email" : "test5@gmail.com",
      "phoneNo" : "9415346317"
      },
      {
      "id":6,
      "name":"test6",
      "age" : "16",
      "gender":"male",
      "email" : "test6@gmail.com",
      "phoneNo":"9415346318"}
  ]

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Dashboards() {
  console.log(user);
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
    <Table className={classes.table} size="medium" aria-label="a dense table">
      <TableHead>
        <TableRow>
          
          <TableCell align="right"></TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Age</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Phone No.</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {user.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.age}</TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.phoneNo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
