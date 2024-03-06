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

import Alterpop from "../../../../components/CommonComponents/alertmsgpop";
import Loader from "../../../../components/CommonComponents/loader";
import Select from "../../../../components/CommonComponents/selectdropdownbutton";
import SideBar from "../../../../components/CommonComponents/sidebar";
import { fetchArea } from "../../../../store/features/Area/areaSlice";
import { fetchCity } from "../../../../store/features/City/citySlice";
import {fetchCountry} from '../../../../store/features/Country/countrySlice'
import Table from '../Country/countryTableGrid'
// import TableGrid from "../Division/divisionTableGrid";
export default function Country() {
  
    const dispatch = useDispatch();
    const [disbale, setDisable] = useState(false);
    const { ClientId, authKey, LocCode } = useSelector((state) => state.auth);
    const [alerts, setAlerts] = useState({
        alertToggle: false,
        message: "",
    });

    const [isnumber, setIsNumber] = useState(false);
    const { alertToggle, message } = alerts;
    const { 
countryData, initialStateLoader, createDataLoader } = useSelector(
        (state) => state.CountrySlice
    );

    const [countryFormData, setCountryFormData] = useState({
        client_id:ClientId,
        auth_key:authKey,
       
        CountryName: "",
        valid : 1
      
    });
 
 const [columns,setColumns]=useState([
    "country_id","CountryName"
 ]
    
 )
    const {  CountryName } = countryFormData;

    const handleInputChange = (field, value) => {
        setCountryFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleCheckChange = (field, value) => {
        setCountryFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    useEffect(() => {
        dispatch(fetchArea())
        dispatch(fetchCity())
        dispatch(fetchCountry())
        // dispatch(fetchDivision());
    }, []);
    const handleSave = () => {
        console.log(countryFormData,"check");
        if(CountryName&&disbale){
            // dispatch(CreateDivision(countryFormData))
            
            setDisable(false)
           
            handlecancel()
        }else if(CountryName&&!disbale){
            const matchingSections = countryData.DATA?countryData.DATA.filter(item => item.Divison_code === CountryName):[];
            if(matchingSections.length > 0) {
                setIsNumber(true)
                
            } else {
                handlecancel()
                // dispatch(CreateDivision(countryFormData));
            }

        }
        else{
            setAlerts(
                {
                    alertToggle:true,
                    message:"Please fill the required fields"
                }
            )
        }
        setTimeout(()=>{
            setIsNumber(false)
            setAlerts(
                {
                    alertToggle:false,
                    message:""
                }
            )
        },2000)
    };
    const handlecancel = (state) => {
        setCountryFormData({
            client_id:ClientId,
            auth_key:authKey,
     
            CountryName: "",
            valid:1,
        });

        setDisable(false);
    };
    const getInput = (value) => {
        console.log(value);
        setDisable(true);
      
        setCountryFormData({
            client_id:ClientId,
        auth_key:authKey,
    
            CountryName:value.CountryName,
            valid:value.valid,
        });
    };
    const toDelete=(value)=>{
        console.log(value)
    }
    useEffect(()=>{



        dispatch(fetchCountry())
    },[])
    return (
   
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
                        padding: "16px 16px",
                        fontWeight: "700",
                        color: "black",

                        fontFamily: "Public Sans !important",
                    }}
                >
                    Country
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
                                     
                                        lg: "97%",
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
                                    Country Name
                                </InputLabel>
                                <OutlinedInput
                                   value={CountryName}
                                    onChange={(e) => {
                                        handleInputChange(
                                            "CountryName",
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
                                    placeholder="Enter Country"
                                />
                            </FormControl>
                       
 
              
                            
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
              
             

                <Box>
                    {initialStateLoader ? (
                        <Loader />
                    ) : 
                    
                    
                        <Table  name={"List Of Country"} gridName={["Row Line","Country Name","Status"]} data={countryData.DATA} columns={columns} getInput={getInput} toDelete={toDelete}  />
                    }
                    
                </Box>
                {alertToggle && (
                    <Alterpop
                        boolean={alertToggle}
                        msg={message}
                        status={"error"}
                    />
                )}

                {isnumber ? (
                    <Alterpop
                        boolean={true}
                        msg={"Code is already exits!"}
                        status={"error"}
                    />
                ) : null}
            </Box>
     
    );
}
