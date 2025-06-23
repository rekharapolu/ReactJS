import React from "react";
import { Fragment } from "react";
import CourseParent from "./Course/CourseParent.jsx";
import Parent from "../json/Parent.jsx";
import InlineCssWay from './../waystoaddcss/InlineCssWay';
import InternalCssWay from './../waystoaddcss/InternalCssWay';

let App=()=>{
    return(
        <>
        {/* <CourseParent/> */}
        {/* <Parent/> */}
        {/* <InlineCssWay/> */}
        <InternalCssWay/>
    </>
    )
}
export default App