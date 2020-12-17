import React from 'react';

export default class ModeOfCompComponent extends React.Component {

    render(){


        return(
            <div>
                <div className="ui form">
                    <form>
                        <div className="grouped fields">
                            <label>Please select mode of communication?</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2"/>
                                    <label>WhatsApp Message</label>
                                </div><br/>
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label>Short Message Service</label>
                                </div><br/>
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label>Electornic Mail</label>
                                </div><br/>
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label>To the Address</label>
                                </div>
                            </div>
                            <button className="ui submit button">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}