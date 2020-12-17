import React from 'react';
import ButtonComponent from './ButtonComponent';
import ViewComponent from './ViewComponent';

export default class App extends React.Component {

    constructor(){
        super();

        this.state = {
            showPage: 'first'
        }

        this.handleButtonClick = (e) => {
            this.setState({showPage: e});
        }
        
    }
    render(){
        return (
            <div>
                <div className="ui container style-container">
                    <ButtonComponent
                        handleButtonClick={(e) => {this.handleButtonClick(e)}}
                    />    
                    </div>
                <div className="ui container style-container">
                    <ViewComponent
                        showPage={this.state.showPage}/>
                </div>

            </div>
        );
    }

}
