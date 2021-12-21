import { useState, useEffect, memo } from "react"


//using memo to avoid rerender the same urls
const LiOutputUrl = memo(({ item, index,handleCopyShortUrl }) => {
    const shortenedLink = item.full_short_link
    return (
        < li key={index} className='shortenerBox-outputUrl' >
            <p>{item.original_link}</p>
            <nav className='shortenerBox-outputUrl-result' >
                <a rel='external' href={shortenedLink}> {shortenedLink}</a>
            </nav>
            <div className="buttons-outputUrl">
                <button id={`${index}-buttonCopy`} className='button-outputUrl-copy' onClick={() => handleCopyShortUrl(shortenedLink, index)}>Copy</button>
                <button id={`${index}-buttonCopied`} className='button-outputUrl-copied' >Copied!</button>
            </div>
        </li >
    )
})


export const OutputUrl = ({ urlList }) => {

    let [indexLinkCopied, setIndexLinkCopied] = useState(-1)
    let [lastIndexLinkCopied, setLastIndexLinkCopied] = useState(-1)

    //copy  teh shortened url to the clipboard
    const handleCopyShortUrl = (shortenedLink, indexUrl) => {
        navigator.clipboard.writeText(shortenedLink)
        setIndexLinkCopied(indexUrl)
    }

    //change the style of the copy button  
    useEffect(() => {
        if (indexLinkCopied !== -1) {
            const buttonCopy = document.getElementById(`${indexLinkCopied}-buttonCopy`)
            const buttonCopied = document.getElementById(`${indexLinkCopied}-buttonCopied`)
            
            buttonCopy.style.display = 'none'
            buttonCopied.style.display = 'block'
        }
        if (lastIndexLinkCopied !== -1) {
            const lastButtonCopy = document.getElementById(`${lastIndexLinkCopied}-buttonCopy`)
            const lastButtonCopied = document.getElementById(`${lastIndexLinkCopied}-buttonCopied`)
            
            lastButtonCopy.style = 'block'
            lastButtonCopied.style = 'none'
        }
        setLastIndexLinkCopied(indexLinkCopied)
        
    }, [indexLinkCopied]) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <ul className='shortenerBox-outputUrl-container'>

            {
                urlList.map((item, index) => {
                    return (
                        <LiOutputUrl index={index} item={item} handleCopyShortUrl = {handleCopyShortUrl} />
                    )
                })
            }
        </ul>
    )
}