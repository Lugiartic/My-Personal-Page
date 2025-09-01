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
            tituloprincipal: "Pagina personal de Milky",
            tituloPresentacion: "Presentación",
            textoPresentacion: "Hola, soy Milky aunque mi nombre real es Valentín. Soy furro, me gustan mucho los videojuegos y estoy interesado en la programación. Soy estudiante de Informática y me gusta mucho aprender de manera autodidacta. Tengo 2 pasatiempos, los cuales son los siguientes: Jugar y dibujar.",
            gustosTitulo: "Mis gustos",
            gustosIntroduccion: "Soy furro, por lo tanto me gusta mucho los animales antropomórficos. Entre todos ellos destaco los zorros (sobretodo el ártico), los dragones y el panda rojo. Cabe aclarar que yo no tengo un OC.",
            juegosTitulo: "Juegos favoritos",
            juegosTexto: "Los juegos roguelikes/lites, metroidvanias y de exploración son los que más me gustan. Por un lado me gustan los desafíos y por el otro explorar el mundo que el juego tiene para ofrecer. A continuación pondré mis juegos favoritos:",
            
            //A partir de acá serán solo los titulos
            musicaTitulo: "Música",
            proyectosTituloP: "Proyectos personales",
            tituloDesarrollo: "Desarrollo web",
            tituloDibujos: "Dibujos",
            galeria: ">> Galería de arte <<",
            tituloRedes: "Redes sociales",

            //Párrafos
            pokemonTexto: "Me gusta Pokemon. Aunque nunca vi la serie pero si jugué algunos de los juegos: Pokemon rojo fuego, esmeralda, X y ultra sol (éste último no lo terminé). Adicionalmente jugué un fanmade llamado Pokemon Reloaded. <br>Mi pokemon favorito es Umbreon, juego favorito es el esmeralda y generación favorita la tercera",
            musicaTexto: "Mis gustos musicales son algo que no tengo muy en cuenta ya que son pocas las ocasiones en las que escucho musica. Pero me gustan mucho las bandas de power metal y rock alternativo, algunas de las cosas que suelo escuchar son:",
            musicaTexto2: "Aún así, a menudo suelo escuchar también el soudtrack de mis juegos favoritos. Destaco el OST de Rain world, Celeste y Ori.",
            proyectosTexto: "Descubrí que armar páginas web es divertido, y de momento estoy usando parte de mi tiempo en esto. Un ejemplo es ésta misma página que estas viendo, la he hecho yo. También hice otras páginas, algunas de ellas son:",
            personajesFavoritos: "Mis personajes favoritos",
            enemigosRW: "Enemigos de Rain World",
            proyectosTexto2: "Como desarrollador principiante, reconozco que se me hace dificil adaptar las páginas a dispositivos móviles, por lo tanto es posible que los sitios se vean raros en celulares.",
            dibujoTexto: "Ser dibujante es mi sueño frustrado, a pesar de esto hago el intento de dibujar. Actualmente me limito a slugcats. Aquí debajo anclaré una galería de arte en la cual expondré todos mis dibujos, y la iré actualizando activamente cada vez que termine un dibujo nuevo:",
            redesTexto: "Puedes encontrarme en varios lugares",
        },

        en: {
            tituloprincipal: "Milky's personal page",
            tituloPresentacion: "Presentation",
            textoPresentacion: "Hi, I'm Milky, although my real name is Valentín. I'm furry. I really like video games and I'm interested in programming. I'm a computer science student and I really enjoy learning on my own. I have two hobbies, which are playing video games and drawing.",
            gustosTitulo: "My preferences",
            gustosIntroduccion: "I am a furry, so I really like anthropomorphic animals. Among them, I especially like foxes (particularly arctic foxes) as well as dragons and red pandas. It should be noted that I do not have an original character.",
            juegosTitulo: "Favorite games",
            juegosTexto: "Roguelike/lite, metroidvanias and exploration games are my favorites. On the one hand, I like challenges, and on the other, I like exploring the world that the game has to offer. Here are my favorite games:",
            
            //A partir de acá serán solo los titulos
            musicaTitulo: "Music",
            proyectosTituloP: "Personal projects",
            tituloDesarrollo: "Web development",
            tituloDibujos: "Drawings",
            galeria: ">> Art gallery <<",
            tituloRedes: "Social media",

            //Párrafos
            pokemonTexto: "I like Pokemon. Although I never watched the series, I did play some of the games: Pokemon FireRed, Emerald, X, and Ultra Sun (I didn't finish it). I also played a fan-made game called Pokémon Reloaded. <br>My favorite Pokémon is Umbreon, my favorite game is Emerald, and my favorite generation is the third.",
            musicaTexto: "I don't really think about my musical tastes much, as I rarely listen to music. But I really like power metal and alternative rock bands. Some of the things I usually listen to are:",
            musicaTexto2: "Even so, I often listen to the soundtracks of my favorite games as well. I would highlight the OSTs of Rain World, Celeste, and Ori.",
            proyectosTexto: "I discovered that building websites is fun, and I'm currently spending part of my time doing this. An example is this very page you're looking at; I made it myself. I also made other pages (only available in Spanish), some of which are:",
            personajesFavoritos: "My favorite characters",
            enemigosRW: "Rain World enemies",
            proyectosTexto2: "As a beginner developer, I admit that I find it difficult to adapt pages to mobile devices, so the sites may look strange on cell phones.",
            dibujoTexto: "Being an artist is my unfulfilled dream, but despite this, I still try to draw. Currently, I limit myself to slugcats. Below, I will link to an art gallery where I will display all my drawings, and I will actively update it every time I finish a new drawing:",
            redesTexto: "You cand find my in several places:",
        },
    };

     document.getElementById("tituloprincipal").textContent = textos[idioma].tituloprincipal;
     document.getElementById("tituloPresentacion").textContent = textos[idioma].tituloPresentacion;
     document.getElementById("textoPresentacion").textContent = textos[idioma].textoPresentacion;
     document.getElementById("gustosTitulo").textContent = textos[idioma].gustosTitulo;
     document.getElementById("gustosIntroduccion").textContent = textos[idioma].gustosIntroduccion;
     document.getElementById("juegosTitulo").textContent = textos[idioma].juegosTitulo;
     document.getElementById("juegosTexto").textContent = textos[idioma].juegosTexto;

     //A partir de acá son titulos
     document.getElementById("musicaTitulo").textContent = textos[idioma].musicaTitulo;
     document.getElementById("proyectosTituloP").textContent = textos[idioma].proyectosTituloP;
     document.getElementById("tituloDesarrollo").textContent = textos[idioma].tituloDesarrollo;
     document.getElementById("tituloDibujos").textContent = textos[idioma].tituloDibujos;
     document.getElementById("galeria").textContent = textos[idioma].galeria;
     document.getElementById("tituloRedes").textContent = textos[idioma].tituloRedes;

     //Párrafos
     document.getElementById("pokemonTexto").innerHTML = textos[idioma].pokemonTexto;
     document.getElementById("musicaTexto").textContent = textos[idioma].musicaTexto;
     document.getElementById("musicaTexto2").textContent = textos[idioma].musicaTexto2;
     document.getElementById("proyectosTexto").textContent = textos[idioma].proyectosTexto;
     document.getElementById("personajesFavoritos").textContent = textos[idioma].personajesFavoritos;
     document.getElementById("enemigosRW").textContent = textos[idioma].enemigosRW;
     document.getElementById("proyectosTexto2").textContent = textos[idioma].proyectosTexto2;
     document.getElementById("dibujoTexto").textContent = textos[idioma].dibujoTexto;
     document.getElementById("redesTexto").textContent = textos[idioma].redesTexto;

     const boton = document.getElementById("boton-idioma");
     boton.innerHTML = idioma === "es"
        ? '<img src="img/lenguaje/es_flag.png" alt="Español" width="40px"> ▼'
        : '<img src="img/lenguaje/en_flag.png" alt="English" width="40px"> ▼';

     document.getElementById("menu-idioma").classList.add("oculto");

}
