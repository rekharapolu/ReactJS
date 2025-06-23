import {Fragment} from "react";
import ChildComponent from "./ChildComponent"

let ParentComponent=function(){
    let skills=["html","css","js","reactjs"];
    return <>
    <div id="courses">
    <h1>I am a Parent Component</h1>
    {/* <ChildComponent name="Rekha"/> */}
    <ChildComponent name="Rekha" age={22} skills={skills} isgood={true} isbad={false} isempty={null} isIt={undefined}/>
    </div>
    </>
}
export default ParentComponent