import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1>🎮 Bienvenido a GameTracker</h1>
      <p>
        Organiza, explora y reseña tus videojuegos favoritos.
      </p>

      <section className="home-section">
        <h2>📚 Tu biblioteca</h2>
        <p>
          Agrega los juegos que posees, lleva registro de tus títulos
          pendientes y mantén tu colección actualizada.
        </p>
      </section>

      <section className="home-section">
        <h2>⭐ Tus reseñas</h2>
        <p>
          Escribe reseñas, guarda tus impresiones y comparte tus experiencias de juego.
        </p>
      </section>

      <section className="home-section">
        <h2>📊 Estadísticas</h2>
        <p>
          Visualiza cuánto tiempo has jugado, tus géneros favoritos y más datos interesantes.
        </p>
      </section>
    </div>
  );
}

export default Home;