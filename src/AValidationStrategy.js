export class AValidationStrategy {
    validate = function(obj) {
        if (obj.name !== "a") {
            return false;
        }
        if (obj.description.length <= 10 || obj.description.length >= 100) {
            return false;
        }
        return true;
    }
}