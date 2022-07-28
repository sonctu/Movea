import Loader from "./components/Loader";
import { useStore } from "./store/store";
import { Route, Routes, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { lazy, Suspense, useEffect, useState } from "react";
import { auth } from "./utils/firebase";
import "swiper/css";
import "react-tuby/css/main.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const Movie = lazy(() => import("./pages/Movie"));
const TV = lazy(() => import("./pages/TV"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const TVDetail = lazy(() => import("./pages/TVDetail"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const History = lazy(() => import("./pages/History"));
const Bookmarked = lazy(() => import("./pages/Bookmarked"));
const Pornhub = lazy(() => import("./pages/Pornhub"));
const Explore = lazy(() => import("./pages/Explore"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const { setCurrentUser } = useStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, email, photoURL, uid } = currentUser;
        setCurrentUser({
          displayName,
          email,
          photoURL,
          uid,
        });
        setIsLoading(false);
      } else {
        setCurrentUser(null);
        setIsLoading(false);
      }
      return () => {
        unsub();
      };
    });
  }, [setCurrentUser]);

  if (isLoading) return <Loader></Loader>;
  return (
    <div className="App">
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/movie/:id"
            element={<MovieDetail></MovieDetail>}
          ></Route>
          <Route path="/tv/:id" element={<TVDetail></TVDetail>}></Route>
          <Route path="/bookmarked" element={<Bookmarked></Bookmarked>}></Route>
          <Route path="/history" element={<History></History>}></Route>
          <Route path="/pornhub" element={<Pornhub></Pornhub>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
          <Route path="/watch/movie/:id" element={<Movie></Movie>}></Route>
          <Route path="/watch/tv/:id" element={<TV></TV>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
