import { useState, useEffect } from 'react'
import { OutputUrl } from './outputUrl/OutputUrl'
import './ShortenerBox.css'





export const ShortenerBox = () => {
    let [inputError, setInputError] = useState(false)
    let [urlList, setUrlList] = useState([])

    //get the short link throught the api 
    const getShortLink = (inputUrl) => {
        const peticion = fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)

        peticion.then(res => res.json())
            .then(res => {
                console.log(res.ok)
                //if there is a error it will change the state inputError
                if (res.ok) {
                    console.log(res.result);
                    setUrlList([...urlList, res.result])

                    if (inputError) setInputError(false)

                } else {
                    setInputError(true)
                }
            })
    }

    /*Show if there is a error */
    useEffect(() => {
        const errorMessage = document.getElementById('errorMessage-inputUrl')
        const urlInput = document.getElementById('input-inputUrl')
        if (inputError) {
            errorMessage.style.display = 'block'
            urlInput.classList.add('input-error')
        } else {
            errorMessage.style.display = 'none'
            urlInput.classList.remove('input-error')
        }
    }, [inputError])



    //get the input url and call to the api
    const handleShort = () => {
        const inputUrl = document.getElementById('input-inputUrl').value
        getShortLink(inputUrl);
    }

    return (
        <div className='shortenerBox-container'>
            <div className='shortenerBox'>


                <div className='shortenerBox-inputUrl-container'>
                    <div className='shortenerBox-inputUrl'>
                        <input id='input-inputUrl' className='' placeholder='Shorten a link here...' type='url' />
                        <p id='errorMessage-inputUrl' >Please add a link</p>
                        <button id='button-inputUrl' type='submit' onClick={() => { handleShort() }} >Shorten it!</button>
                    </div>

                </div>
                {
                    <OutputUrl urlList={urlList} ></OutputUrl>
                }
            </div>
        </div>
    )
}