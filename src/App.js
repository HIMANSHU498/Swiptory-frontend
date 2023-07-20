import "./App.css";
import AddStory from "./components/AddStory/AddStory";
import Bookmark from "./components/Bookmarkpage/Bookmark";
import EditStory from "./components/EditStory/EditStory";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import StoryPage from "./pages/StoryPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<Registerpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/story/:id" element={<StoryPage />} />
      <Route path="/addstory" element={<AddStory />} />
      <Route path="/editstory/:id" element={<EditStory />} />
      <Route path="/bookmarked" element={<Bookmark />} />
    </Routes>
  );
}

export default App;
