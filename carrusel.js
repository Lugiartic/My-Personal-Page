document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll('.carrusel');

  carruseles.forEach(carrusel => {
    const imagenes = carrusel.querySelector('.imagenes');
    const prevBtn = carrusel.querySelector('.prev');
    const nextBtn = carrusel.querySelector('.next');
    const total = imagenes.children.length;
    let index = 0;

    function actualizarCarrusel() {
      const offset = -index * 100;
      imagenes.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % total;
      actualizarCarrusel();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      actualizarCarrusel();
    });
  });
});