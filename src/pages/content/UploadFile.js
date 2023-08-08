import React, { useState } from "react";
import axios from "axios";
import excel from "../../assets/excel.png";

function UploadFile() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const [selectedFileName1, setSelectedFileName1] = useState(
    "Select an Excel File"
  );
  const [selectedFileName2, setSelectedFileName2] = useState(
    "Select an Excel File"
  );
  const [selectedFileName3, setSelectedFileName3] = useState(
    "Select an Excel File"
  );
  const [selectedFileName4, setSelectedFileName4] = useState(
    "Select an Excel File"
  );

  const handleFile1Change = (event) => {
    const selectedFile = event.target.files[0];
    setFile1(selectedFile);
    setSelectedFileName1(
      selectedFile ? selectedFile.name : "Select an Excel File"
    );
  };

  const handleFile2Change = (event) => {
    const selectedFile = event.target.files[0];
    setFile2(selectedFile);
    setSelectedFileName2(
      selectedFile ? selectedFile.name : "Select an Excel File"
    );
  };

  const handleFile3Change = (event) => {
    const selectedFile = event.target.files[0];
    setFile3(selectedFile);
    setSelectedFileName3(
      selectedFile ? selectedFile.name : "Select an Excel File"
    );
  };

  const handleFile4Change = (event) => {
    const selectedFile = event.target.files[0];
    setFile4(selectedFile);
    setSelectedFileName4(
      selectedFile ? selectedFile.name : "Select an Excel File"
    );
  };

  // Rest of the code remains the same...
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, fileHandler) => {
    event.preventDefault();
    const droppedFile =
      event.dataTransfer?.files[0] || event.target?.files?.[0];
    if (droppedFile) {
      fileHandler(droppedFile);
    }
  };

  const handleUpload = () => {
    if (file1 && file2 && file3 && file4) {
      const formData = new FormData();
      formData.append("File1", file1);
      formData.append("File2", file2);
      formData.append("File3", file3);
      formData.append("File4", file4);

      axios
        .post("http://dineyog-env-1.eba-47rmdqhp.eu-north-1.elasticbeanstalk.com/upload", formData)
        .then((response) => {
          console.log(response.data);
          window.alert("File uploaded successfully!");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      window.alert("Please upload both files");
    }
  };

  return (
    <>
      <div className="containerz">
        <div
          className="drop-area"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, handleFile1Change)}
        >
          <p>Upload Profit_data.csv:</p>
          <label className="custom-file-label">
            <img
              className="file-input-image"
              src={excel}
              alt="logo-excel"
              onClick={() => document.getElementById("file-input1").click()}
            />
            <input
              id="file-input1"
              className="hidden-file-input"
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFile1Change}
            />
            <p className="selected-file-name">{selectedFileName1}</p>
          </label>
        </div>

        <div
          className="drop-area"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, handleFile2Change)}
        >
          <p>Upload sales_data.csv:</p>
          <label className="custom-file-label">
            <img
              className="file-input-image"
              src={excel}
              alt="logo-excel"
              onClick={() => document.getElementById("file-input2").click()}
            />
            <input
              id="file-input2"
              className="hidden-file-input"
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFile2Change}
            />
            <p className="selected-file-name">{selectedFileName2}</p>
          </label>
        </div>

        <div
          className="drop-area"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, handleFile3Change)}
        >
          <p>Upload Item_wise_daily_ts1.csv:</p>
          <label className="custom-file-label">
            <img
              className="file-input-image"
              src={excel}
              alt="logo-excel"
              onClick={() => document.getElementById("file-input3").click()}
            />
            <input
              id="file-input3"
              className="hidden-file-input"
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFile3Change}
            />
            <p className="selected-file-name">{selectedFileName3}</p>
          </label>
        </div>

        <div
          className="drop-area"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, handleFile4Change)}
        >
          <p>Upload Item_Wise_Report_with_CustomerOrder_Info1.xlsx:</p>
          <label className="custom-file-label">
            <img
              className="file-input-image"
              src={excel}
              alt="logo-excel"
              onClick={() => document.getElementById("file-input4").click()}
            />
            <input
              id="file-input4"
              className="hidden-file-input"
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFile4Change}
            />
            <p className="selected-file-name">{selectedFileName4}</p>
          </label>
        </div>
      </div>
      <div className="container-btn">
        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </>
  );
}

export default UploadFile;
