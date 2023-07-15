const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/62eb7aa9f943ce45b22e", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText));
    } else if (xhr.status >= 400) {
      reject("Eror loading");
    }
  };
  xhr.onerror = function () {
    reject("Network EROR");
  };
  xhr.send();
});

let Data = [];

async function getData() {
  try {
    const response = await promise;
    Data = response;
    CardTampilkan();
  } catch (error) {
    console.log(error);
  }
}

getData();

function CardTampilkan() {
  let CardData = "";

  Data.forEach((item) => {
    CardData += `<div class="testimonial">
      <img src="${item.image}" alt="" class="gambarTestimonial" />
      <p class="quote">${item.quote}</p>
      <p class="author">${item.user}</p>
      <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
      </div> `;
  });
  document.getElementById("testimonial").innerHTML = CardData;
}
CardTampilkan();

function Saring(sortir) {
  let sortirData = "";

  const nyortirData = Data.filter((kartu) => {
    return kartu.rating === sortir;
  });

  nyortirData.forEach((kartu) => {
    sortirData += `<div class="testimonial">
      <img src="${kartu.image}" alt="" class="gambarTestimonial" />
      <p class="quote">${kartu.quote}</p>
      <p class="author">${kartu.user}</p>
      <p class="author">${kartu.rating}<i class="fa-solid fa-star"></i></p>
      </div> `;
  });
  document.getElementById("testimonial").innerHTML = sortirData;
}
