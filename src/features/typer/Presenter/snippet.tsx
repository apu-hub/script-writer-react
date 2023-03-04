import Action from "./Parenthetical";
import Character from "./Character";
import Dialog from "./Dialog";
import Note from "./Action";

import '../snippet.css'
export default function Snippet() {
    return (
        <div className="snippet">
            <Note />
            <Character />
            <Action />
            <Dialog />
        </div>
    )
}