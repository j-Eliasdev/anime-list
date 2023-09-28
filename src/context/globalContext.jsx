import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_ALL_ANIME = "GET_ALL_ANIME";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, popularAnime: action.payload, loading: false };
    case GET_AIRING_ANIME:
      return { ...state, airingAnime: action.payload, loading: false };
    case GET_UPCOMING_ANIME:
      return { ...state, upcomingAnime: action.payload, loading: false };
    case GET_ALL_ANIME:
      return { ...state, allAnime: action.payload, loading: false };
    case SEARCH:
      return { ...state, searchResults: action.payload, loading: false };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    allAnime: [],
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    pictures: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      state.isSearch = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchAnime(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
      alert("Please enter a search term");
    }
  };

  const getAnime = async (currentPage) => {
    dispatch({ type: LOADING });
    

    try {
      let totalPages = null;
  
     
        const response = await fetch(`https://api.jikan.moe/v4/top/anime?per_page=25&page=${currentPage}`);
        const data = await response.json();
  
        // Actualiza el total de páginas si aún no lo hemos hecho.
        if (totalPages === null) {
          totalPages = data.pagination.last_visible_page;
        }
  
        // Combina los objetos de la respuesta con los objetos existentes.
        state.allAnime = [...state.allAnime, ...data.data];
        currentPage++;
      
  
      dispatch({ type: GET_ALL_ANIME, payload: state.allAnime });
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  };

  const getPopularAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_ANIME, payload: data.data.slice(0,10) });
  };
  const getAiringAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
    const data = await response.json();
    dispatch({ type: GET_AIRING_ANIME, payload: data.data });
  };

  const getUpcomingAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
    const data = await response.json();
    dispatch({ type: GET_UPCOMING_ANIME, payload: data });
  };

  const searchAnime = async (anime) => {
    dispatch({ type: LOADING });
    const response = await fetch(
      `${baseUrl}/search/anime?q=${anime}&order_by=popularity&sort=asc&sfw`
    );
    const data = await response.json();
    dispatch({ type: SEARCH, payload: data.data });
  };

  useEffect(() => {
    getPopularAnime();
    getAiringAnime();
    getAnime(currentPage);
    // getUpcomingAnime();
  }, [currentPage]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        searchAnime,
        setCurrentPage,
        currentPage,
        search,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
