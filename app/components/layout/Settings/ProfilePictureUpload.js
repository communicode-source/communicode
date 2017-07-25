import React from 'react';
import { PropTypes } from 'prop-types';

import Dropzone from 'react-dropzone';

class ProfilePictureUpload extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.styles = {
            height: '100%',
            width: '100%',
            border: '2px dashed #333',
            padding: '20px'
        };
    }

    onImageDrop(files) {
        this.props.onClickProfileUpload(files[0]);
    }

    render() {
        return (
            <Dropzone
              multiple={false}
              accept="image/*"
              style={this.styles}
              onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
        );
    }
}

ProfilePictureUpload.propTypes = {
    user: PropTypes.object,
    error: PropTypes.string,
    file: PropTypes.object,
    onClickProfileUpload: PropTypes.func
};

export default ProfilePictureUpload;
