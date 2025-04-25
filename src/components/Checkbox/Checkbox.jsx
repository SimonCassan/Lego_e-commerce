import "./checkbox.css"

function CheckBox({ toggleAvailable }) {
    return <label className="checkbox">N'afficher que les éléments disponibles<input type="checkbox" name="checkAvailable" onChange={toggleAvailable} /></label>
}

export default CheckBox;