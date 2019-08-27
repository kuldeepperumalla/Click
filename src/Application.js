import React, {Component} from 'react';
import HighScore from './HighScore';
import './Css/Style.css';
class Application extends Component {

    constructor(props){
        super(props);

            this.state = {
                count : 0
            }
    }

    handleClick = () => {

        this.setState({count: this.state.count + 1})
        //console.log('clicked');

    }

    componentDidUpdate(props, state){
        if(this.state.count > 10 && this.state.count != state.count){
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        console.log("event is", e)
        this.setState({
            count: 0,
            overTen: false
        });
    }

    render(){
        let {count} = this.state;
        return (
            <div>
        <h1>You clicked the button {count} times.</h1>
        
            <HighScore
            overTen = {this.state.overTen}
            onReset = {this.resetCount}
            /> 
        

        {
            /*
            High score
            {
            (this.state.overTen) ? 
            <h3>High Score is {this.state.count}!</h3>  :  null 
        } */
        }
        <span>
            <button onClick = {(e) => this.handleClick()} > Click Me </button> 

        </span>
            </div>
        );
    }
}

export default Application;