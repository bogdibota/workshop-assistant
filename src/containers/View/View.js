import React, {Component} from 'react';

import {FileTree} from '../../components/FileTree/FileTree';
import {FileViewer} from '../../components/FileViewer/FileViewer';

import './View.css';

export class View extends Component {
    render() {
        const {selectedFile} = this.props.location.query;
        return (
            <div className="container">
                <FileTree selectedFile={selectedFile}/>
                <FileViewer selectedFile={selectedFile}/>
            </div>
        );
    }
}
