import Dribbble from "../Assets/images/photo_dribbble_female.jpg" ;
import Photography from "../Assets/images/photo_poundshop_19780017.jpg";
import Code from "../Assets/images/photo_code.png";

export const InterestsData = {
    Illustration: {
        title: "Illustration",
        image: `${Dribbble}`,
        content: "Drawing either on paper or on software such as Illustrator is always a good fun. I would also like to learn animation.",
    },
    Photography: {
        title: "Photography",
        image: `${Photography}`,
        content: "I enjoy taking photographs on film camera or DSLR, I am still learning about how to compose a good picture.",
    },
    Coding: {
        title: "Coding",
        image: `${Code}`,
        content: "Learning how to code has given me freedom to build my own designs. I am currently learning reactJS, it also comes in handy when prototyping.",
    }
};

export default InterestsData;