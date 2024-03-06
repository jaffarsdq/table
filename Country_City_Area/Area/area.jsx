
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    OutlinedInput,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Alterpop from '../../../../components/CommonComponents/alertmsgpop'
import Loader from '../../../../components/CommonComponents/loader'
import Selectbtn from "../../../../components/CommonComponents/selectField";
import SideBar from "../../../../components/CommonComponents/sidebar";
import { fetchArea } from "../../../../store/features/Area/areaSlice";
import TableGrid  from "../Area/areaTableGrid";

export default function City() {
    const gridName = [
        "Row Line",
        "Area Name",
        "Country Name",
        "City Name",
      
    ];
    const dispatch = useDispatch();
    const [disbale,setDisable]=useState(false)
    const{ClientId,authKey,LocCode}=useSelector((state)=>state.auth)
    const[alerts,setAlerts]=useState({
        alertToggle:false,
        message:""
    })
    const { 
        countryData,   } = useSelector(
                (state) => state.CountrySlice
            );
    const[isnumber,setIsNumber]=useState(false)
    const{alertToggle,message}=alerts
    const{initialStateLoader,createDataLoader}=useSelector((state)=>state.AreaSlice)
    const{cityData}=useSelector((state)=>state.CitySlice)
    const [areaFormData, setAreaFormData] = useState({
        
        Area:"",
        Country: "",
        City: "",
        validity: "",
        group_id: "",
        Valid:1
    });

      
  
    const { Area,Country, City, modifier_type, validity, group_id,Valid } =
        areaFormData;

    const handleInputChange = (field, value) => {
        setAreaFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));


    };

    const handleCheckChange=(field,value)=>{
        setAreaFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        
    }
    useEffect(() => {
      dispatch(fetchArea())
    }, []);
    const handleSave = () => {
        setAreaFormData(
            
        )
      console.log(areaFormData)
    };
    const handlecancel=(state)=>{
      
        
        setDisable(false)
    }
    const getInput = (value) => {
        setAreaFormData({
           
            Area:value.Area_Name,
            Country: value.Country_Name,
            City: value.City_Name,
            validity: value.validity,
         
            Valid:1
        })
        console.log(value);
      
    
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "auto",
                    backgroundColor: "#FAFAFB",
        
                }}
            >
                <Typography
                    variant="p"
                    component="p"
                    sx={{
                        fontSize: "24px",
                        padding: "16.5px 14px",
                        fontWeight: "700",
                        color: "black",
                        fontFamily: "Public Sans !important",
                    }}
                >
                   Area
                </Typography>
                <Box
                    sx={{
                     
                        backgroundColor: "White",
                        border: " 2px solid #E6EBF1",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "30px 20px",
                        borderRadius: "10px",
                        flexDirection: "column",
                        margin: "0px 20px",
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "#FAFAFB",
                            padding: "10px",
                            border: " 2px solid #E6EBF1",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                lg: "center",
                            },
                            gap: "15px",
                            flexWrap: "wrap",
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#FAFAFB",
                                padding: "0px",

                                display: "flex",
                                justifyContent: {
                                    xs: "center",
                                    lg: "space-evenly",
                                },
                                gap: " 0px 10px",
                                flexWrap: "wrap",
                                width: "100%",
                                alignItems: "center",
                                flexDirection:'row-reverse'
                            }}
                        >
                            <FormControl
                                variant="standard"
                                sx={{
                                    margin: "7px 0px",
                                    padding: "7px 0",
                                    width: {
                                        xs: "100%",
                                        sm: "30%",
                                        lg: "30%",
                                    },
                                }}
                            >
                                <InputLabel
                                    sx={{
                                        fontFamily: "Public Sans !important",
                                        fontWeight: "700",
                                    }}
                                    shrink
                                    htmlFor="bootstrap-input"
                                >
                                    Area Name
                                </InputLabel>
                                <OutlinedInput
                                    value={Area}
                                    onChange={(e) => {
                                        handleInputChange(
                                            "Area",
                                            e.target.value
                                        );
                                    }}
                                    type="text"
                                    required
                                    sx={{
                                        margin: "14px 0 0 0",
                                        backgroundColor: "white",

                                        "&:focus": {
                                            boxShadow:
                                                "rgba(25,118,210,0.25) 0 0 0 0.2rem",
                                            borderColor: "#1976d2",
                                        },
                                        height: "48px",
                                        borderRadius: "4px",
                                        "& input::placeholder": {
                                            fontSize: "12px",
                                            fontWeight: "bolder",
                                        },
                                        padding: "10px;",
                                    }}
                                    placeholder="Enter Area"
                                />
                            </FormControl>
                            <Selectbtn
                            sx={ {margin: "7px 0px",
                            padding: "7px 0",
                            width: {
                                xs: "100%",
                                sm: "30%",
                                lg: "30%",
                            }}}
                                name="City Name"
                                obj="City"
                                placeholder="City Name"
                                value={City}
                                option={
                                    cityData.DATA
                                }
                                handleInputChange={handleInputChange}
                            />
 <Selectbtn
                                sx={ {margin: "7px 0px",
                                padding: "7px 0",
                                width: {
                                    xs: "100%",
                                    sm: "30%",
                                    lg: "30%",
                                }}}
                            
                                name="Country Name"
                                obj="Country"
                                value={Country}
                                placeholder="Country Name"
                                option={countryData.DATA}
                                handleInputChange={handleInputChange}
                            />
 
              
                            
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", lg: "flex-end" },
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                width: { xs: "200px", lg: "9%" },
                                margin: "20px 5px",
                            }}
                            onClick={handlecancel}
                        >
                            Cancel
                        </Button>

                        {disbale? <LoadingButton
                            onClick={handleSave}
                            loadingPosition="start"
                            variant="contained"
                            
                            sx={{
                                width: {
                                    xs: "200px",
                                    lg: "9%",
                                    margin: "20px 5px",
                                },
                                backgroundColor:"#388e3c !important ",
                                color: "white !important",
                            }}
                        >
                            Update
                        </LoadingButton>: <LoadingButton
                            onClick={handleSave}
                            loading={createDataLoader}
                            loadingPosition="start"
                            variant="contained"
                            sx={{
                                width: {
                                    xs: "200px",
                                    lg: "9%",
                                    margin: "20px 5px",
                                },
                                backgroundColor: "#1976d2 !important",
                                color: "white !important",
                            }}
                        >
                            Save
                        </LoadingButton>}
             
                    </Box>
                </Box>

                <Box sx={{ margin:"20px 0px 0px 0px" }}>
                 {   initialStateLoader?<Loader/>:
                    <TableGrid name={"List Of Area"} getInput={getInput} gridName={gridName} />}
                </Box>
                {
                
                alertToggle&&<Alterpop boolean={alertToggle} msg={message} status={"error"} />
                }

{isnumber ? (
                <Alterpop
                    boolean={true}
                    msg={"Modifier Id is already exits!"}
                    status={"error"}
                />
            ) : null}
  
          </Box>
        </>
    );
}
