import React, { Component } from 'react'
import { Link } from "react-scroll"
import Data from "../Data.json"
import "../CSS/NavigationBar.css"
import ThemeIcon from './ThemeIcon';
import '../CSS/Themes.css'

class NavigationBar extends Component {

    render() {
        return (
            <div className="navbar">
                {Data.section.map(eachSection => {
                    return (
                        <a href="" style={{ paddingRight: 20 }}>
                            <Link
                                to={eachSection.Location}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                duration={1000}
                                isDynamic={false}
                                ignoreCancelEvents={true}
                            >
                                {eachSection.title}
                            </Link> </a>
                    )
                })}
                <div ><ThemeIcon /></div>
            </div>

        )
    }
}
export default NavigationBar