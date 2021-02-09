import { LightningElement ,track} from 'lwc';

export default class Bmi extends LightningElement {
    weight;
    height;
    @track bmi;
    cardTitle='BMI Calculator';
    onweightchange(event){
        this.weight=parseFloat(event.target.value);
    }
    onheightchange(event){
        this.height=parseFloat(event.target.value);
    }
    
    calculatebmi(){
        this.bmi=(this.weight)/(this.height*this.height);
    }
}