import { useState } from "react";
import "./search.css"

function Search({ onSearchChange }) {
    const [state, setState] = useState(true);
    const toggleState = () => {
        setState(prev => !prev)
    }

    return (
        <>
            {state && <button onClick={toggleState} className="btn search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="Icon__StyledSVG-sc-lm07h6-0 fgDCVZ">
                    <path d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423" fill="currentColor" fillRule="evenodd"></path>
                </svg>
            </button>}
            {!state &&
                <>
                    <div className="search-bg"></div>
                    <form className="search-form" action="#" method="post">
                        <button className="btn" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="Icon__StyledSVG-sc-lm07h6-0 fgDCVZ">
                                <path d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </button>
                        <input className="search-input" type="search" name="search" onChange={(e) => onSearchChange(e.target.value)} placeholder="Votre recherche..." />
                        <button className="btn" onClick={toggleState} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" className="Icon__StyledSVG-sc-lm07h6-0 iQvEoU">
                                <path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </button>
                    </form>
                </>
            }
        </>
    );
}

export default Search;
