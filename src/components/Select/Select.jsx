import './select.css'

function Select({ onChange, tagsList }) {
    const listCategories = ["Tous", ...tagsList];
    return (
        <label className='select'>Filtrer par catégorie
            <select name="category" onChange={(e) => onChange(e.target.value)}>
                {listCategories.map((categorie, index) => <option key={index} value={categorie}>{categorie}</option>)}
            </select>
        </label>
    )
}

export default Select;