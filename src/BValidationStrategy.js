export class BValidationStrategy {
    validate(obj) {
        if (obj.name !== "x") {
            return false;
        }
        if (obj.description.length >= 40) {
            return false;
        }
        return true;
    }
}