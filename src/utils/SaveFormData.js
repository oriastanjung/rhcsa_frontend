const saveFormDataToFile = (formData) => {
    const dataString = JSON.stringify(formData);
  
    // Create a Blob object with the data
    const blob = new Blob([dataString], { type: 'text/plain' });
  
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'formData.txt');
  
    // Append the link to the document and trigger the click event
    document.body.appendChild(link);
    link.click();
  
    // Remove the link from the document
    document.body.removeChild(link);
  };
  
  export default saveFormDataToFile;