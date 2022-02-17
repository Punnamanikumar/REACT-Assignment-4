import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

const Students = () => {
  const data = [
    {
      name: "ManiKumar",
      age: 22,
      course: "MERN",
      batch: "September",
      edit: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "VamshiKalyan",
      age: 28,
      course: "MERN",
      batch: "November",
      edit: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "Vaibhav",
      age: 25,
      course: "MERN",
      batch: "July",
      edit: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "AzizKhan",
      age: 26,
      course: "MERN",
      batch: "December",
      edit: <NavLink to="#">Edit</NavLink>,
    },
  ];
  return (
    <div id="studentDetails">
      <div className="flex1">
        <h1>Students Details</h1>
        <button className="addbtn">Add new student</button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Batch</TableCell>
              <TableCell align="right">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.batch}</TableCell>
                <TableCell align="right">{row.edit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
