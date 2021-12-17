import ilustration from './illustration-working.svg'
import './Presentation.css'
export const Presentation = () => {



    return (
        <div className="presentation-container">
            <div className="presentation">
                <div className="presentation-info">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>

                        <button className="button-getStarted">Get Started</button>
                </div>

                <div className="presentation-img">
                    <img alt="ilustration working" src={ilustration} />
                </div>
            </div>
        </div>
    )
}