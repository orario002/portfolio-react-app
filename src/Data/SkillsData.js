import Browser from "../Assets/icon/icon_browser.png";
import Colour from "../Assets/icon/icon_colour.png";
import Devices from "../Assets/icon/icon_devices.png";
import Diagram from "../Assets/icon/icon_diagram.png";

export const SkillsData = {
    UserFlow: {
        title: "User flows",
        icon: `${Diagram}`,
        content: "Understand users and their motivations to design the flow that helps them achieve their goals.",
    },
    Wireframes: {
        title: "Wireframes",
        icon: `${Browser}`,
        content: "I usually start with paper wireframes, then move on to low fidelity wireframes on the computer using software such as Sketch or Adobe XD.",
    },
    Prototyping: {
        title: "Prototyping",
        icon: `${Devices}`,
        content: "Interaction designs with either design software or functional front-end prototypes. I am currently learning about Framer.",
    },
    DesignSystem: {
        title: "Design system",
        icon: `${Colour}`,
        content: "Including style guide for typography, iconography, colour palette, UI elements, and component patterns.",
    }
};

export default SkillsData;