import { Container } from "./style";

interface FormProps{
    handleSetBill: (bill: number) => void;
    handlesetNumOfPeople: (numOfPeople: number) => void
    handlesetTipValue: (tipValue: number) => void;
}

export function Form({handleSetBill ,handlesetNumOfPeople , handlesetTipValue}: FormProps) {

    function resetCustomTip(){
        const inputTip = document.querySelector("#tip-custom") as HTMLInputElement;

        inputTip.value = '';
    }

    function handletip(e: React.ChangeEvent<HTMLInputElement>) { //Função responsavel por alterar o valor da gorjeta do serviço.

        handlesetTipValue(Number(e.target.value))
    }

    function resetRadioTip(){
        const checkedRadio = document.querySelector('input[name="tip"]:checked') as HTMLInputElement;
        
        if(checkedRadio){
            checkedRadio.checked = false;
        }
    }

    return (
        <Container id="form">
            <label htmlFor="bill">Bill</label>
            <input 
                type="number" 
                id="bill" 
                name="bill" 
                className="bill" 
                placeholder='0'
                step={0.05}
                onChange={event => handleSetBill(Number(event.target.value))}
            />

            <fieldset>
                <legend>Select Tip %</legend>

                <label 
                    htmlFor="tip-5" 
                    onClick={resetCustomTip}
                >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-5" 
                        value="5"
                        onChange={handletip}
                        />
                    <span>5%</span>
                </label>
                

                <label 
                    htmlFor="tip-10" 
                    onClick={resetCustomTip}
                >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-10" 
                        value="10"
                        onChange={handletip}/>
                    <span>10%</span>
                </label>

                <label 
                    htmlFor="tip-15" 
                    onClick={resetCustomTip}
                >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-15" 
                        value="15"
                        onChange={handletip}/>
                    <span>15%</span>
                </label>

                <label 
                    htmlFor="tip-25" 
                    onClick={resetCustomTip}
                >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-25" 
                        value="25"
                        onChange={handletip}/>
                    <span>25%</span>
                </label>

                <label 
                    htmlFor="tip-50" 
                    onClick={resetCustomTip}
                >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-50" 
                        value="50"
                        onChange={handletip}/>
                    <span>50%</span>
                </label>

                <input 
                    type='number' 
                    name='tip' 
                    id='tip-custom' 
                    placeholder='Custom'
                    onFocus={resetRadioTip}
                    onChange={handletip}/>

            </fieldset>

            <div>
               <label htmlFor="numOfPeople">Number of People</label>
                <span id="validatedValue">Can't be zero</span>
            </div>
            <input 
                type="number" 
                name="numOfPeople" 
                id="numOfPeople" 
                className="numOfPeople" 
                placeholder="0"
                onChange={event => {
                            handlesetNumOfPeople(Number(event.target.value)) 
                            
                            const validatedValue = document.querySelector('#validatedValue') as HTMLSpanElement;

                            if(event.target.value === '0'){
                                validatedValue.classList.add('invalid-value');
                            }else{
                                validatedValue.classList.remove('invalid-value');
                            }
                        }}
                />
        </Container>
    );
}