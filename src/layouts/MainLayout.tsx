import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import React from "react";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-transparent">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}