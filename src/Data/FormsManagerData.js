import Banner from "../Assets/portfolio/portfolio_formsmanager_screens.png";
import Process from "../Assets/portfolio/portfolio_formsmanager_process.png";
import Workshop from "../Assets/portfolio/portfolio_formsmanager_workshop.png";
import Research from "../Assets/portfolio/portfolio_formsmanager_analysis.png";
import Empathy from "../Assets/portfolio/portfolio_formsmanager_empathy-map.png";
import Journey from "../Assets/portfolio/portfolio_formsmanager_user-journey.png";
import Style from "../Assets/portfolio/portfolio_formsmanager_styleguide.png";
import Component from "../Assets/portfolio/portfolio_formsmanager_symbols.png";
import PaperWireframe from "../Assets/portfolio/portfolio_formsmanager_wireframe_mobile_table.png";
import WireframeFeatures from "../Assets/portfolio/portfolio_formsmanager_screens_feature_annotation.png";
import WireframeSteps from "../Assets/portfolio/portfolio_formsmanager_screens_annotation.png";

export const FormsManagerData = {
    banner: {
        name: 'Hero Banner',
        title: 'A web portal to manage digitalised forms and streamline insurance application process.',
        intro: 'We designed a web portal for enterprise and small businesses to manage form filling and approving process, using smart Adobe Experience Manager technology. To generate forms into PDFs and manage applications in the web portal we created. This is a minimum variable product for pitching to potential clients, who might be interest in customise this product with their brand.',
        img: `${Banner}`
    },
    summary: {
        overview: 'This is a minimum viable product designed to provide digital form transformation solutions. Our experiences in banking and insurance sectors, have introduced us a large amount of paper forms to digitalise in transformation and we would like this product to change customer experiences for our clients.',
        time: 'Jul 8 to Aug 23, 2019',
        tools: ['Sketch', 'Invision'],
        roles: ['Lead UX Designer', 'Visual Designer', 'Front-end Developer'],
        teams: ['Project manager, Software developer', 'Product manager', 'Technical lead', 'QA']
    },
    process: {
        name: 'UX process',
        src: `${Process}`,
        title: 'Led UX design with cross-functional teams in the design and development process, from validating concept to demonstrating product to executives.',
        description: 'We used discovery workshops to brainstorm high level vision of the product. To find out what the pain points might be, and who are the potential users, we conducted a competitive analysis. After presenting my findings to the team, we had more specific details about out potential users and what might they use it for. This information helped us to iterate user flows, wireframes, and interactive prototypes.'
    },
    discovery: {
        name: 'Workshop',
        src: `${Workshop}`,
        title: 'Bringing in a team of variety experiences, to brainstorm what it takes to build a minimum viable form portal product.',
        description: 'I facilitated workshops with the project team, including project manager, product manager, designer, and technical lead. We collaborated to identify high level product vision and initial requirements, using a combination of white boards, card sorting, and sticky notes. To build share understandings, we created user stories together in the workshops to focus on user needs. It helped us in discussions and iterating user flows and journeys later on.'
    },
    research: {
        name: 'Research',
        src: `${Research}`,
        title: 'After analysing user reviews from our competitors, we learnt users want less hassle to integrate the form manager that is user friendly.',
        description: 'From analysing competitors’ reviews, I learnt what ticks their boxes such as a form product being user friendly, affordable, and being able to customise conditional logic and integration. As well as what can be improved such as technical issues, varieties of styles themes, and easy to integrates with current systems. Our new product could aim to help users fulfil their goals among some common user cases, including event registration, internal forms for organisations or contact forms etc. according to our research. '
    },
    empathy: {
        name: 'Empathy Map',
        src: `${Empathy}`,
        title: 'Empathy maps help users like Chris to achieve their goals quickly create and manage applications. It allows them to focus on other important tasks they might have.',
        description: ''
    },
    journey: {
        name: 'User Journey',
        src: `${Journey}`,
        title: 'Demonstrated user flows with technical team and the stakeholders to ensure we share the same vision before the design phase.',
        description: 'After brainstorming sessions and research, I worked with the technical team to refine user flows by having discussions and challenging any gaps. There are two different roles: one as an admin user who creates and manages the application (for example Chris the sales executive from the empathy map); and a customer who completes the application by filling out and sign forms.'
    },
    paperWireframe: {
        name: 'Paper Wireframe',
        src: `${PaperWireframe}`,
        title: 'Collaborated wireframe reviews to iterate and clarify user journeys.',
        description: 'From the discovery workshops, we were able to escalate user flows to interface using paper wireframes. It allows us to quickly make any changes as soon as we spot any gaps in designs. We reviewed the wireframes and iterate changes, to ensure the journeys are as clear as we can. During this process I was able to remove any unnecessary steps, and getting feedback from other member who is less familiar with the project.'
    },
    wireframeFeatures: {
        name: 'Wireframe features with Notation',
        src: `${WireframeFeatures}`,
        title: 'Our goal is make creating applications clearer and simpler so our users can get on with other more important tasks.',
        description: 'We understand these administrational process can be rather dull for professionals like Chris. It is our goal to make their journey as easy as possible, and as painless as possible.'
    },
    wireframeSteps: {
        name: 'Wireframe steps with Notation',
        src: `${WireframeSteps}`,
    },
    style: {
        name: 'Style Guide',
        src: `${Style}`,
        title: 'Display status of elements when interaction happens.',
        description: 'Having a centralised approach for common elements such as button, input field that showcases how different status in visual design. It does not just help my design process also can help communication with front-end development and reduce confusion.'

    },
    component: {
        name: 'Component',
        src: `${Component}`,
        title: 'I structure my visual designs in Sketch, suggesting how it can be built into components in the development phase.',
    },
    outcome: {
        title: 'Interaction in this application is the most challenging areas, we spent a lot of time refine the user flows.',
        description: 'Taking in part of both design and development process, helped me to understand the technical constraints and was able to immediate communicate interactions with technical team. It helped me to fill the gaps in my designs.',
        deliveries: ['70 screens were designed in Sketch and exported to Invision for development.',
                'Minimum viable product were built with the development team.',
                'Demonstrated to executives and other teams in both London and Vancouver offices.'],
        lesson: 'We learned validation with users are the keys to clarify user flows and finding gap in designs. With limitation of time and budget, we were able to use resources within the company to smoke test and help us moving forward. Next time, I hope we\'ll have opportunities to invest more time and effort in usability testing as well as user interviews.'
    }
};

export default FormsManagerData;