import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    firstNumber;
    secondNumber;
    numberChangeHandler(event){
        const inputBoxName=event.target.name;
        if(inputBoxName=="firstName"){
            this.firstNumber=event.target.value;
        }else if(inputBoxName=="secondName"){
            this.secondNumber=event.target.value;
        }
    }
    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult=`Result of ${firstN}+${secondN} is ${firstN+secondN}`;

    }
    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult=`Result of ${firstN}+${secondN} is ${firstN-secondN}`;
        
    }
    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult=`Result of ${firstN}+${secondN} is ${firstN*secondN}`;
        
    }
    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult=`Result of ${firstN}+${secondN} is ${firstN/secondN}`;
        
    }
}