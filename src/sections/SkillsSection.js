import React, { Component } from 'react'
import "../CSS/Downicon.css"
import '../CSS/skillSection.css'
import Data from "../Data.json";
//-------- imported Component
import { CardDeck } from 'react-bootstrap';
import FullPage from "../components/FullPage"
import SnowFall from '../components/SnowFall';
import SkillCard from "../components/SkillCard";
import DownIcon from "../components/DownIcon";
class SkillsSection extends Component {
  render() {
    return (
      <div>
        <FullPage className="third">
          <SnowFall />
          <h1 style={{ paddingBottom: 100 }} className="SectionTitle"> {Data.section[2].title} </h1>
          <CardDeck style={{ maxInlineSize: 1000, alignContent: "right" }} >
            {Data.section[2].items.map(eachItem => {
              return (
                <SkillCard skill={eachItem} />
              )
            })}
          </CardDeck>
        </FullPage>
        <div className="Downicon">
          <DownIcon icon={Data.topIcon.icon} location={Data.section[0].Location} />
        </div>
      </div>
    )
  }
}
export default SkillsSection