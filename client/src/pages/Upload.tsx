import React from "react";
import FileUpload from "../components/FileUpload";
import PageTitle from "../components/PageTitle";

const Upload = () => {
  return (
    <>
      <title>Web Portal - Upload Project</title>
      <PageTitle>Upload Your Project Below!</PageTitle>

      <FileUpload />
    </>
  );
};

export default Upload;
