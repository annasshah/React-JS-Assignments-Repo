import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Home,QuestionSection,ResultSection,ErrorPage } from '.'



export default function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/question-section' element={<QuestionSection/>} />
                <Route path='/result-section' element={<ResultSection/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </Router>
    )
}
