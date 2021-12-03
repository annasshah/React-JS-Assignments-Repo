import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../container/ErrorPage";
import Home from "../container/Home";

export default function RouterApp() {


    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
