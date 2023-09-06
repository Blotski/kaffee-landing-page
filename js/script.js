document.addEventListener("DOMContentLoaded", function () {

  const teamButton = document.getElementById('team-button');
  const demoButton = document.getElementById('demo-button');
  console.log(demoButton)
  const demoButton2 = document.getElementById('demo-button2');
  console.log(demoButton2);
  const dockerButton = document.getElementById('docker-button');
  dockerButton.addEventListener('click', function (e) {
    e.preventDefault();

    const section2 = document.getElementById('section2');

    section2.scrollIntoView({ behavior: 'smooth' });

    
    demoButton.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('entered')

      const section3 = document.getElementById('section3');

      section3.scrollIntoView({ behavior: 'smooth' });
    });
    demoButton2.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('entered')

      const section3 = document.getElementById('section3');

      section3.scrollIntoView({ behavior: 'smooth' });
    });

    teamButton.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('entered')

      const section4 = document.getElementById('section4');

      section4.scrollIntoView({ behavior: 'smooth' });
    });
  });



  let menu = document.querySelector('#menu-icon');
  let navlist = document.querySelector('.navlist');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
  };

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
  });

  sr.reveal('.hero-text', { delay: 200, origin: 'top' });
  sr.reveal('.hero-img', { delay: 450, origin: 'top' });
  sr.reveal('.icons', { delay: 500, origin: 'left' });
  sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

})