import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen w-full bg-transparent overflow-x-hidden">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
