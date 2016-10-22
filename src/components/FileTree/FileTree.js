import React, {Component} from 'react';
import './FileTree.css';

export class FileTree extends Component {
    render() {
        const {selectedFile} = this.props;
        return (
            <div className="file-tree">
                file tree

                file = {selectedFile}
            </div>
        );
    }
}