import Profile from "../Assets/images/about_profile.jpeg";
import Journey from "../Assets/images/about_journey.png";
import Resume from "../Assets/pdf/cv_sandy_chiu_2022.pdf";
import Thesis from "../Assets/pdf/thesis_exploring_blockchain_technology_and_recycling_futures_through_speculative_design.pdf";

export const AboutData = {
    profile: {
        title: "Profile Picture",
        myImage: `${Profile}`,
        myJourney: `${Journey}`,
        myResume:`${Resume}`,
        myThesis:`${Thesis}`
    },
    intro: {
        paragraph: 'I am a generalist digital designer specialising in experience design and visual design, I am also hands on and I enjoy building things with my front-end skills. Often working in content management system, I focus on reusable UI elements and modularised design.',
    },
    experience: {
        paragraph: 'Experienced as both a front-end developer and product designer has helped me communicate with engineers and work well in a cross-functional team. Throughout my career, I enjoy discovery of the unknown, I am patient and I take time to figure out the source of a problem.'
    },
    fulfillment: {
        paragraph: 'I find fulfilment at work through creating and learning. Empathy is my drive to learn more about people, and what technology can do for them.'
    }
};

export default AboutData;