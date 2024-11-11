// E'lon qo'shish funksiyasi
function submitJob() {
    const title = document.getElementById('title').value;
    const province = document.getElementById('province').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
  
    // E'lonlar ro'yxatini localStorage'dan olish yoki yangi ro'yxat yaratish
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  
    // Yangi e'lonni ro'yxatga qo'shish
    jobs.push({ title, province, category, description });
  
    // Yangilangan ro'yxatni localStorage'ga saqlash
    localStorage.setItem('jobs', JSON.stringify(jobs));
  
    // Formani tozalash
    document.getElementById('addJobForm').reset();
  
    alert("Ish e'loni muvaffaqiyatli qo'shildi!");
  }
  