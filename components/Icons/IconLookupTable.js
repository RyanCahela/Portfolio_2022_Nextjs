import NodeSVG from "./NodeSVG";
import ReactSVG from "./ReactSVG";
import TailwindSVG from "./TailwindSVG";
import StyledComponentsSVG from "./StyledComponentsSVG";

const iconLookupTable = {
  node: <NodeSVG />,
  react: <ReactSVG />,
  styledComponents: <StyledComponentsSVG />,
  tailwindCSS: <TailwindSVG />
};

export default iconLookupTable;
