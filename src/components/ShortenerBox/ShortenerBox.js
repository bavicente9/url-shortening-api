import { useState } from 'react'
import './ShortenerBox.css'

export const ShortenerBox = () => {
    let [inputError, setInputError] = useState(false)
    /*
        //check if there is a error in the input url
        const checkInputUrl = () =>{
            const inputUr = document.getElementById('input-inputUrl')
            if (inputError) {
                inputUr.classList.add('input-error')
            } else {
                inputUr.classList.remove('input-error')
            } 
    
        }
    */

    return (
        <div className='shortenerBox-container'>
            <div className='shortenerBox'>


                <div className='shortenerBox-inputUrl-container'>
                    <div className='shortenerBox-inputUrl'>
                        <input id='input-inputUrl' className='input-error' placeholder='Shorten a link here...' type='url' />
                        <p className='error-message' >Please add a link</p>
                        <button id='button-inputUrl' type='submit' >Shorten it!</button>
                    </div>

                </div>


                <div className='shortenerBox-outputUrl-container'>

                    <div className='shortenerBox-outputUrl'>
                        <p>https://www.fronendmentor.io</p>
                        <nav className='shortenerBox-outputUrl-result' >
                            <a rel='external' href='google.com'> google.com</a>
                        </nav>
                        <button className='button-outputUrl-copy copied' >Copy</button>
                    </div>


                    <div className='shortenerBox-outputUrl'>
                        <p>https://www.fronendmentor.</p>
                        <nav className='shortenerBox-outputUrl-result' >
                            <a rel='external' href='google.com'> google.com</a>
                        </nav>
                        <button className='button-outputUrl-copied' >Copy</button>
                    </div>

                </div>


            </div>
        </div>
    )
}