import Camelot from "../Assets/portfolio/portfolio_dev_ipl_screen.png";
import HSBC from "../Assets/portfolio/portfolio_dev_hsbc_logo.svg";
import Ensemble from "../Assets/portfolio/portfolio_dev_ensemble_screen.png";

export const DevData = {
    Camelot: {
        name: 'Camelot',
        portfolioImage: `${Camelot}`,
        title: 'Irish Premium Lottery & Illinois Lottery',
        description: 'Agile software development with Adobe running in sprints.',
        tags: ['Front-end Development', 'Adobe Experience Manager (content management system)'],
    },
    HSBC: {
        name: 'HSBC',
        portfolioImage: `${HSBC}`,
        title: 'HSBC Digital Forms Portal ',
        description: 'Digitalised form management portal for internal staff.',
        tags: ['Front-end Development', 'React.js', 'Adobe Experience Manager (content management system)']
    },
    Ensemble: {
        name: 'Ensemble',
        portfolioImage: `${Ensemble}`,
        title: 'Ensemble UK Website',
        description: 'Redesigned and developed company website with remote team in Vancouver.',
        tags: ['Front-end Development', 'Angular.js', 'Adobe Experience Manager (content management system)']
    },
};

export default DevData;