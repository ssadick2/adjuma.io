import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from "./pages/jobs/Jobs";
import News from "./pages/news/News";
import Home from "./pages/home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Community from "./pages/community/Community";
import NotFound from "./pages/notFound/NotFound";
import Navbar from './component/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='jobs' element={<Jobs/>}/>
        <Route path='community' element={<Community/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='signUp' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
