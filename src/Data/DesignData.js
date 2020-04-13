import NFS from "../Assets/portfolio/portfolio_nfs_create-application_min.png";
import Puma from "../Assets/portfolio/portfolio_puma_in-progress.png";
import Adobe from "../Assets/portfolio/portfolio_adobe-b2b_generator_basic-info.png";

export const DesignData = {
    NFS: {
        name: 'Digital Forms Solution',
        portfolioImage: `${NFS}`,
        link: '/portfolio/design/nfs',
        title: 'Digital Forms Solution',
        description: 'A web portal designed to manage digitalised forms and streamline insurance and banking application process.',
        tags: ['Experience Design', 'Visual Design']
    },
    Puma: {
        name: 'Plugin',
        portfolioImage: `${Puma}`,
        link: '/portfolio/design/puma',
        title: 'Adobe Illustrator Plugin',
        description: 'A customised Adobe Illustrator plugin integrates with web based application for an improved digital design workflow.\n',
        tags: ['Experience Design', 'Visual Design']
    },
    Adobe: {
        name: 'AEM',
        portfolioImage: `${Adobe}`,
        link: '/portfolio/design/adobe',
        title: 'AEM Microsite Builder',
        description: 'A microsite builder prototype offering B2B solution with Adobe Experience Manager (content management system)',
        tags: ['Experience Design', 'Visual Design']
    },
};

export default DesignData;