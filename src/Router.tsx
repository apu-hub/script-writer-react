import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRouter from "./features/home/Router";
import TyperRouter from "./features/typer/Router";

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={< HomeRouter />} />
                <Route path="/typer/*" element={< TyperRouter />} />
            </Routes>
        </BrowserRouter>
    )
}