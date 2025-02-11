interface TitleProps {
  children: string;
}
import React from "react";

const PageTitle = ({ children }: TitleProps) => {
  return <h1 className="title-text mb-4">{children}</h1>;
};

export default PageTitle;
