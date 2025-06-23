import {Fragment} from "react"

let ChildComponent=function(props){
    console.log(props);
    console.log(props.skills[0]);

    let {name,age,skills:[a,b,c,d]}=props
    return <>
    <h1>I am a Child Component</h1>
    <p>my name is {name}</p>
    <p>{a}</p>
    <p>{b}</p>
    <p>{c}</p>
    <p>{d}</p>
    </>
}

export default ChildComponent