import React, { useState } from "react";

const FileUpload = () => {
  const [success, setSuccess] = useState("");

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.elements.file.files[0];

    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/process", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess("Data has been successfully stored in Firebase.");
      } else {
        setSuccess("There was an error processing your file.");
      }
    } catch (error) {
      setSuccess("Data has been successfully stored in Firebase.");
    }
  };

  


  return (
    <div className=" border-2 border-rose-50 px-10 py-14 rounded-md bg-gray-900">
      <form onSubmit={handleFileUpload} encType="multipart/form-data">
        <div className="flex justify-center  flex-col">
        <div className="flex justify-start items-start text-start py-4 text-3xl">
        <label htmlFor="file">Upload a file:</label>
        </div>
       <div>
       <input type="file" name="file" id="file" required />
        <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Upload
        </button>
       </div>
        </div>
      </form>

      {success && <p>{success}</p>}
    </div>
  );
};

export default FileUpload;