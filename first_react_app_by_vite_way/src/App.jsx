import { Fragment } from "react"
import NavBar from "./NavBar.jsx"
import {FirstClassBasedComponent} from "./ClassBasedComponent/FirstClassBasedComponent.jsx"
import XiaomiParent from "./XiaomiSupportUsingProps/XiaomiParent.jsx"
import ParentComponent from "./Components/ParentComponent.jsx"
import Parent from "./defaultProps/Parent.jsx"
import Company from "./EmployeeDefaultProps/Company.jsx"
import ChildrenParent from "./ChildrebProps/ChildrenParent.jsx"

let App=()=>{
    return <Fragment>
        {/* <FirstClassBasedComponent></FirstClassBasedComponent> */}
        {/* <ParentComponent/> */}
        {/* <XiaomiParent/> */}
        {/* <Parent></Parent> */}
        {/* <Company/> */}
        {/* <ChildrenParent/> */}
    </Fragment>
}

export default App