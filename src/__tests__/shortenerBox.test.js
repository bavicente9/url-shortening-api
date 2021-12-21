import { render, screen } from "@testing-library/react";
import { OutputUrl } from "../components/ShortenerBox/outputUrl/OutputUrl";
import { OutputUrl } from "../components/ShortenerBox/ShortenerBox";
const urlList =
    [
        {
            full_short_link: 'https://shrtco.de/LJDdm5',
            original_link: 'http://google.com'
        }
    ]


describe('ShortenerBox', () => {
    

    describe('output Url', () => {
        it('it renders and get the correct shorted link', () => {
            render(
                <OutputUrl urlList={urlList} />
            )
            const paragraph = screen.getByText('https://shrtco.de/LJDdm5')

            expect(paragraph).toBeInTheDocument()
        })
    })
}
)