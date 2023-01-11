import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Uebersicht({ data, setData }) {

    // initial fetch
    useEffect(() => {
        fetch('http://localhost:9999/api/personen')
            .then(res => res.json())
            .then(db => setData(db))
            .catch((err) => console.log(err));
    });

    return (
        <section>
            <Link to="/add" className="add-link">
                <button className="add">➕</button>
            </Link>

            {data.map((person, index) => {
                return (
                    <Link to={`/detail/${index}`} key={index} className="detail-link">
                        <fieldset className="card">
                            <legend>Personalia: {index + 1}</legend>
                            <p>Vorname: {person.vorname}</p>
                            <p>Nachname: {person.nachname}</p>
                        </fieldset>
                    </Link>
                );
            })}
        </section>
    );
}