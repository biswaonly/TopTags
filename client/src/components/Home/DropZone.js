import React, { Component } from "react";
import { Upload, Icon, message } from "antd";

const Dragger = Upload.Dragger;

const props = {
  accept: "image/*",
  name: "file",
  multiple: true,
  action: "https://imgur.com/upload",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class DropZone extends Component {
  render() {
    return (
      <div className="clearfix">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="upload" />{" "}
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div>
    );
  }
}

export default DropZone;
