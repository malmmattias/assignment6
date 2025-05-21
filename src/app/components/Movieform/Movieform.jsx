import Button, { SubmitButton } from "../SubmitButton/SubmitButton";
export function Movieform() {
  return (
    <form id="add-movie-form">

                <label htmlFor="title-field">Titel:</label>
                <input type="text" id="title-field" className="form-control" />

                <label htmlFor="rating-field">Betyg:</label>

                <select type="text" id="rating-field" className="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <SubmitButton value="Lägg till film" />
        </form>
  );
}

export default Movieform;