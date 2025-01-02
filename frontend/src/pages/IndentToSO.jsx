import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

export const IndentToSO = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (fileExtension === "csv") {
        setSelectedFile(file);
      } else {
        setSelectedFile(null);
        toast.warn("Please select a CSV file.");
      }
    } else {
      setSelectedFile(null);
      toast.warn("Please select a file.");
    }
  };

  const handleFileSelection = () => {
    fileInputRef.current.click();
  };

  const handleProcessFile = async () => {
    if (selectedFile) {
      setProcessing(true);
      try {
        const response = await processFile(selectedFile);
        console.log(response)
        setProcessing(false);
        toast.success("File processed successfully!");
      } catch (error) {
        setProcessing(false);
        toast.error(`Error: ${error.message}`);
      }
    } else {
      toast.warn("No file selected. Please choose a CSV file.");
    }
  };

  const processFile = async (file) => {
    const response = await fetch("/api/process-file", {
      method: "POST",
      body: file,
    });

    if (!response.ok) {
      throw new Error("Failed to process file");
    }

    return response.json(); 
  };

  return (
    <div className="m-6">
      {/* Header Section */}
      <div className="flex justify-between items-center px-6 mt-4">
        <h2 className="text-2xl font-extrabold text-gray-800">
          Indent to Sales Order
        </h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Return to Home
        </Link>
      </div>

      {/* Horizontal Line Divider */}
      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Description Section with Styling */}
      <div className="bg-blue-50 p-4 rounded-md shadow-sm border-l-4 border-blue-600 my-6">
        <div className="flex items-center">
          <FaInfoCircle className="text-blue-600 mr-3" size={20} />
          <p className="text-gray-700 font-medium text-lg">
            Kindly filter the FOFO Data in the CSV file before uploading.
          </p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={handleFileSelection}
        >
          Choose File
        </button>

        {selectedFile && (
          <>
            <p className="mt-4 text-lg text-gray-600">
              Selected file: {selectedFile.name}
            </p>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md mt-2"
              onClick={handleProcessFile}
              disabled={processing}
            >
              Process File
            </button>

            {processing && (
              <div className="mt-2 flex items-center space-x-2">
                <div className="animate-spin rounded-full border-t-2 border-blue-600 h-6 w-6"></div>
                <p className="text-blue-600">Processing file...</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
        accept=".csv"
      />
    </div>
  );
};

export default IndentToSO;
