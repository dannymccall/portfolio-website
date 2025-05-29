export  const handleDownload = () => {
    // Adjust the file path as needed
    const link = document.createElement("a");
    link.href = "/Palmer_Daniel_Resume.pdf";
    link.download = "Palmer_Daniel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };