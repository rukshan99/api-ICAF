const DOWNLOADS_API_ENDPOINT = 'http://localhost:4000/api/v1/users/downloads';

const DownloadEndpoints = {
    TemplateResearchPaper: `${DOWNLOADS_API_ENDPOINT}/template-research-paper`,
    TemplateWorkshopProposal: `${DOWNLOADS_API_ENDPOINT}/template-workshop-proposal`,
    SampleResearchPaper: `${DOWNLOADS_API_ENDPOINT}/sample-research-paper`,
    SampleWorkshopProposal: `${DOWNLOADS_API_ENDPOINT}/sample-workshop-proposal`,
};

export default DownloadEndpoints;