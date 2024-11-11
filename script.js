// Qidiruv funksiyasi
function performSearch() {
    const keyword = document.querySelector('.search-bar input').value;
    const region = document.querySelector('.search-bar select:nth-of-type(1)').value;
    const category = document.querySelector('.search-bar select:nth-of-type(2)').value;
  
    alert(`Qidiruv amalga oshirildi: \nKalit so'z: ${keyword}\nHudud: ${region}\nKategoriya: ${category}`);
  }
  
  // Sahifadagi bo'limlarga o'tish
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionID = e.target.getAttribute('href').replace('#', '');
      document.getElementById(sectionID)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Qidiruv tugmasiga hodisani bog'lash
  document.querySelector('.search-btn').addEventListener('click', performSearch);
  
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  }
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  }


// E'lonlar ma'lumotlari (namuna ma'lumot)
// Selectdan provinsiya tanlanganda qidirish
function searchByProvince() {
    const province = document.getElementById('province-select').value;
    if (province) {
      window.location.href = `result.html?province=${encodeURIComponent(province)}`;
    }
  }
  
  // Kartani bosganda qidirish
  function searchByCard(province) {
    window.location.href = `result.html?province=${encodeURIComponent(province)}`;
  }

  // Provinsiyalar va ularga tegishli ish o'rinlari soni
    // Provinsiyalar va ularga tegishli ish o'rinlari soni
    const jobData = {
      "Seul": 12,
      "Busan": 8,
      "Incheon": 5,
      "Daegu": 10,
      "Daejeon": 7,
      "Gwangju": 3,
      "Ulsan": 4,
      "Suwon": 6,
      // Qo'shimcha provinsiyalarni kiritishingiz mumkin
    };

    // Ish o'rinlari sonini kartalarda ko'rsatish funksiyasi
    function displayJobCounts() {
      const cards = document.querySelectorAll('.category-card');

      cards.forEach(card => {
        const province = card.getAttribute('data-province');
        const jobCount = jobData[province] || 0; // Ish o'rinlari soni yoki 0

        // Matnni dinamik tarzda o'zgartirish
        card.querySelector('.job-count').textContent = `(${jobCount} ish o'rni)`;
      });
    }

    // Sahifa yuklanganda ish o'rinlarini ko'rsatish
    document.addEventListener('DOMContentLoaded', displayJobCounts);