const articles = [
    {
        url: './articles/2021_03_05_number_theory.html',
        alt: 'Understanding Number Theory article',
        image: './images/articles/2021_03_05_number_theory_image.png', // Image taken from: https://commons.wikimedia.org/wiki/File:Omega-exp-omega-labeled.svg , Pop-up casket (talk); original by User:Fool, CC0, via Wikimedia Commons
        imageAlt: 'Understanding Number Theory article image',
	title: 'Understanding Number Theory',
	author: 'Sofía Celi',
	date: '05/03/2021'
    },
    {
        url: './articles/2021_02_16_quantum.html',
        alt: 'Quantum Menace article',
        image: './images/articles/2021_02_16_quantum_image.jpeg', // Image taken from: https://commons.wikimedia.org/wiki/File:Quantum_Plasma_Sphere.JPG , Rosser1954, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons
        altImage: 'Quantum Menace article image',
	title: '[Reposted here] The Quantum Menace',
	author: 'Armando Faz-Hernándes',
	date: '16/02/2021'
    },
    {
        url: './articles/2021_02_26_kem_tls.html',
        alt: 'KEMTLS: TLS and PQC article',
        image: './images/articles/2021_02_26_kem_tls_image.png', // Image taken from: https://commons.wikimedia.org/wiki/File:11_Archimedean_Lattices.png , RZiff, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons
        altImage: 'KEMTLS: TLS and PQC article image',
	title: 'KEMTLS: TLS and PQC article',
	author: 'Sofía Celi and Tom Wiggers',
	date: '26/02/2021'
    },
]

docReady(() => {
  // Add scrolldown animations event
  // Inspired on: http://www.html5rocks.com/en/tutorials/speed/animations/ ,
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
  let ticking = false;

  // We create an array of objects (with the arrows) with a boolean
  // that keeps track of if it has been animated or not already.
  const topParagraphs = Array.from(
    document.querySelectorAll(".float-arrow")
  ).map((a) => ({
    trigger: false,
    el: a,
  }));

  function scrollHandler() {
    // Add the animation to the object if it hasn't been added already.
    for (let index = 0; index < topParagraphs.length; index++) {
      const { trigger, el } = topParagraphs[index];

      if (el.getClientRects()[0].top <= window.innerHeight && !trigger) {
        Array.from(el.parentNode.children).forEach((a) => {
          a.classList.add("fadeInDown");
        });
        topParagraphs[index].trigger = true;
      }
    }
  }

  // Add the scrolling event.
  document.addEventListener("scroll", function (e) {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        scrollHandler();
        ticking = false;
      });
      ticking = true;
    }
  });

})
