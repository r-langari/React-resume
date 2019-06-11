import React, { Component } from 'react'
import "../CSS/Downicon.css"
import "../CSS/AboutSection.css"
import data from "../Data.json";
import FullPage from "../components/FullPage"
import SnowFall from '../components/SnowFall';
import DownIcon from "../components/DownIcon";
class AboutSection extends Component {
    render() {
        return (
            <div>
                <FullPage className="second">
                    <SnowFall />
                    <h1 className="AboutTitle">  {data.section[1].title}</h1>
                    <h4 className="Aboutcontent" dangerouslySetInnerHTML={{ __html: data.section[1].items[0].content }} />
                </FullPage>
                <div className="Downicon">
                    <DownIcon icon={data.downIcon.icon} location={data.section[2].Location} />
                </div>
            </div>
        )
    }
}
export default AboutSection