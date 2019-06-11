import React, { Component } from 'react'
import "../CSS/Downicon.css"
import "../CSS/TitleSection.css"
import data from "../Data.json";
import FullPage from "../components/FullPage"
import { SocialIcon } from 'react-social-icons';
import SnowFall from '../components/SnowFall';
import DownIcon from '../components/DownIcon';
class TitleAndIons extends Component {

    render() {
        return (
            <div>
                <FullPage className="first" >
                    <SnowFall />
                    <h1 className="title" style={{ lineHeight: "1" }}> {data.section[0].mainTitle} </h1>
                    <h2 className="content" style={{ lineHeight: "5" }}>{data.section[0].subTitle}</h2>
                    <div>{
                        Object.keys(data.section[0].links).map(key => {
                            return (<span style={{ padding: 8 }} >
                                <SocialIcon url={data.section[0].links[key]} />
                            </span>)
                        })
                    }
                    </div>
                </FullPage>
                <div className="Downicon">
                    <DownIcon icon={data.downIcon.icon} location={data.section[1].Location} />
                </div>
            </div>
        )
    }
}
export default TitleAndIons