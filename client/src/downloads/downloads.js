import React from 'react';

import DownloadEndPoints from '../services/document-download-service';
import Card from '../Shared/UIElements/Card';
import './downloads.css';
const Downloads = () => {
    return(
        <React.Fragment>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Card className="downloadcard">
                            <img src="https://ceuoutlet.com/wp-content/themes/ceuoutlet/img/process-2.png" class="rounded mx-auto d-block img-circle" alt="..." />
                            <br />
                            <h5>Reseach Paper Template</h5>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <a type="button" href={DownloadEndPoints.TemplateResearchPaper}className="btn btn-success">Download</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div class="col">
                        <Card className="downloadcard">
                            <img src="https://cdn.iconscout.com/icon/free/png-128/document-970-453728.png" class="rounded mx-auto d-block img-circle" alt="..." />
                            <br />
                            <h5>Reseach Paper Sample</h5>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <a type="button" href={DownloadEndPoints.SampleResearchPaper} className="btn btn-info">Download</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Card className="downloadcard">
                            <img src="https://ceuoutlet.com/wp-content/themes/ceuoutlet/img/process-2.png" class="rounded mx-auto d-block img-circle" alt="..." />
                            <br />
                            <h5>Workshop Proposal Template</h5>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <a type="button" href={DownloadEndPoints.TemplateWorkshopProposal} className="btn btn-success">Download</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div class="col">
                        <Card className="downloadcard">
                            <img src="https://cdn.iconscout.com/icon/free/png-128/document-970-453728.png" class="rounded mx-auto d-block img-circle" alt="..." />
                            <br />
                            <h5>Workshop Proposal Sample</h5>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <a type="button" href={DownloadEndPoints.SampleWorkshopProposal} className="btn btn-info">Download</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            </React.Fragment>
    );
}

export default Downloads;