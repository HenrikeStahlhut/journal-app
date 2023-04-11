export default function Form (){
    return (
        <form>
            <label htmlFor="motto">Motto</label>
            <input type="text" id="motto"></input>
            <label htmlFor="textarea">Notes</label>
            <textarea cols="30" rows="5" id="textarea"></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}