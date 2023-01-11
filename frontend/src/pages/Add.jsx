export default function Add() {

    function submit(e) {
        e.preventDefault();
        const form = new FormData(e.target);
        console.log(form);
        // POST fetch
        fetch('http://localhost:9999/api/personen/add',
            {
                method: "POST",
                body: form
            })
            .then(response => {
                if (response.status === 200) {
                    console.log("ALLES GUT");
                } else {
                    console.log("ETWAS IST KAPUTT");
                }
            });

    }


    return (
        <>
            <h1>Add Friends👇</h1>
            <form onSubmit={submit} className="form">
                <label name="vorname">Vorname: </label>
                <input type="text" placeholder="karl" name="vorname"></input>

                <label name="nachname">Nachname: </label>
                <input type="text" placeholder="van Horst" name="nachname"></input>

                <label name="alter">Alter: </label>
                <input name="alter" type="number"></input>

                <label name="telefonnummer">Telefonnummer: </label>
                <input type="number" name="telefonummer" />

                <label name="email">E-Mail Adresse: </label>
                <input type="email" name="email" />

                <label name="beruf">Beruf: </label>
                <input type="text" name="beruf" />

                <label name="verdienst">Verdienst: </label>
                <input type="number" name="verdienst" />

                <label for="selbstständig">Selbstständig: </label>
                <select name="selbstständig">
                    <option value="true">Ja</option>
                    <option value="false">Nein</option>
                </select>

                <label for="bestandskunde">Bestandskunde: </label>
                <select name="bestandskunde" id="">
                    <option value="true" >Ja</option>
                    <option value="false" >Nein</option>
                </select>

                <button type="submit" className="duck">🦆</button>
            </form>
        </>
    );
}