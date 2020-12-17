import React from 'react';
import CreateEventComponent from './Components/CreateEventComponent';
import CreateMessageTempComponent from './Components/CreateMessageTempComponent';
import ModeOfCompComponent from './Components/ModeOfCompComponent';
import SendMessageComponent from './Components/SendMessageComponent';

const ViewComponent = (props) => {

    const {showPage} = props;
    const handleShowComponent = (showPage) => {
        switch(showPage){
            case 'first' :
                return  <CreateEventComponent/>
            case 'second' :
                return  <ModeOfCompComponent/>
            case 'third' :
                return  <CreateMessageTempComponent/>
            case 'fourth' :
                return  <SendMessageComponent/>
            default :
                return  <CreateEventComponent />
        }
    }
        return (
            <div>
                <div style={{marginTop: "30px"}}>
                    <div className="ui segment">
                        {handleShowComponent(showPage)}
                    </div>
                </div>
            </div>
        );

}

export default ViewComponent;