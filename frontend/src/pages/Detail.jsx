import { useParams } from "react-router-dom";

export default function Detail({ data }) {
  const params = useParams();
  // console.log(params.id);
  // console.log(data);

  return (
    <>
      {data.map((person, index) => {
        if (index === Number(params.id)) {
          return (
            < fieldset className="card" key={index} >
              <legend>Personalia: {index + 1}</legend>
              <p>Vorname: {person.vorname}</p>
              <p>Nachname: {person.nachname}</p>
              <p>Telefonnummer: {person.handynummer}</p>
              <p>E-Mail Adresse: {person.email}</p>
              <p>Beruf: {person.beruf}</p>
              <p>Verdienst: {person.verdienst} €</p>
              <p>Selbstständig: {person.selbstständig ? "Ja" : "Nein"}</p>
              <p>Bestandskunde: {person.bestandkunde ? "Ja" : "Nein"}</p>
            </fieldset >
          );
        }
        return null;
      })
      }
    </>
  );
}