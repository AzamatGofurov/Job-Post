
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  }
  

// URL dan provinsiya qiymatini olish
const urlParams = new URLSearchParams(window.location.search);
const selectedProvince = urlParams.get('province');

// localStorage'dan e'lonlarni olish
const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

// Tanlangan provinsiya bo‘yicha e'lonlarni filtrlash
const jobResults = document.getElementById('job-results');
const filteredJobs = jobs.filter(job => job.province === selectedProvince);

// E'lonlarni ko'rsatish yoki xabar chiqarish
if (filteredJobs.length > 0) {
  filteredJobs.forEach(job => {
    const jobElement = document.createElement('div');
    jobElement.classList.add('job-card');
    jobElement.innerHTML = `
      <h2>${job.title}</h2>
      <p><strong>Provinsiya:</strong> ${job.province}</p>
      <p>${job.description}</p>
    `;
    jobResults.appendChild(jobElement);
  });
} else {
  jobResults.innerHTML = `<p>Bu yerda hali ish eloni yo'q.</p>`;
}