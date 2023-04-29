// import React from "react";
// import "./Table.css";
// import { tableData } from "../../Data/Data";

// const Table = () => {
//   return (
//     <div>
//       <div class="limiter">
//         <div class="container-table100">
//           <div class="wrap-table100">
//             <table class="table">
//               <tr class="row header">
//                 <th class="cell">Client</th>
//                 <th class="cell"># Send</th>
//                 <th class="cell">End Date</th>
//                 <th class="cell">Interval</th>
//                 <th class="cell">Amount</th>
//                 <th class="cell">Edit</th>
//               </tr>

//               <tr>
//                 {tableData.map((item) => (
//                   <td>{item} </td>
//                 ))}
//               </tr>

//               {/* <div class="row">
//                 <div class="cell" data-title="Full Name">
//                   MadeByMack
//                 </div>
//                 <div class="cell" data-title="Age">
//                   25
//                 </div>
//                 <div class="cell" data-title="Job Title">
//                   iOS Developer
//                 </div>
//                 <div class="cell" data-title="Location">
//                   Washington
//                 </div>
//                 <div class="cell" data-title="Location">
//                   Washington
//                 </div>
//                 <div class="cell" data-title="Location">
//                   Washington
//                 </div>
//               </div> */}
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;
import React from "react";

import "./Table.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(CLIENT, SEND, END, INTERNAL, AMOUNT, EDIT) {
  return { CLIENT, SEND, END, INTERNAL, AMOUNT, EDIT };
}

const rows = [
  createData("MadeBYMack", 25, "24-20-2024", "3/month", "€3000"),
  createData("MadeBYMack", 25, "24-20-2024", "4/month", "€3000"),
  createData("MadeBYMack", 25, "24-20-2024", " 1/month", "€3000"),
  createData("MadeBYMack", 25, "24-20-2024", "3/year", "€3000"),
  createData("MadeBYMack", 25, "24-20-2024", "1/year", "€3000"),
  createData("MadeBYMack", 25, "24-20-2024", "2/month", "€3000"),
];

const TableComponent = () => {
  return (
    <TableContainer sx={{ marginTop: "25px" }}>
      <Table className="tables">
        <TableHead>
          <TableRow>
            <TableCell>CLIENTS</TableCell>
            <TableCell># SEND</TableCell>
            <TableCell>END INTERVAL</TableCell>
            <TableCell>INTERNAL</TableCell>
            <TableCell>AMOUNT</TableCell>
            <TableCell>EDIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="clientRow">
                  <img src={require("../../Assets/clients.png")} alt="" />
                  <div> {row.CLIENT}</div>
                </div>
              </TableCell>
              <TableCell>{row.SEND}</TableCell>
              <TableCell>{row.END}</TableCell>
              <TableCell>{row.INTERNAL}</TableCell>
              <TableCell>{row.AMOUNT}</TableCell>
              <TableCell>
                <button className="editbtn">
                  <h3>Edit</h3>
                  <img src={require("../../Assets/arrow.png")} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
