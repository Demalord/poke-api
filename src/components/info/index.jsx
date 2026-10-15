import './Style.css'

const fondo = [6, 94, 149, 9, 150, 3, 448, 384, 658, 445, 248, 25]

function Info() {
  return (
    <div className="c-info">
      <div className="c-info-fondo">
        {fondo.map((id) => (
          <img
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt=""
          />
        ))}
      </div>

      <div className="c-info-contenido">
        <h1 className="c-info-titulo">POKE API</h1>
        <p className="c-info-autor">Diego Esteban Mahecha Reyes</p>

        <img
          className="c-info-pikachu"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
        />
        <p className="c-info-pokemon">Pokémon</p>

        <div className="c-info-caja">
          Api con información de 1025 pokemones
        </div>

        <a className="c-info-link" href="https://github.com/diaztibata" target="_blank" rel="noreferrer">
          github.com/Demalord
        </a>
        <p className="c-info-version">v 1.0.1</p>
      </div>
    </div>
  )
}

export default Info
