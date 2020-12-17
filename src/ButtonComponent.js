import React from 'react';

export default class ButtonComponent extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = (name) => {
            this.props.handleButtonClick(name);
        }
    }

    render(){

        return (
            <div>
                <div style={{marginTop: "30px"}}>
                    <div className="ui center aligned segment">
                    <button onClick={() => this.handleClick('first')} className="ui button">Create Event</button>
                    <button onClick={() => this.handleClick('second')} className="ui button">Mode Of Communication</button>
                    <button onClick={() => this.handleClick('third')} className="ui button">Create Message Template</button>
                    <button onClick={() => this.handleClick('fourth')} className="ui button">Send Message</button>
                    </div>

                </div>
            </div>
        );
    }

}