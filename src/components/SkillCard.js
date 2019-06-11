import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import '../CSS/SkillCard.css'
class SkillCard extends Component {
    render() {
        const { skill } = this.props
        return (
            <Card border={skill.content.border} style={{ borderWidth: "5px" }}>
                <Card.Body >
                    <Card.Img src={skill.content.image} style={{ width: '5rem', paddingBottom: 30 }} />
                    <Card.Title className="CardTitle"> {skill.content.title} </Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
export default SkillCard