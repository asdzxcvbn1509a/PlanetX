import Duck from "../assets/Services/TreeD/Duck.webp";
import Pudding from "../assets/Services/TreeD/Pudding.webp";
import Base from "../assets/Services/TreeD/Base.webm";

const ThreeDData = [
  {
    type: "image",
    src: Duck,
    alt: "Duck",
    style: "minimal",
    purpose: "personalArt",
    period: "threeDay",
  },
  {
    type: "image",
    src: Pudding,
    alt: "Pudding",
    style: "minimal",
    purpose: "promotion",
    period: "threeDay",
  },
  {
    type: "video",
    src: Base,
    alt: "Base",
    style: "minimal",
    purpose: "promotion",
    period: "oneWeek",
  },
];

export default ThreeDData;
