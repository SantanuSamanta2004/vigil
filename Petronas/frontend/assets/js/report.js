document.getElementById('reportForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('crimeType', document.getElementById('crimeType').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('location', document.getElementById('location').value);
  
    const files = document.getElementById('evidence').files;
    for (let i = 0; i < files.length; i++) {
      formData.append('evidence', files[i]);
    }
  
    try {
      const response = await fetch('/api/reports/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      alert('Report submitted successfully!');
      window.location.href = 'dashboard.html';
    } catch (err) {
      console.error('Error submitting report:', err);
      alert('Failed to submit report. Please try again.');
    }
  });