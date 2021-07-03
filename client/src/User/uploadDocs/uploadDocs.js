import React, { Component } from 'react';
import FileBase from 'react-file-base64';

import DefaultImg from './defaultImage.png';
import './uploadDocs.css';

let document = undefined;
class DocumentUpload extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      baseDoc: DefaultImg,
      docObj: {
        docName: null,
        docData:null,
        docStatus:null    
    }
  }
  }
  setDefaultImage(uploadType) {
      this.setState({
        baseDoc: DefaultImg
      });
  }

  uploadDocument(e, method) {
    let docObj = {};
  }

  getBaseFile(files) {
    
    this.setState({
        baseDoc: files.base64
    });

    this.setState({docObj:{
        docName: "base-document-" + Date.now(),
        docData: files.base64.toString(),
        docStatus: "Pending"
    }
      });
    document = this.state.docObj;  
    
  }

  render() {
    return (
      <React.Fragment>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="undefined" crossorigin="anonymous"></script>
        <div>
          <div>
            <h5 className="process__heading">Document Upload</h5>
            <small class="form-text text-muted">Researchers/Workshop Presenters need to upload the document.</small><br />
            <div>
              <FileBase type="file" multiple={false} onDone={this.getBaseFile.bind(this)} />
            </div><br />
            <iframe src={this.state.baseDoc} alt="upload-document" className="process__image" width="100%" height="350" scrolling="no" frameBorder="0" allowFullScreen/>
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export { document };

export default DocumentUpload;