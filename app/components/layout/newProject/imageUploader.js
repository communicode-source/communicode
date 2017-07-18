import React from 'react';
import styles from './../../../assets/css/pages/createProject.scss';

class ImageUpload extends React.Component {
    constructor() {
        super();
        this.state = {file: '', imagePreviewUrl: ''};
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleImageChange(e) {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className={styles.cover} src={imagePreviewUrl} />);
        }
        else {
            $imagePreview = (<div>Please select an Image for Preview</div>);
        }

        return (
            <div className={styles.question}>
                <h4>Cover Photo:</h4>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <label className={styles.fileUploaderLabel} htmlFor="file">Choose a file
                        <input
                            id="file"
                            name="file"
                            type="file"
                            onChange={(e)=>this._handleImageChange(e)}
                            className={styles.fileUploadInput}
                        />
                    </label>
                </form>
                <div>
                    {$imagePreview}
                </div>
                {imagePreviewUrl !== '' && <button onClick={this._handleSubmit.bind(this)}>Upload Image</button>}
            </div>
        );
    }
}

export default ImageUpload;
