abstract class CreditBase {
    constructor() {
    }

    save(): void {
        console.log("Saved.");
    }

    abstract calculate(): void;
}

class CustomerCredit extends CreditBase {
    calculate(): void {
        console.log("It has been calculated according to customer credit");
    }
}

class MortgageCredit extends CreditBase {
    calculate(): void {
        console.log("It has been calculated according to mortgage credit");
    }

    anotherOperation() {
    }
}

let customerCredit = new CustomerCredit();
customerCredit.save();
customerCredit.calculate();

let morgageCredit = new MortgageCredit();
morgageCredit.save();
morgageCredit.calculate();
morgageCredit.anotherOperation();

let credit: CreditBase;
credit = new CustomerCredit();
credit = new MortgageCredit();