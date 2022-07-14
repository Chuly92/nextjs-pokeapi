let favorites: number[];

const getLocalFavorites = () => {
  favorites = JSON.parse(localStorage.getItem('favorites') || '[]');  
}

const toggleFavorite = (id: number) => {
  console.log('toggle Favorite called');

  getLocalFavorites();
  
  if (favorites.includes(id)){
    favorites = favorites.filter(pokeID => pokeID !== id);
  } else{
    favorites.push(id);
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));

}

const existInFavorites = (id: number): boolean => { 
  
  if (typeof window === 'undefined') return false;
  
  getLocalFavorites();
  return favorites.includes(id);
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  existInFavorites,
  toggleFavorite,
  pokemons
}