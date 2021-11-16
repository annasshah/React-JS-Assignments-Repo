import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {DetailsPage,Home,ErrorPage} from '.'



export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/details" element={<DetailsPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    )
}
