import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import {
    Popper,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Emptyrow from "../../../../components/CommonComponents/EmptyTableGride";
import Select from '../../../../components/CommonComponents/selectdropdownbutton'
import { CreateDivision, fetchDivision } from "../../../../store/features/Division/divisionSlice";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#606060",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? (
                    <LastPageIcon />
                ) : (
                    <FirstPageIcon />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? (
                    <FirstPageIcon />
                ) : (
                    <LastPageIcon />
                )}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default function TableGrid({ disable, getInput ,gridName}) {
    
   
    const { 
        cityData, initialStateLoader, createDataLoader } = useSelector(
                (state) => state.CitySlice
            );
  
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const color = "rgba(0, 229, 143, 0.07)"; // green with 50% opacity
    const borderColor = "rgba(0, 229, 143, 1)"; // green with 100% opacity
    const{ClientId,LocCode,authKey}=useSelector((state)=>state.auth)
    
    const handleedit = ( value) => {
       
        getInput(cityData.DATA[value])
    };

    
    const handleDelete = (index) => {
        
     


       


    };
    const handleRestore = (index) => {
      
    };

    const handleChangePage = (event, newPage) => {
        
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
 
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const CustomPopper = ({ children, ...popperProps }) => (
        <Popper {...popperProps} placement="bottom-start">
            {children}
        </Popper>
    );
    return (
        <Box
            sx={{
                boxShadow:
                    " 0px 2px 1px -1px rgba(0, 0, 0, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            }}
        >
          
          <Select  name="List Of City" data={cityData.DATA}/>
            <TableContainer  component={Paper} sx={{ padding: "20px" }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell align="left">
                            {gridName[0]}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                            {gridName[1]}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                          
                            {gridName[2]}
                            </StyledTableCell>
                            
                    
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {cityData.DATA ? (
                            cityData.DATA
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    return (
                                        <StyledTableRow key={index}>
                                    
                                    <StyledTableCell
                                                sx={{
                                                    textTransform: "uppercase",
                                                    borderBottom: "0px",
                                                    
                                                    fontSize: { xs: "16px" },
                                                }}
                                                align="left"
                                            >
                                                {   cityData &&
                                                                    cityData.DATA.findIndex(
                                                                            (object) => {
                                                                                return (
                                                                                    object.City_ID ===
                                                                                    row.City_ID
                                                                                );
                                                                            }
                                                                        )+1}
                                            </StyledTableCell>
                                            <StyledTableCell
                                                sx={{
                                                    textTransform: "uppercase",
                                                    borderBottom: "0px",
                                                    
                                                    fontSize: { xs: "16px" },
                                                }}
                                                align="left"
                                            >
                                                {row.Country_Name}
                                            </StyledTableCell>
                                            <StyledTableCell
                                                sx={{
                                                    borderBottom: "0px",
                                                    
                                                    textTransform:"capitalize"
                                                }}
                                                align="left"
                                            >
                                                {row.City_Name}
                                            </StyledTableCell>
                                
                                          
                                            
                                                
                                           

                                        </StyledTableRow>
                                    );
                                })
                        ) : (
                             <Emptyrow colSpan={7}/>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
                    <TablePagination
                        sx={{
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                        colSpan={3}
                        count={cityData && cityData.DATA ? cityData.DATA.length : 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
        </Box>
    );
}
