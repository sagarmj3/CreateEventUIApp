import React from 'react';
import DownloadExcelComponent from './DownloadExcelComponent';
import UploadExcelComponent from './UploadExcelComponent';

export default class CreateMessageTempComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="ui form">
                    <form>
                        <div className="ui field">
                            <label>Create Message Template</label>
                                <input type="text" placeholder="Start typing..." />
                        </div>

                        <button className="ui submit button">Save</button>
                    </form>
                    <br/>

                    <DownloadExcelComponent/>

                    <br/>

                    <UploadExcelComponent/>
                </div>
            </div>
        );

    }
}