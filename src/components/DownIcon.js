import React from 'react'
import { Link } from "react-scroll"
import '../CSS/Downicon.css'
const DownIcon = (props) => {
    return (
        <Link
            to={props.location}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
            isDynamic={false}
            ignoreCancelEvents={true}
        >
            <img className="scale" src={props.icon} alt="Scroll!"></img>
        </Link>
    )
}
export default DownIcon