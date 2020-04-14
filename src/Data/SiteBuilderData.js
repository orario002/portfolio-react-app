import Banner from "../Assets/portfolio/portfolio_sitebuilder_mockup_mac.png";
import Process from "../Assets/portfolio/portfolio_sitebuilder_process.png";
import Interview from "../Assets/portfolio/portfolio_sitebuilder_interview.png";
import User from "../Assets/portfolio/portfolio_sitebuilder_user-story.png";
import Flow from "../Assets/portfolio/portfolio_sitebuilder_userflow_notation.png";
import Wireframe from "../Assets/portfolio/portfolio_sitebuilder_form_paper_wireframe.png";
import Annotation from "../Assets/portfolio/portfolio_sitebuilder_wireframe_notation.png";
import Theme from "../Assets/portfolio/portfolio_sitebuilder_theme.png";
import Screens from "../Assets/portfolio/portfolio_sitebuilder_screens.png";

export const SiteBuilderData = {
    banner: {
        name: 'Hero Banner',
        title: 'A microsite builder prototype offering B2B solution with Adobe Experience Manager, to create simple webpages effortlessly.',
        intro: 'Designed for our partner to demonstrate how businesses can utilise Adobe Experience Manager’s smart technology to quickly build microsites. Without technical knowledge, anyone from organisation can simply fill out a form to generate basic webpages using default templates.',
        img: `${Banner}`
    },
    summary: {
        overview: 'Client work with request to design a prototype for businesses, to fill a form that generates basic web pages without technical knowledge. With the abilities to implement with their own customised theme and brand.',
        time: 'Mar 4 to Mar 22, 2019 (3 weeks)',
        tools: ['Adobe XD', 'Zeplin'],
        roles: ['UX Designer', 'Visual Designer'],
        teams: ['Software Developer', 'Project Manager']
    },
    process: {
        name: 'UX process',
        src: `${Process}`,
        title: 'I was the solo UX designer on this 3 week project covered user user flow, wire-framing and prototyping.',
        description: ''
    },
    interview: {
        name: 'Stakeholder Interview',
        src: `${Interview}`,
        title: 'After interviewing with stakeholders we got to understand the the context of the project.',
        description: ''
    },
    user: {
        name: 'User Story',
        src: `${User}`,
        title: '3 B2B client personas emerged from the initial research.',
        description: 'Our client presented us with user stories we later used to produce user flows and iterate the designs. From small to large scale of businesses, they would require different level of complexity to produce a microsite for their brand and products. We identified the major difference will be either it is a small business or a larger business, depends on how many equipments they have.'
    },
    flow: {
        name: 'User Flow',
        src: `${Flow}`,
        title: 'Select business type to generate microsite depends on its complexity.',
        description: 'Through discussions with the technical team and the stakeholders, we came to agreement of two main user flows. A user will choose which business types they have when fill out the information, it then automatically generate either simpler or more complicated webpages using default microsite templates.'
    },
    wireframe: {
        name: 'Paper Wireframe',
        src: `${Wireframe}`,
        title: 'Use forms to collect basic company information, save data and inject to webpage templates.',
        description: 'I collaborated with the cross-functional team between London and North America, to identify key user flows and evolve the prototype with various design iterations. Started with wireframing on pen and paper because it is quick and flexible for putting ideas together.'
    },
    annotation: {
        name: 'Annotation',
        src: `${Annotation}`,
        title: 'Designing sections in bite size to make the process of filling out a form as easy as possible.',
        description: 'Because our target users are not technically trained, we want the builder to be as simple and straightforward as possible. Visually we ensure to use clear language, and align text to the left so it is easier to read. It divided into sections general, product, services, and finally allowing them to preview before the pages are created.'

    },
    theme: {
        name: 'Theme',
        src: `${Theme}`,
        title: 'I structure my visual designs in Sketch, suggesting how it can be built into components in the development phase.Defined design style guide and UI elements to maintain consistency in theme.',
        description: 'We chose a neutral green colour theme to speak to the target audience in the agriculture industry, it complements with the shades of grey so it’s easier on the eyes. A style guide with colour palette, typography and UI elements are created and shared among the team, developers then can utilise this information to advance front-end development. I also ensure the design files are modularised in symbol they can later develop as components.'
    },
    screens: {
        name: 'Screens',
        src: `${Screens}`
    },
    outcome: {
        title: 'Successfully tell product stories through prototyping.',
        description: 'We were asked to make prototype within Adobe Experience Manager platform, developing using out-of-box component. As a designer, I have to be aware of this constraint and make sure the design fit in the category. This has helped reduce customisation and limit the time our developer spends to create this prototype.',
        deliveries: ['High fidelity wireframes of microsite builder were developed into Interactive prototype.\n',
            'Because the designs were based on out-of-box components in Adobe Experience Manager, the developers can build the components more efficiently.',
            'Exported designs from Adobe XD to Zeplin for front-end developers to view specifications.'],
        lesson: 'Before we can deliver clear messages through the prototype, we needed to speak to the stakeholders and understand the context of the project. It helps us to understand what matters to them. As a prototype we wanted to campaign product value whilst tell a good story to help potential client imagine using it.'
    }
};

export default SiteBuilderData;