import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from '../modules/LandingPage'
import { UploadPage } from '../modules/UploadPage'
import { EditorPage } from '../modules/EditorPage'

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/editor" element={<EditorPage />} />
            </Routes>
        </BrowserRouter>
    )
}