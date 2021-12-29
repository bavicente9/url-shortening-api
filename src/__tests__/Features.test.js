
import { render, screen } from "@testing-library/react"; 
import { Features } from "../components/features/Features";


describe('Features part', ()=>{
    it('It renders correctly 1st', ()=>{
        render(
            <Features />
        )
        const feature1 = screen.getByText(`Track how your links are performing across the web with our advanced statistics dashboard.`)

         expect(feature1).toBeInTheDocument()
    })
    it('It renders correctly 2nd', ()=>{
        render(
            <Features />
        )
        const feature1 = screen.getByText(`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`)

         expect(feature1).toBeInTheDocument()
    })
    it('It renders correctly 3rd', ()=>{
        render(
            <Features />
        )
        const feature1 = screen.getByText(`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`)

         expect(feature1).toBeInTheDocument()
    })

})