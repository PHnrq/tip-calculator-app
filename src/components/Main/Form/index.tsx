import { Container } from "./style";


export function Form() {
    return (
        <Container>
            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" name="bill" className="bill" placeholder='10.00'/>

            <fieldset>
                <legend>Select Tip %</legend>

                <label htmlFor="tip-5" >
                    <input type="radio" name="tip" id="tip-5" value="5"/>
                    <span>5%</span>
                </label>
                

                <label htmlFor="tip-10" >
                    <input type="radio" name="tip" id="tip-10" value="10"/>
                    <span>10%</span>
                </label>

                <label htmlFor="tip-15" >
                    <input type="radio" name="tip" id="tip-15" value="15"/>
                    <span>15%</span>
                </label>

                <label htmlFor="tip-25" >
                    <input type="radio" name="tip" id="tip-25" value="25"/>
                    <span>25%</span>
                </label>

                <label htmlFor="tip-50" >
                    <input type="radio" name="tip" id="tip-50" value="50"/>
                    <span>50%</span>
                </label>

                <label htmlFor="tip-custom">
                    <input type="radio" name="tip" id="tip-custom"/>
                    <span>Custom</span>
                </label>
            </fieldset>

            <label htmlFor="numOfPeople">Number of People</label>
            <input type="number" name="numOfPeople" id="numOfPeople" className="numOfPeople" placeholder="1"/>
        </Container>
    );
}