import React from "react";

const h1Classes = `
  font-serif
  font-bold
  text-4xl
  -tracking-[0.36px]

  lg:text-5xl
  lg:-tracking-[0.45px]
`;

const Title1 = ({ children }) => {
  return <h1 className={h1Classes}>{children}</h1>;
};

export default Title1;
