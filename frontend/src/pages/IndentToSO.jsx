import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const IndentToSO = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setErrorMessage(null);
    } else {
      setSelectedFile(null);
      setErrorMessage("Please select a file.");
    }
  };

  const handleFileSelection = () => {
    fileInputRef.current.click();
  };

  const handleProcessFile = async () => {
    if (selectedFile) {
      setProcessing(true);
      // Call your API function here to process the selected file
      try {
        const response = await processFile(selectedFile);
        // Handle successful API response
        setProcessing(false);
        // Update UI with success message or other relevant information
      } catch (error) {
        setProcessing(false);
        setErrorMessage(error.message);
      }
    }
  };

  const processFile = async (file) => {
    // Implement your API call logic here with the selected file
    // This function should return a Promise
    const response = await fetch("/api/process-file", {
      method: "POST",
      body: file,
    });

    if (!response.ok) {
      throw new Error("Failed to process file");
    }

    return response.json(); // Or handle the response as needed
  };

  return (
    <>
      <div className="mb-60">
        <Link to="/">Return to Home</Link>
      </div>
      <button className="gap-6" onClick={handleFileSelection}>
        Choose File
      </button>
      {selectedFile && (
        <>
          <p>Selected file: {selectedFile.name}</p>
          <button
            className="bg-blue-600 text-white"
            onClick={handleProcessFile}
            disabled={processing}
          >
            Process File
          </button>
          {processing && <p>Processing file...</p>}
        </>
      )}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden gap-6"
      />
    </>
  );
};

export default IndentToSO;
