"use client";
import type { NextApiRequest, NextApiResponse } from "next";
import products from "../../../utils/data/products";

// fake data
// import products from "./utils/data/products";
export default (req: NextApiRequest, res:NextApiResponse)=>{
    console.log('request'+ req);
    // // fake loading time
    // const data = res.json(products);
    // console.log(data);
        // res.status(200).json(products);
    // res.json(products);
    // setTimeout(()=>{
    // },400);
}