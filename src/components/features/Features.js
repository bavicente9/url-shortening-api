import './Features.css'
import icon_brand_recognition from './icon-brand-recognition.svg'
import icon_detailed_records from './icon-detailed-records.svg'
import icon_fully_customizable from './icon-fully-customizable.svg'

export const Features = () => {

    return (
        <div className='features-Container'>
            <div className='features'>
                <div className='features-Header'>
                    <h1>Advanced Statistics</h1>

                    <p>
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                </div>

                <div className='features-Elements'>
                    <span className='feature-BlueBar' />

                    <div className='feature'>
                        <div className='icon-Container'>
                            <img className='icon' alt='' src={icon_brand_recognition} />
                        </div>
                        <div className='feature-Info'>

                            <h2>
                                Brand Recognition
                            </h2>
                            <p>
                                Boost your brand recognition with each click. Generic links don't
                                mean a thing. Branded links help instil confidence in your content.
                            </p>
                        </div>
                    </div>

                    <div className='feature'>
                        <div className='icon-Container'>
                            <img className='icon' alt='' src={icon_detailed_records} />
                        </div>
                        <div className='feature-Info'>
                            <h2>
                                Detailed Records
                            </h2>
                            <p>
                                Gain insights into who is clicking your links. Knowing when and where
                                people engage with your content helps inform better decisions.
                            </p>

                        </div>
                    </div>
                    <div className='feature'>
                        <div className='icon-Container'>
                            <img className='icon' alt='' src={icon_fully_customizable} />
                        </div>
                        <div className='feature-Info'>
                            <h2>
                                Fully Customizable
                            </h2>
                            <p>
                                Improve brand awareness and content discoverability through customizable
                                links, supercharging audience engagement.
                            </p>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}