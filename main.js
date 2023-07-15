// hamburger
let divburger = document.getElementById("hamburger-btn");
window.addEventListener("resize", function () {
  if (window.innerWidth > 810) {
    divburger.innerHTML = "";
  }
});
let tampil = false;
function Hamburger() {
  let navbar = `<ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="projek.html">Projek</a></li>
    <li><a href="testimonial.html">Testimonial</a></li>
    <li><a href="form.html">Kontak</a></li>
  </ul>`;
  let divburger = document.getElementById("hamburger-btn");
  if (tampil === false) {
    divburger.innerHTML = navbar;
    tampil = true;
  } else {
    divburger.innerHTML = "";
    tampil = false;
  }
  console.log(navbar);
}

// Form
function submitData(event) {
  event.preventDefault();

  let name = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("option").value;
  let message = document.getElementById("pesan").value;

  if (name === "") {
    return alert("Isi nama dulu sayang");
  } else if (email === "") {
    return alert("Isi email dulu sayang");
  } else if (phone === "") {
    return alert("isi nomor dulu sayang");
  } else if (subject === "") {
    return alert("pilih posisi dulu sayang");
  } else if (message === "") {
    return alert("isi pesan dulu sayang");
  }

  const emailReceiver = "irsyadmuhammad954.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${phone}`;
  a.click();
}

// End Form

let dataProject = [];

function tambahData(event) {
  event.preventDefault();
  let nama = document.getElementById("nama").value;
  let mulai = document.getElementById("tanggalMulai").value;
  let akhir = document.getElementById("tanggalAkhir").value;
  let deskripsi = document.getElementById("isi").value;
  let gambar = document.getElementById("gambar").files;
  let teknologi = document.querySelector("ceklis");

  if (nama == "") {
    alert("Isi Nama");
  } else if (mulai == "") {
    alert("Isi tanggal mulai");
  } else if (akhir == "") {
    alert("Isi Akhir");
  } else if (deskripsi == "") {
    alert("Isi Deskripsi");
  } else if (gambar == 0) {
    alert("Upload File");
  }

  const reactJsIcon = '<i class="fa-brands fa-react"></i>';
  const nodeJsIcon = '<i class="fa-brands fa-node-js"></i>';
  const laravelIcon = '<i class="fa-brands fa-laravel"></i>';
  const pythonIcon = '<i class="fa-brands fa-python"></i>';

  let reactJs = document.getElementById("react").checked ? reactJsIcon : "";
  let nodeJs = document.getElementById("node").checked ? nodeJsIcon : "";
  let laravel = document.getElementById("laravel").checked ? laravelIcon : "";
  let python = document.getElementById("python").checked ? pythonIcon : "";
  console.log(python);

  gambar = URL.createObjectURL(gambar[0]);

  let start = new Date(mulai);
  let end = new Date(akhir);

  if (start > end) {
    return alert("Pilih Tanggal Yang Benar");
  }

  let selisih = end.getTime() - start.getTime();
  let hari = selisih / (1000 * 60 * 60 * 24);
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(minggu / 4);
  let tahun = Math.floor(bulan / 12);
  let durasi = "";

  if (hari > 0) {
    durasi = hari + " hari";
  }
  if (minggu > 0) {
    durasi = minggu + " minggu";
  }
  if (bulan > 0) {
    durasi = bulan + " bulan";
  }
  if (tahun > 0) {
    durasi = tahun + " tahun";
  }

  let dataPenampung = {
    nama,
    hari,
    minggu,
    bulan,
    tahun,
    selisih,
    durasi,
    deskripsi,
    reactJs,
    nodeJs,
    laravel,
    python,
    gambar,
  };

  dataProject.push(dataPenampung);
  console.log(dataPenampung);
  renderkartu();
}

function renderkartu() {
  document.getElementById("konten").innerHTML = "";
  // Looping
  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById("konten").innerHTML += `
    <div class="ProjectKartu">
      
     <img class="FotoKartu" src="${dataProject[index].gambar}" alt="" />
      <div class="TextKartu">
          <span class="Title">
            <h3>${dataProject[index].nama}</h3>
          </span>
          <h4>${dataProject[index].durasi}</h4>
          <p>
            ${dataProject[index].deskripsi}
          </p>
          <div class="KartuIcon">
            ${dataProject[index].reactJs}
            ${dataProject[index].nodeJs}
            ${dataProject[index].laravel}
            ${dataProject[index].python}
            
          </div>
          <div class="TombolKartu">
            <button>Edit</button>
            <button onclick="hapus(${index})">Delete</button>
          </div>
        </div>
      </div>`;
  }
}
function hapus(index) {
  delete dataProject[index];
  renderkartu();
}

// OOP
class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  get user() {
    throw new Error("there is must be user to make testimonials");
  }

  get testimonialHTML() {
    return ` <div class="testimonial">
        <img src="${this.image}" alt="" class="gambarTestimonial" />
        <p class="quote">${this.quote}</p>
        <p class="author">${this.user}</p>
      </div>
        `;
  }
}

class UserTestimonial extends Testimonial {
  #user = "";

  constructor(user, quote, image) {
    super(quote, image);
    this.#user = user;
  }

  get user() {
    return this.#user;
  }
}

class PerusahaanTestimonial extends Testimonial {
  #company = "";

  constructor(company, quote, image) {
    super(quote, image);
    this.#company = company;
  }

  get user() {
    return "company : " + this.#company;
  }
}

const testimonial1 = new UserTestimonial(
  "Muhammad Irsyad ",
  "Dari Sana",
  "Aset/IMG_6589.JPG"
);

const testimonial2 = new UserTestimonial(
  "Muhammad Irsyad ganteng",
  "Jiaelah",
  "Aset/IMG_6750.JPG"
);

const testimonial3 = new UserTestimonial(
  "Bangka",
  "Pokoknya gitu",
  "Aset/IMG_6801.JPG"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];

let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
  document.getElementById("testimonial").innerHTML = testimonialHTML;
}
