import './EntryForm.css';

export default function Form (){
    return (
        <form className='form'>
            <label htmlFor="motto" className='form__label'>Motto</label>
            <input type="text" id="motto"></input>
            <label htmlFor="textarea" className='form__label'>Notes</label>
            <textarea cols="30" rows="5" id="textarea"></textarea>
            <button type="submit" className='form__button'>Create</button>
        </form>
    )
}