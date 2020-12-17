import React from 'react';

export default class CreateEventComponent extends React.Component {

    render(){


        return(
            <div>
                <div className="ui form">
                    <form>
                        <div className="ui field">
                            <label>Create Event</label>
                                <input type="text" placeholder="Enter Event Name..." />
                        </div>

                        <button className="ui submit button">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}