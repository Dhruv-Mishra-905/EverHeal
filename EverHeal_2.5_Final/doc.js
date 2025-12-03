document.addEventListener('DOMContentLoaded', () => {
  const specialtyCards = document.querySelectorAll('#specialties .specialty-card');
  const doctorCards = document.querySelectorAll('.doctor-card');

  specialtyCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedSpecialty = card.querySelector('p').innerText.trim();

      
      specialtyCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      
      doctorCards.forEach(doc => {
        const docSpecialty = doc.getAttribute('data-specialty').trim();
        if (docSpecialty === selectedSpecialty) {
          doc.style.display = '';
        } else {
          doc.style.display = 'none';
        }
      });
    });
  });
});



// form 


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.doctor-search-form');
  const doctorCards = document.querySelectorAll('.doctor-card');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const specialitySelect = form.querySelector('#speciality');
    const appointmentDate = form.querySelector('#appointment-date').value.trim();
    const locationInput = form.querySelector('#location').value.trim().toLowerCase();

    const selectedSpecialityText = specialitySelect.options[specialitySelect.selectedIndex]?.text || '';

      
    if (!specialitySelect.value) {
      alert('Please select a speciality.');
      return;
    }
    if (!appointmentDate) {
      alert('Please select an appointment date.');
      return;
    }
    if (!locationInput) {
      alert('Please enter a preferred location or pincode.');
      return;
    }

      
    let visibleCount = 0;
    doctorCards.forEach(doc => {
      const docSpecialty = doc.getAttribute('data-specialty').toLowerCase();
      const docLocation = doc.querySelector('.doctor-location h4').innerText.toLowerCase();

      
      const matchesSpecialty = docSpecialty.includes(specialitySelect.value.toLowerCase()) || docSpecialty === selectedSpecialityText.toLowerCase();
      const matchesLocation = docLocation.includes(locationInput);

      if (matchesSpecialty && matchesLocation) {
        doc.style.display = '';
        visibleCount++;
      } else {
        doc.style.display = 'none';
      }
    });

    if (visibleCount === 0) {
      alert('No doctors found matching your criteria.');
    }
  });
});


// search


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('#doctors .search');
  const searchButton = document.querySelector('#doctors .search-button');
  const doctorCards = document.querySelectorAll('.doctor-card');
  const locationSpan = document.querySelector('#doctors .location span');
  const locationLink = document.querySelector('#doctors .location a');

  // Function to filter doctors by name or location
  function filterDoctors() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      
      doctorCards.forEach(doc => doc.style.display = '');
      return;
    }

    let visibleCount = 0;
    doctorCards.forEach(doc => {
      const name = doc.querySelector('.doctor-name h3').innerText.toLowerCase();
      const location = doc.querySelector('.doctor-location h4').innerText.toLowerCase();

      if (name.includes(query) || location.includes(query)) {
        doc.style.display = '';
        visibleCount++;
      } else {
        doc.style.display = 'none';
      }
    });

    if (visibleCount === 0) {
      alert('No doctors found matching your search.');
    }
  }

  
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    filterDoctors();
  });

  
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      filterDoctors();
    }
  });

  
  locationLink.addEventListener('click', (e) => {
    e.preventDefault();
    const newLocation = prompt('Enter your preferred location:', locationSpan.innerText);
    if (newLocation && newLocation.trim() !== '') {
      locationSpan.innerText = newLocation.trim();
      searchInput.value = newLocation.trim();
      filterDoctors();
    }
  });
});
