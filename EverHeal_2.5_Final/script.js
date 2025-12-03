document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate");
    let lastScrollY = window.pageYOffset;
    let direction = "down";
  

    window.addEventListener("scroll", () => {
      const currentY = window.pageYOffset;
      direction = currentY > lastScrollY ? "down" : "up";
      lastScrollY = currentY;
    });
  

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
  
        if (entry.isIntersecting) {

          el.dataset.direction = direction;
  

          window.requestAnimationFrame(() => {
            el.classList.add("visible");
          });
        } else {

          el.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.05,            
      rootMargin: "0px"
    });
  
    items.forEach(el => io.observe(el));
  });


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search");
    const searchButton = document.querySelector(".search-button");
    const hospitalCards = document.querySelectorAll(".hospital-card");

    function filterHospitals() {
        const query = searchInput.value.toLowerCase().trim();

        hospitalCards.forEach(card => {
            const hospitalName = card.querySelector(".hospital-name h3").textContent.toLowerCase();
            const hospitalLocation = card.querySelector(".hospital-location h4").textContent.toLowerCase();

            if (hospitalName.includes(query) || hospitalLocation.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchButton.addEventListener("click", filterHospitals);

    searchInput.addEventListener("keyup", filterHospitals);
});



document.addEventListener("DOMContentLoaded", function () {
    const docSearchInput = document.querySelector("#doctors .search");
    const docSearchButton = document.querySelector("#doctors .search-button");
    const doctorCards = document.querySelectorAll(".doctor-card");

    function filterDoctors() {
        const query = docSearchInput.value.toLowerCase().trim();

        doctorCards.forEach(card => {
            const doctorName = card.querySelector(".doctor-name h3").textContent.toLowerCase();
            const doctorProfession = card.querySelector(".doctor-profession h4").textContent.toLowerCase();

            if (doctorName.includes(query) || doctorProfession.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    docSearchButton.addEventListener("click", filterDoctors);

    docSearchInput.addEventListener("keyup", filterDoctors);
});




document.addEventListener("DOMContentLoaded", function () {
    const pharmacySearchInput = document.querySelector("#medical .search");
    const pharmacySearchButton = document.querySelector("#medical .search-button");
    const pharmacyCards = document.querySelectorAll(".pharmacy-card");

    function filterPharmacies() {
        const query = pharmacySearchInput.value.toLowerCase().trim();

        pharmacyCards.forEach(card => {
            const pharmacyName = card.querySelector(".pharmacy-name h3").textContent.toLowerCase();
            const pharmacyLocation = card.querySelector(".pharmacy-location h4").textContent.toLowerCase();

            if (pharmacyName.includes(query) || pharmacyLocation.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    pharmacySearchButton.addEventListener("click", filterPharmacies);

    pharmacySearchInput.addEventListener("keyup", filterPharmacies);
});
  


document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('reschedule-modal');
  const closeBtn = modal.querySelector('.close-btn');
  const submitBtn = document.getElementById('submit-reschedule');
  const dateInput = document.getElementById('reschedule-date');
  const timeInput = document.getElementById('reschedule-time');

  let currentCard = null; 

  const manageButtons = document.querySelectorAll('.card-button input[type="button"][value="manage"]');
  manageButtons.forEach(button => {
    button.addEventListener('click', function() {
      currentCard = this.closest('.card');
      dateInput.value = '';
      timeInput.value = '';
      modal.style.display = 'block';
    });
  });
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  submitBtn.addEventListener('click', function() {
    const date = dateInput.value;
    const time = timeInput.value;

    if (!date) {
      alert('Please select a date.');
      return;
    }
    if (!time) {
      alert('Please select a time.');
      return;
    }
    if (currentCard) {
      const smallElem = currentCard.querySelector('.card-content small');
      if (smallElem) {
        smallElem.textContent = 'Rescheduling...';
      }
    }
    modal.style.display = 'none';
    alert('If the doctor is free at ' + date + ' ' + time + ', we will inform you by mail.');
  });
});

  const familyMembersData = {
    self: { name: '', age: '', gender: '', bloodGroup: '', email: '' },
    member1: { name: 'John Doe', age: 12, gender: 'male', bloodGroup: 'B+', email: 'john.doe@example.com' },
    member2: { name: 'Jane Doe', age: 10, gender: 'female', bloodGroup: 'A+', email: 'jane.doe@example.com' },
    member3: { name: 'Mary Smith', age: 35, gender: 'female', bloodGroup: 'O+', email: 'mary.smith@example.com' }
  };

  const popup = document.getElementById('appointment-popup');
  const closeBtn = popup.querySelector('.close-btn');
  const form = document.getElementById('appointment-form');
  const doctorNameInput = document.getElementById('doctor-name');
  const familyMemberSelect = document.getElementById('family-member');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const genderSelect = document.getElementById('gender');
  const bloodGroupSelect = document.getElementById('blood-group');
  const emailInput = document.getElementById('email');

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('appointment-date').setAttribute('min', today);

  document.querySelectorAll('.doctor-button input[type="button"]').forEach(button => {
    button.addEventListener('click', (e) => {
      const doctorCard = e.target.closest('.doctor-card');
      const doctorName = doctorCard.getAttribute('data-doctor');
      doctorNameInput.value = doctorName;

      form.reset();
      familyMemberSelect.value = '';
      nameInput.value = '';
      ageInput.value = '';
      genderSelect.value = '';
      bloodGroupSelect.value = '';
      emailInput.value = '';

      popup.classList.add('active');
      document.body.style.overflow = 'hidden'; 
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.style.overflow = ''; 
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
      document.body.style.overflow = ''; 
    }
  });

  familyMemberSelect.addEventListener('change', () => {
    const selected = familyMemberSelect.value;
    if (selected && familyMembersData[selected]) {
      const data = familyMembersData[selected];
      nameInput.value = data.name || '';
      ageInput.value = data.age || '';
      genderSelect.value = data.gender || '';
      bloodGroupSelect.value = data.bloodGroup || '';
      emailInput.value = data.email || '';
    } else {
      nameInput.value = '';
      ageInput.value = '';
      genderSelect.value = '';
      bloodGroupSelect.value = '';
      emailInput.value = '';
    }
  });

  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    popup.classList.remove('active');
    document.body.style.overflow = ''; 
  });


  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('booking-popup');
    const popupClose = document.getElementById('popup-close');
    const hospitalNameSpan = document.getElementById('hospital-name-popup');
    const bookingForm = document.getElementById('booking-form');
    const bookingMessage = document.getElementById('booking-message');
    function getAvailableBeds(card) {
      const bedText = card.querySelector('.hospital-bed h4').textContent;
      const match = bedText.match(/Available Beds:\s*(\d+)/i);
      return match ? parseInt(match[1], 10) : 0;
    }
    function setAvailableBeds(card, newCount) {
      const bedH4 = card.querySelector('.hospital-bed h4');
      bedH4.textContent = `Available Beds: ${newCount}`;
    }
    function openPopup(hospitalCard) {
      const hospitalName = hospitalCard.querySelector('.hospital-name h3').textContent;
      hospitalNameSpan.textContent = hospitalName;
      popup.style.display = 'flex';
      bookingMessage.textContent = '';
      bookingForm.reset();
      bookingForm.dataset.hospitalCardIndex = Array.from(hospitalCards).indexOf(hospitalCard);
    }
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const hospitalIndex = bookingForm.dataset.hospitalCardIndex;
      const hospitalCard = hospitalCards[hospitalIndex];
      let availableBeds = getAvailableBeds(hospitalCard);
      const bedsToBook = parseInt(bookingForm.bedCount.value, 10);
      if (bedsToBook > availableBeds) {
        bookingMessage.style.color = 'red';
        bookingMessage.textContent = `Only ${availableBeds} beds are available. Please reduce the number.`;
        return;
      }
      availableBeds -= bedsToBook;
      setAvailableBeds(hospitalCard, availableBeds);
      bookingMessage.style.color = 'green';
      bookingMessage.textContent = `Successfully booked ${bedsToBook} bed(s) at ${hospitalNameSpan.textContent}.`;
      if (availableBeds <= 0) {
        hospitalCard.querySelector('.hospital-button input').disabled = true;
        hospitalCard.querySelector('.hospital-button input').value = 'Fully Booked';
      }
      
      setTimeout(() => {
        popup.style.display = 'none';
      }, 2000);
    });
    
    const hospitalCards = document.querySelectorAll('.hospital-card');
    hospitalCards.forEach(card => {
      const bookBtn = card.querySelector('.hospital-button input[type="button"]');
      bookBtn.addEventListener('click', () => {
        if (getAvailableBeds(card) > 0) {
          openPopup(card);
        } else {
          alert('No beds available to book at this hospital.');
        }
      });
    });
  });


