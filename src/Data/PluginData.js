import Banner from "../Assets/portfolio/portfolio_plugin_mockup_imac-pro.png";
import Process from "../Assets/portfolio/portfolio_plugin_process.png";
import Persona from "../Assets/portfolio/portfolio_puma_persona.png";
import FlowCompare from "../Assets/portfolio/portfolio_plugin_flow_before-after.png";
import FlowAfter from "../Assets/portfolio/portfolio_puma_user-flow_after.png";
import Wireframe from "../Assets/portfolio/portfolio_puma_wireframe_paper.png";
import Prototype from "../Assets/portfolio/portfolio_plugin_overflow.png";
import Anotation from "../Assets/portfolio/portfolio_plugin_annotation.png";

export const PluginData = {
    banner: {
        name: 'Hero Banner',
        title: 'Designing a new SiteBuilder Illustrator plugin for graphic designers at a multinational sports retailer.',
        intro: 'Design a custom SiteBuilder Illustrator plugin that integrates with content management system, which is a web based application. The integration will facilitate a creative workflow that does not need to step outside the SiteBuilder creative cloud software in order to search and manage assets, either locally or on the server.',
        img: `${Banner}`
    },
    summary: {
        logo: '',
        overview: 'The client asked us to design and build a software plugin, which will allow their design team to access digital assets without leaving their normal work applications, primarily the SiteBuilder Creative Cloud Illustrator. Their motivation is to enhance work experiences and increase productivity.',
        time: 'Aug 13 to Sep 27, 2018 (6 weeks)',
        tools: ['SiteBuilder XD', 'Overflow'],
        roles: ['UX Designer', 'Visual Designer'],
        teams: ['Technical team in Germany and Poland (client)', 'Developer and business analyst in Vancouver (internal)', 'Developer and project manager in London (internal)']
    },
    process: {
        name: 'UX process',
        src: `${Process}`,
        title: 'Collaborated with teams across Europe and North America to understand technical restraints and requirements.',
        description: 'To establish a mutual understanding of why this application is needed and for who, during the design process we worked within a cross-functional team in multiple time zones. Together we explored and challenged each other through discussing ideas, after several iterations we were able to export the designs for development and reviews.'
    },
    persona: {
        name: 'Persona',
        src: `${Persona}`,
        title: 'Helping graphic designers like Jamie to increase productivity and have a better work experiences.',
        description: 'We were introduced to the persona provided by client in the beginning of the project. This plugin will help graphic designers like Jamie to increase productivity, with its smooth integration between SiteBuilder Illustrator and internal’s CMS web application.'
    },
    flow: {
        name: 'User Flow',
        src: `${FlowCompare}`,
        title: 'To integrate current system with the plugin smoothly and create meaningful UI, we want to understand how does the main functions work.',
        description: 'Reviewed requirements scope with stakeholders to clarify flows, UX behaviour, and discussion of technical feasibility.'
    },
    wireframe: {
        name: 'Wireframe',
        src: `${Wireframe}`,
        title: 'Start with pen and paper to sketch wireframe and interactions.',
        description: 'After we have solid understanding of the user, and what they are doing using the current content management system. We started to sketch and use it to further validate our ideas.'
    },
    prototype: {
        name: 'Prototype',
        src: `${Prototype}`,
        title: 'After many iterations, it evolved from sketches to a high fidelity visual, with minimum styles to blend into the SiteBuilder interface.',
        description: 'I used SiteBuilder XD to create wireframes and interactive prototypes to communicate the flow with the team. To help developers build on the high fidelity wireframes, I exported 37 screens for them to inspect the designs.'
    },
    annotation: {
        name: 'Annotation',
        src: `${Anotation}`,
        title: 'This is a tool to allow designers to get their job done while remaining in SiteBuilder Illustrator.',
        description: ''
    },
    outcome: {
        title: 'No two projects are the same, we worked as a team with our clients to solve problems.',
        description: 'It was our first time to design and build an SiteBuilder Illustrator plugin. Although the concept was new to us, we started the project with an open mind and willingness to learn. It was our ability to take it on quickly and not be afraid of asking questions has impressed our client.',
        deliveries: ['An interactive prototype were created for demonstration.',
            '37 screens were designed and hand over to developers.',
            'Client were happy with the beta version and is available to test with users.'],
        lesson: 'If there were more time and budget for this project, I would involved the target audience earlier on in the project to map out user journey, rather than relying on the persona given by the client. By having access with real users will also help us in testing and validation.'
    }
};

export default PluginData;