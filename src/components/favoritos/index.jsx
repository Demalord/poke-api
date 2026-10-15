import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'

function Favoritos() {
  const navigate = useNavigate();
  const [favoritos] = useState(() => {
    try {
      const guardados = JSON.parse(localStorage.getItem('favoritos') || '[]');
      return Array.isArray(guardados) ? guardados.filter(p => p && p.id && p.nombre) : [];
    } catch {
      return [];
    }
  });

  return (
    <>
      <h1 className="c-favoritos-titulo">Favoritos</h1>

      {favoritos.length === 0 ? (
        <p className="c-favoritos-vacio">
          Aún no tienes favoritos. Entra a un Pokémon y pulsa 🤍 para guardarlo.
        </p>
      ) : (
        <div className="c-lista">
          {favoritos.map((pokemon) => (
            <div
              key={pokemon.id}
              className="c-lista-pokemon"
              onClick={() => navigate(`/pokemon/${pokemon.nombre}`)}
            >
              <p>{pokemon.id}</p>
              <p>{pokemon.nombre}</p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={`Pokémon ${pokemon.nombre}`}
                width="auto"
                height="60"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Favoritos
