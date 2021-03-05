import FormsManager from "../Assets/portfolio/portfolio_formsmanager_mockup.png";
import Plugin from "../Assets/portfolio/portfolio_plugin_screen.png";
import SiteBuilder from "../Assets/portfolio/portfolio_sitebuilder_basic_mockup.png";

export const DesignData = {
    NFS: {
        name: 'Digital Forms Manager',
        portfolioImage: `${FormsManager}`,
        link: '/portfolio/design/formsmanager/',
        title: 'Digital Forms Manager',
        description: 'A web portal designed to manage digitalised forms and streamline application process.',
        tags: ['Experience Design', 'Visual Design']
    },
    Puma: {
        name: 'Plugin',
        portfolioImage: `${Plugin}`,
        link: '/portfolio/design/plugin/',
        title: 'Adobe Illustrator Plugin',
        description: 'A customised Adobe Illustrator plugin integrates with web based application for an improved digital design workflow.',
        tags: ['Experience Design', 'Visual Design']
    },
    Adobe: {
        name: 'AEM Microsite Builder',
        portfolioImage: `${SiteBuilder}`,
        link: '/portfolio/design/sitebuilder/',
        title: 'AEM Microsite Builder',
        description: 'A microsite builder prototype offering B2B solution with Adobe Experience Manager (content management system).',
        tags: ['Experience Design', 'Visual Design']
    },
};

export default DesignData;