import { Paper, Table, TableCell, tableCellClasses,TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

import Selectionbtn from '../../../components/CommonComponents/selectdropdownbutton'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#606060",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));
export default function TableGrid({gridName,name}){
    return(
      
<>
<Selectionbtn name={name}/>
<TableContainer component={Paper} sx={{ padding: "20px" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
                {
                    gridName.map((name,index)=>(
                        <StyledTableCell key={index} align="left">{name}</StyledTableCell>
                    ))
                }
              {/* <StyledTableCell
                sx={{
                  borderBottom: "0px",
                  backgroundColor: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
        Row Line
              </StyledTableCell>
              <StyledTableCell align="left">Section Name</StyledTableCell>
              <StyledTableCell align="center">Section Number</StyledTableCell> */}
              <StyledTableCell align="center">Action</StyledTableCell>
              
            </TableRow>
          </TableHead>
          </Table>
          </TableContainer></>
    )
}