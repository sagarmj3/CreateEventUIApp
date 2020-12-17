import React from 'react';

export default class DownloadExcelComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="ui field">
                    <form>
                        <div className="ui field">
                            <label>Please download the excel sheet</label>
                        </div>
                        <button className="ui submit button">Download</button>
                    </form>
                </div>
            </div>
        );

    }
}