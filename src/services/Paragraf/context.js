import React from "react";

const ParagrafContext = React.createContext(null);

export const withParagraf = (Component) => (props) => (
  <ParagrafContext.Consumer>
    {(paragraf) => <Component {...props} paragraf={paragraf} />}
  </ParagrafContext.Consumer>
);

export default ParagrafContext;
