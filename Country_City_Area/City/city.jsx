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
import Selectbtn from "../../../../components/CommonComponents/selectField";
import SideBar from "../../../../components/CommonComponents/sidebar";
import { fetchCity } from "../../../../store/features/City/citySlice";
import TableGrid from "../City/cityTableGrid";

export default function City() {
    const gridName = ["Row Line", "Country Name", "City Name","Status"];
    const dispatch = useDispatch();
    const [disbale, setDisable] = useState(false);
    const { ClientId, authKey, LocCode } = useSelector((state) => state.auth);
    const [alerts, setAlerts] = useState({
        alertToggle: false,
        message: "",
    });
    const { 
        countryData, } = useSelector(
                (state) => state.CountrySlice
            );
            const { 
                cityData, initialStateLoader, createDataLoader } = useSelector(
                        (state) => state.CitySlice
                    );
          
    const [isnumber, setIsNumber] = useState(false);
    const { alertToggle, message } = alerts;
   const [cityFormData,setCityFormData]=useState({
    ClientId:ClientId,
    auth_key:authKey,
    CityName:"",
    Country:""

   })

   const{Country,CityName}=cityFormData
    const handleInputChange = (field, value) => {
        setCityFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleCheckChange = (field, value) => {
        // setModifierFormData((prevData) => ({
        //     ...prevData,
        //     [field]: value,
        // }));
    };
    useEffect(() => {

        dispatch(fetchCity())
    }, []);
    const handleSave = () => {


        setDisable(false);
    };
    const getInput = (value) => {
        console.log(value);
        setCityFormData({
            ClientId:ClientId,
            auth_key:authKey,
            CityName:value.City_Name,
            Country:value.Country_Name
        
           })
        setDisable(true);
    
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
                    City
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
                                flexDirection: "row-reverse",
                            }}
                        >
                            <FormControl
                                variant="standard"
                                sx={{
                                    margin: "7px 0px",
                                    padding: "7px 0",
                                    width: {
                                        xs: "100%",
                                        sm: "45%",
                                        lg: "45%",
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
                                    City Name
                                </InputLabel>
                                <OutlinedInput
                                    value={CityName}
                                    onChange={(e) => {
                                        handleInputChange(
                                            "CityName",
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
                                    placeholder="Enter City Name"
                                />
                            </FormControl>
                            <Selectbtn
                                sx={{
                                    margin: "7px 0px",
                                    padding: "7px 0",
                                    width: {
                                        xs: "100%",
                                        sm: "45%",
                                        lg: "45%",
                                    },
                                }}
                            
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
                            
                        >
                            Cancel
                        </Button>

                        {disbale ? (
                            <LoadingButton
                                onClick={handleSave}
                                loadingPosition="start"
                                variant="contained"
                                sx={{
                                    width: {
                                        xs: "200px",
                                        lg: "9%",
                                        margin: "20px 5px",
                                    },
                                    backgroundColor: "#388e3c !important ",
                                    color: "white !important",
                                }}
                            >
                                Update
                            </LoadingButton>
                        ) : (
                            <LoadingButton
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
                            </LoadingButton>
                        )}
                    </Box>
                </Box>

                <Box sx={{ margin: "20px 0px 0px 0px" }}>
                    {
                        initialStateLoader?<Loader/>:     <TableGrid name={"List Of City"} getInput={getInput} gridName={gridName} />
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
                        msg={"Modifier Id is already exits!"}
                        status={"error"}
                    />
                ) : null}
            </Box>
        </>
    );
}
