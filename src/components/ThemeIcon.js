import React, { Component } from 'react'
import '../CSS/NavigationBar.css'
import '../CSS/Themes.css'
import data from '../Data.json'
class ThemeIcon extends Component {
    constructor() {
        super()
        this.state = {
            first: 0,
            second: 0,
            third: 0
        }
    }
    generateNumber = () => {
        return Math.floor(Math.random() * (7 - 1) + 1)
    }
    changeColor = () => {

        let rand1 = this.generateNumber();
        let rand2 = this.state.second;
        let rand3 = this.state.third;

        let firstSection = document.getElementsByClassName('first');
        let secondSection = document.getElementsByClassName("second");
        let thirdSection = document.getElementsByClassName("third");

        while (rand1 === this.state.first) rand1 = this.generateNumber();
        if (firstSection[0].classList.contains(`theme${this.state.first}`)) {
            firstSection[0].classList.replace(`theme${this.state.first}`, `theme${rand1}`);
        } else {
            firstSection[0].classList.add(`theme${rand1}`)
        }

        while (rand2 === rand1 || rand2 === rand3 || rand2 === this.state.second) { rand2 = this.generateNumber(); }
        if (secondSection[0].classList.contains(`theme${this.state.second}`)) {
            secondSection[0].classList.replace(`theme${this.state.second}`, `theme${rand2}`);
        }
        else {
            secondSection[0].classList.add(`theme${rand2}`)
        }

        rand3 = this.generateNumber();
        while (rand3 === rand1 || rand3 === rand2 || rand3 === this.state.third) { rand3 = this.generateNumber(); }
        if (thirdSection[0].classList.contains(`theme${this.state.third}`)) {
            thirdSection[0].classList.replace(`theme${this.state.third}`, `theme${rand3}`);
        }
        else { thirdSection[0].classList.add(`theme${rand3}`) }

        this.setState({
            first: rand1,
            second: rand2,
            third: rand3
        })
    }

    render() {
        return (
            <a onClick={() => { this.changeColor() }}><img src={data.themeIcon.icon} alt="Change-Theme" /></a>
        )
    }



}
export default ThemeIcon