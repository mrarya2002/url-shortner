import { Route, Routes } from "react-router-dom";
import ShortenUrlPage from "./pages/ShortenUrlPage";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage"
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

// <PrivateRoute publicPage={true}>
//      <RegisterPage />
// </PrivateRoute>

const AppRouter = () => {
  const hideHeaderFooter = location.pathname.startsWith("/s");

    return (
        <>
        {!hideHeaderFooter && <Header /> }
        <Toaster position='bottom-center'/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/s/:url" element={<ShortenUrlPage />} />

          <Route path="/register" element={<PrivateRoute publicPage={true}><Register /></PrivateRoute>} />
          <Route path="/login" element={<PrivateRoute publicPage={true}><Login /></PrivateRoute>} />
          
          <Route path="/dashboard" element={ <PrivateRoute publicPage={false}><Dashboard /></PrivateRoute>} />
          <Route path="/error" element={ <ErrorPage />} />
          <Route path="*" element={ <ErrorPage message="We can't seem to find the page you're looking for"/>} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </>
    );
}


export default AppRouter;

export const SubDomainRouter = () => {
    return (
        <Routes>
          <Route path="/:url" element={<ShortenUrlPage />} />
        </Routes>
    )
}