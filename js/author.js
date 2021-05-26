var load_authors = function() {
  // get the template defined with handlebars and compile it.
  const source = document.getElementById("author-template").innerHTML;
  const template = Handlebars.compile(source);
  // the list of authors that write on the magazine.
  // each image (photo) has been provided by the authors.
  const context = {
    authors: [{
        name: "Abdelraham Aly",
        image: "./images/authors/abdelraham_aly_photo.png",
        job: "Senior Cryptographer",
        location: "Abu Dhabi, UAE",
        twitter: "@abdito_8",
        website: "https://scholar.google.es/citations?user=FDfDueMAAAAJ&hl=en"
      },
      {
        name: "Diego Aranha",
        image: "./images/authors/diego_aranha_photo.png",
        job: "Associate Professor",
        location: "Aarhus, Denmark",
        twitter: "@dfaranha",
        website: "https://sites.google.com/site/dfaranha/"
      },
      {
        name: "Gustavo Banegas",
        job: "Post-Doc",
        location: "Paris, France",
        image: "./images/authors/gustavo_banegas_photo.png",
        twitter: "@gustavosbanegas",
        website: "https://www.cryptme.in/"
      },
      {
        name: "Fabio Campos",
        job: "PhD Student",
        location: "Bochum, Germany",
        image: "./images/authors/fabio_campos_photo.png",
        twitter: "@primaboinca",
        website: "https://www.sopmac.de/"
      },
      {
        name: "Sofía Celi",
        job: "Cryptography researcher",
        location: "Lisbon, Portugal",
        image: "./images/authors/sofia_celi_photo.png",
        twitter: "@claucece",
        website: "https://www.sofiaceli.com/"
      },
      {
        name: "Jesús Chi",
        job: "Senior Cryptographer",
        location: "Abu Dhabi, UAE",
        image: "./images/authors/jesus_chi_photo.png",
        twitter: "@Jebus_dguez",
        website: "https://jjchidguez.github.io/"
      },
      {
        name: "Daniel Escudero",
        job: "PhD Student",
        location: "Aarhus, Denmark",
        image: "./images/authors/daniel_escudero_photo.png",
        twitter: "@deescuderoo",
        website: "https://deescuderoo.github.io/"
      },
      {
        name: "Armando Faz",
        image: "./images/authors/armando_faz_photo.png",
        twitter: "@armfazh",
        website: "https://scholar.google.com/citations?user=XGD6X-EAAAAJ&hl=en"
      },
      {
        name: "Patrick Longa",
        job: "Cryptography researcher",
        location: "Redmond, USA",
        image: "./images/authors/patrick_longa_photo.png",
        twitter: "@PatrickLonga",
        website: "https://www.patricklonga.com/"
      },
      {
        name: "Octavio Perez",
        job: "Professor",
        location: "Montevideo, Uruguay",
        image: "./images/authors/octavio_perez_photo.png",
        twitter: "@octaviopk",
        website: "https://uruguay.misprofesores.com/profesores/Octavio-Perez-Kempner_15757"
      },
      {
        name: "Francisco Rodríguez",
        image: "./images/authors/francisco_rodriguez_photo.png",
        twitter: "@FRHENR",
        website: "https://delta.cs.cinvestav.mx/~francisco/"
      },
      {
        name: "Fernando Virdia",
        job: "PhD Student",
        location: "London, UK",
        image: "./images/authors/fernando_virdia_photo.png",
        twitter: "",
        website: "https://fundamental.domains/"
      },
      {
        name: "Arantxa Zapico",
        job: "PhD Candidate",
        location: "Barcelona, Spain",
        image: "./images/authors/arantxa_zapico_photo.png",
        twitter: "@arantxazapico",
        website: "https://www.linkedin.com/in/victoria-arantxa-zapico-634444160/?originalSubdomain=es"
      },
    ]
  };

  // render the data on the html object.
  const html = template(context);
  document.querySelector(".author-rendered-output").innerHTML = html;
}
window.addEventListener('load', load_authors, false);
