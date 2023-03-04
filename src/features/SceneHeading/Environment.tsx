import './environment.css'
export default function Environment() {
    return (
        <div className="environment">
            <select>
                <option value=""></option>
                <option value="INT">INT</option>
                <option value="EXT">EXT</option>
                <option value="INT/EXT">INT/EXT</option>
            </select>
        </div>
    )
}