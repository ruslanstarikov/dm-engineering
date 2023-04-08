import {AValidationStrategy} from "./AValidationStrategy";
import {BValidationStrategy} from "./BValidationStrategy";

export class Validator {
    constructor(obj) {
        if(!obj.topic)
            throw new Error('Malformed input');
        switch(obj.topic){
            case "A":
                this.setStrategy(new AValidationStrategy())
                break;
            case "B":
                this.setStrategy(new BValidationStrategy())
                break;
            default:
                throw new Error('Validation strategy is not available. Strategy: ' + obj.topic);
        }
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    validate(obj) {
        return this.strategy.validate(obj);
    }
}