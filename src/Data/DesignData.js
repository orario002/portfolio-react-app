import NFS from "../Assets/portfolio/portfolio_formhub_mockup.png";
import Puma from "../Assets/portfolio/portfolio_plugin_screen.png";
import Adobe from "../Assets/portfolio/portfolio_easysite_basic_mockup.png";

export const DesignData = {
    NFS: {
        name: 'Digital Forms Manager',
        portfolioImage: `${NFS}`,
        link: '/portfolio/design/nfs',
        title: 'Digital Forms Manager',
        description: 'A web portal designed to manage digitalised forms and streamline application process.',
        tags: ['Experience Design', 'Visual Design']
    },
    Puma: {
        name: 'Plugin',
        portfolioImage: `${Puma}`,
        link: '/portfolio/design/puma',
        title: 'SiteBuilder Illustrator Plugin',
        description: 'A customised SiteBuilder Illustrator plugin integrates with web based application for an improved digital design workflow.\n',
        tags: ['Experience Design', 'Visual Design']
    },
    Adobe: {
        name: 'AEM',
        portfolioImage: `${Adobe}`,
        link: '/portfolio/design/adobe',
        title: 'AEM Microsite Builder',
        description: 'A microsite builder prototype offering B2B solution with SiteBuilder Experience Manager (content management system).',
        tags: ['Experience Design', 'Visual Design']
    },
};

export default DesignData;