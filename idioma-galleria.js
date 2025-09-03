document.addEventListener("DOMContentLoaded", () => {
  const botonIdioma = document.getElementById("boton-idioma");
  const menuIdioma = document.getElementById("menu-idioma");

  botonIdioma.addEventListener("click", () => {
    menuIdioma.classList.toggle("oculto");
  });

  document.addEventListener("click", (e) => {
    if (!menuIdioma.contains(e.target) && !botonIdioma.contains(e.target)) {
      menuIdioma.classList.add("oculto");
    }
  });
});

function cambiarIdioma(idioma) {
    const textos = {
        es: {
            /*
            Desde este comentario, arriba irán los titulos de dibujos que iré haciendo. Se colocarán uno encima del otro
            conforme los vaya dibujando y publicando
            */
            tituloGaleria: "Galería de arte de Milky",
            galeriaIntroduccion: 'En este lugar voy a publicar todos mis dibujos, desde el mas reciente hasta el mas antiguo. Toca cada tarjeta para ir a al tweet donde se ha publicado el dibujo, un "me gusta" ayuda mucho y me motiva a seguir incursionando este camino :) <br><br>ADVERTENCIA: Hay spoilers de Rain World!!!',
            d1: "Spearmaster agarrando lanzas",
            d2: "Artificer en un poste",
            d3: "Rivulet comiendo fruta",
            d4: "Nyx (Regalo para una amiga)",
            d5: "The Watcher a traves de Signal Spires",
            d6: "The Watcher caminando",
            d7: "The Watcher con karma maximo",
            d8: "The Watcher flotando",
            d9: "Gloton, RW Art Month 2025",
            d10: 'Slugcats base + downpour (enlace a twitter <a href="https://x.com/Milky_bat/status/1887514464724898022" target="_blank">en este texto</a>)',
            d11: "Derpy (regalo para un amigo)",
            d12: "Spearmaster con aros",
            d13: "Spearmaster alzando los brazos",
            d14: "El Spearmaster es mi personaje favorito",
            d15: "Spearmaster en los postes",
            d16: "The Watcher, hecho antes de su salida",
            d17: "Monk con una fruta gigante",
            d18: "Monk agarrando una fruta",
            d19: "Death Free Medallion, carta del randombuff mod",
            d20: "Spearmaster, el mensajero",
            d21: 'Fondos de pantalla de los Slugcats del juego base + downpour (incluido inv) con resolucion 1366x768 <br><br><a href="https://x.com/Milky_bat/status/1798375300222554158" target="_blank">Enlace a twitter</a>',
            d22: "Monk con una flor en la oreja",
            d23: "Aniversario N°7, RW Art Month 2024",
            d24: "Raton linterna, RW Art month 2024",
            d25: "Hunter con lanzas",
            d26: "Hunter de perfil",
            d27: "Peluche de Inv",
            d28: "Artificer, la madre",
            d29: "Inv con una lanza",
            d30: "Inv sentado",
            d31: "Survivor con una linterna",
            d32: "Hunter apuntando",
            d33: "Monk. Primer dibujo, hecho el 29 de noviembre 2023",
            textoIntermedio: "A partir de este punto las imagenes direccionaran a un enlace de instagram",
        },

        en: {
            /*
            Desde este comentario, arriba irán traduciendo los titulos de dibujos que iré haciendo. Se colocarán uno
            encima del otro conforme los vaya dibujando y publicando
            */
            tituloGaleria:"Milky's art gallery",
            galeriaIntroduccion: 'Here I will post all my drawings, from the most recent to the oldest. Tap each card to go to the tweet where the drawing was posted. A “like” helps a lot and motivates me to continue on this path :) <br><br>WARNING: There are spoilers for Rain World!!!',
            d1: "Spearmaster grabbing spears",
            d2: "Artificer on a pole",
            d3: "Rivulet eating fruit",
            d4: "Nyx (gift for a friend)",
            d5: "The Watcher through signal spires",
            d6: "The Watcher walking",
            d7: "The Watcher with max karma",
            d8: "The Watcher floating",
            d9: "Gourmdand, RW Art Month 2025",
            d10: 'Slugcats base + Downpour (Twitter link <a href="https://x.com/Milky_bat/status/1887514464724898022" target="_blank">in this text</a>)',
            d11: "Derpy (gift for a friend)",
            d12: "Spearmaster with hoops",
            d13: "Spearmaster raising their arms",
            d14: "Spearmaster is my favorite character",
            d15: "Spearmaster on the poles",
            d16: "The Watcher, drawn before its release",
            d17: "Monk with a giant fruit",
            d18: "Monk holding a fruit",
            d19: "Death Free Medallion, card from the randombuff mod",
            d20: "Spearmaster, the messenger",
            d21: 'Wallpapers of the Slugcats from the base game + Downpour (including Inv), resolution 1366x768<br><br><a href="https://x.com/Milky_bat/status/1798375300222554158" target="_blank">Twitter link</a>',
            d22: "Monk with a flower on their ear",
            d23: "7th Anniversary, RW Art Month 2024",
            d24: "Lantern Mouse, RW Art Month 2024",
            d25: "Hunter with spears",
            d26: "Hunter in profile",
            d27: "Inv plushie",
            d28: "Artificer, the mother",
            d29: "Inv with a spear",
            d30: "Inv sitting",
            d31: "Survivor with a lantern",
            d32: "Hunter aiming",
            d33: "Monk. First drawing, made on November 29th, 2023",
            textoIntermedio: "From this point on, the images will link to an Instagram link.",

        },
    } 

    /*
    Desde acá para arriba se reemplazarán los titulos de los nuevos dibujos, uno encima del otro conforme los publique
    */
    document.getElementById("tituloGaleria").textContent = textos[idioma].tituloGaleria;
    document.getElementById("galeriaIntroduccion").innerHTML = textos[idioma].galeriaIntroduccion;
    document.getElementById("d1").textContent = textos[idioma].d1;
    document.getElementById("d2").textContent = textos[idioma].d2;
    document.getElementById("d3").textContent = textos[idioma].d3;
    document.getElementById("d4").textContent = textos[idioma].d4;
    document.getElementById("d5").textContent = textos[idioma].d5;
    document.getElementById("d6").textContent = textos[idioma].d6;
    document.getElementById("d7").textContent = textos[idioma].d7;
    document.getElementById("d8").textContent = textos[idioma].d8;
    document.getElementById("d9").textContent = textos[idioma].d9;
    document.getElementById("d10").innerHTML = textos[idioma].d10;
    document.getElementById("d11").textContent = textos[idioma].d11;
    document.getElementById("d12").textContent = textos[idioma].d12;
    document.getElementById("d13").textContent = textos[idioma].d13;
    document.getElementById("d14").textContent = textos[idioma].d14;
    document.getElementById("d15").textContent = textos[idioma].d15;
    document.getElementById("d16").textContent = textos[idioma].d16;
    document.getElementById("d17").textContent = textos[idioma].d17;
    document.getElementById("d18").textContent = textos[idioma].d18;
    document.getElementById("d19").textContent = textos[idioma].d19;
    document.getElementById("d20").textContent = textos[idioma].d20;
    document.getElementById("d21").innerHTML = textos[idioma].d21;
    document.getElementById("d22").textContent = textos[idioma].d22;
    document.getElementById("d23").textContent = textos[idioma].d23;
    document.getElementById("d24").textContent = textos[idioma].d24;
    document.getElementById("d25").textContent = textos[idioma].d25;
    document.getElementById("d26").textContent = textos[idioma].d26;
    document.getElementById("d27").textContent = textos[idioma].d27;
    document.getElementById("d28").textContent = textos[idioma].d28;
    document.getElementById("d29").textContent = textos[idioma].d29;
    document.getElementById("d30").textContent = textos[idioma].d30;
    document.getElementById("d31").textContent = textos[idioma].d31;
    document.getElementById("d32").textContent = textos[idioma].d32;
    document.getElementById("d33").textContent = textos[idioma].d33;
    document.getElementById("textoIntermedio").textContent = textos[idioma].textoIntermedio;



    const boton = document.getElementById("boton-idioma");
     boton.innerHTML = idioma === "es"
        ? '<img src="img/lenguaje/es_flag.png" alt="Español" width="40px"> ▼'
        : '<img src="img/lenguaje/en_flag.png" alt="English" width="40px"> ▼';

     document.getElementById("menu-idioma").classList.add("oculto");

}
