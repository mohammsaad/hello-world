import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track displayDiv = false;
    @track cityList=['jaipur','banglore','hyderabad'];
    showDivHandler(event){
        this.displayDiv=event.target.checked;
    }
}