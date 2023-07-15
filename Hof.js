const Data = [
  {
    user: "Muhammad Irsyad",
    quote: "Apa Kek dah",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 1,
  },
  {
    user: "Muhammad rizal ",
    quote: "Apa Kek dah bingung",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 2,
  },
  {
    user: "Mantopani",
    quote: "jelek banget",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 3,
  },
  {
    user: "Sapa",
    quote: "murah banget",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4,
  },
  {
    user: "idham",
    quote: "kere banget",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 5,
  },
  {
    user: "idham",
    quote: "kere banget",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 5,
  },
];

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
