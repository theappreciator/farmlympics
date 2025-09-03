import './App.css'
import useEscapeKey from './hooks/useEscPress';
import useHashRoute from './hooks/useHashRouter';
import FoodDetailsPage from './pages/FoodDetailsPage';
import GameDetailsPage from './pages/GameDetailsPage';
import GeneralDetailsPage from './pages/GeneralDetailsPage';
import HomePage from './pages/HomePage';
// import styles from './App.module.css'

function App() {

  const route = useHashRoute();

  useEscapeKey(() => {
    if (!route.isHome) {
      window.location.href = "/#";
    }
  });

  let Page;

  switch (route.route) {
    case "/game-details":
      Page = <GameDetailsPage eventId={route.queryParams.id}/>;
      break;
    case "/food-details":
      Page = <FoodDetailsPage eventId={route.queryParams.id}/>;
      break;
    case "/general-details":
      Page = <GeneralDetailsPage eventId={route.queryParams.id}/>;
      break;
    default:
      Page = <HomePage />;
  }

  return (
    <div >
      <main className="mt-6">{Page}</main>
    </div>
  )
}

export default App
