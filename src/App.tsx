import "./App.css";
import Routes from "./Routes";

function App() {
  const FETCH_POKEMON_BY_NAME = "FETCH_POKEMON_BY_NAME";
  const fetchPokemonByName = () => ({
    type: FETCH_POKEMON_BY_NAME,
    name,
  });
  const pokemonsReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_POKEMON_BY_NAME:
        return {
          ...state,
          pokemon: action.name,
        };
      default:
        return state;
    }
  };
  return (
    <>
      <h1>Start!</h1>
      <Routes />
    </>
  );
}
export default App;
