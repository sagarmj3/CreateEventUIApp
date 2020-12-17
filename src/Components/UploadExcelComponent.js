import React from 'react';

export default class UploadExcelComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="ui field">
                    <form>
                        <div className="ui field">
                            <label>Please upload the excel sheet</label>
                        </div>
                        <button className="ui submit button">Upload</button>
                    </form>
                </div>
            </div>
        );

    }
}