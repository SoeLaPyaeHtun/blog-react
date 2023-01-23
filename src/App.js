import { Route, Routes } from "react-router";
import AddBlog from "./components/AddBlog";
import DetailBlog from "./components/DetailBlog";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <Header />
  
      <Routes>
        <Route path="/" element={<Home  />}></Route>
        <Route path="/add-blog" element={<AddBlog />}></Route>
        <Route path="/blogs/:blogid" element={<DetailBlog />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
