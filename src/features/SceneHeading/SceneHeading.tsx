import Snippet from "../typer/Presenter/snippet";
import Environment from "./Environment";
import Location from "./Location";
import Time from "./Time";

import './scene_heading.css'
export default function SceneHeading() {
    return (
        <div className="scene-heading">
            <Environment/>
            <Location/>
            <Time/>
        </div>
    )
}