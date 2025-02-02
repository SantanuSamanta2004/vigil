document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/api/reports');
      const reports = await response.json();
  
      const reportsList = document.getElementById('reportsList');
      reports.forEach(report => {
        const reportItem = document.createElement('div');
        reportItem.className = 'report-item';
        reportItem.innerHTML = `
          <h3>${report.crimeType}</h3>
          <p>${report.description}</p>
          <p><strong>Status:</strong> ${report.status}</p>
        `;
        reportsList.appendChild(reportItem);
      });
    } catch (err) {
      console.error('Error fetching reports:', err);
    }
  });