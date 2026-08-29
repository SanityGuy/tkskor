import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import About from "./pages/About";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/calculator"
                        element={<Calculator />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}