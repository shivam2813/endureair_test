import {Container} from "@mui/material"
import CustomCard from "./CustomCard";
import axios from 'axios';
import { useEffect, useState } from "react";

const MainCard = ()=>{
    const [itemData,setData]=useState()

    useEffect(()=>{
        axios('http://127.0.0.1:2003/data')
        .then((response)=>{
            var result=response.data;
            setData(result);
        }
        )
        .catch((err)=>(console.log(err)));
    },[])
    console.log("data:"+itemData);

    return (
        <>
        <Container>
            <CustomCard>

            </CustomCard>
            <h1>HELLO</h1>
        </Container>
        </>
    );
};

export default MainCard;