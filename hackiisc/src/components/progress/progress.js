import CompanyComparision from "../Charts/CompanyComparision";
import EfficiencyHistory from "../Charts/EfficiencyHistory";
import EfficiencyComparision from "../Charts/EfficiencyComparision";
import * as React from "react";
import axios from "axios";
import {Grid} from "@material-ui/core";

function Progress(props){

    const [isSet, setStatus] = React.useState(false);
    const [isSet_1, set_Status] = React.useState(false);
    const [Graph_Data, setGraph] = React.useState([])
    const [Graph_Data_1, set_Graph] = React.useState([])
    if(isSet === false){
        axios.post("http://localhost:5000/api/Database",{
            action: sessionStorage.getItem("src")==="user"?"getEfficiencyHistory":"getCompanyComparision",
            token: sessionStorage.getItem("authToken"),
            email: sessionStorage.getItem("email")
        }).then((res)=>{
            if(res.status === 200){
                console.log(res.data);
                setGraph(res.data);
                setStatus(true);
            }
        })
    }
    if(isSet_1 === false){
        axios.post("http://localhost:5000/api/Database",{
            action: "getEfficiencyComparision",
            token: sessionStorage.getItem("authToken"),
            email: sessionStorage.getItem("email")
        }).then((res)=>{
            if(res.status === 200){
                console.log(res.data);
                set_Graph(res.data);
                set_Status(true);
            }
        })
    }

    return(
        <Grid container maxWidth sx={{display: 'flex'}} justifyContent="center" alignItems="center" padding={1}>
            {
                sessionStorage.getItem("src")==="user"?(
                    <>
                    <Grid item xs={12} md={6} padding={1}>
                        <EfficiencyHistory data={Graph_Data}></EfficiencyHistory>
                    </Grid>
                    <Grid item xs={12} md={6} padding={1}>
                        <EfficiencyComparision data={Graph_Data_1}></EfficiencyComparision>
                    </Grid>
                    </>
                ):(
                    <Grid item xs={12} md={6} padding={1}>
                        <CompanyComparision data={Graph_Data}></CompanyComparision>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default Progress;
