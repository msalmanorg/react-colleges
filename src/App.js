import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CourseCard } from "./components/course-card/courseCard";
import { Filter } from "./components/filter/filter";
import { Navbar } from "./components/navbar/navbar";
import { SearchSideBar } from "./components/search-side-bar/searchSideBar";
import logo from "./logo.svg";
import { CollegePage } from "./pages/college/college.page";
import { CorporatePage } from "./pages/corporate/corporate.page";
import { CoursesPage } from "./pages/courses/courses.page";
import { ExamsPage } from "./pages/exams/exams.page";
import { HomePage } from "./pages/home/home.page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/colleges" element={<CollegePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/exams" element={<ExamsPage />} />
                <Route path="/corporate" element={<CorporatePage />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
