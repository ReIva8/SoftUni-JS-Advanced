const expect = require('chai').expect

const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

describe('companyAdministration', function() {
    describe('hiringEmployee', function() {
        it('throws error for wrong position', () => {
            expect(() => companyAdministration.hiringEmployee('John','Worker', 3)).to.throw(Error, 'We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('John','Worker', 7)).to.throw(Error, 'We are not looking for workers for this position.');

        });
        it('returns message for successful hire', () => {
            expect(companyAdministration.hiringEmployee('Mary', 'Programmer', 3)).to.equal('Mary was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Angus', 'Programmer', 5)).to.equal('Angus was successfully hired for the position Programmer.');
        });
        it('returns message for decline', () => {
            expect(companyAdministration.hiringEmployee('Mary', 'Programmer', 1)).to.equal('Mary is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Gary', 'Programmer', 0)).to.equal('Gary is not approved for this position.');

        });
        describe('calculateSalary', function() {
            it('returns salary', () => {
                expect(companyAdministration.calculateSalary(5)).to.equal(75);
                expect(companyAdministration.calculateSalary(160)).to.equal(2400);
                expect(companyAdministration.calculateSalary(0)).to.equal(0);

            });
            it('returns salary with bonus', () => {
                expect(companyAdministration.calculateSalary(161)).to.equal(3415);
                expect(companyAdministration.calculateSalary(200)).to.equal(4000);

            });
            it('Invalid hours.', () => {
                expect(() => companyAdministration.calculateSalary('a')).to.throw();
                expect(() => companyAdministration.calculateSalary(-1)).to.throw();
            });
        });
        describe('firedEmployee', function() {
            it('returns shortened array', () => {
                expect(companyAdministration.firedEmployee(['John', 'Sarah', 'Mary'], 1)).to.equal('John, Mary');
                expect(companyAdministration.firedEmployee(['John'], 0)).to.equal('');
                expect(companyAdministration.firedEmployee(['John', 'Sarah', 'Mary'], 0)).to.equal('Sarah, Mary');


            });
            it('Invalid input', () => {
                expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],"1")).to.throw(Error, "Invalid input");
                expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],1.5)).to.throw(Error, "Invalid input");
                expect(()=>companyAdministration.firedEmployee('1',"1")).to.throw(Error, "Invalid input");
                expect(()=>companyAdministration.firedEmployee(5,1)).to.throw(Error, "Invalid input");
                expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],3)).to.throw(Error, "Invalid input");
                expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],-1)).to.throw(Error, "Invalid input");
                expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],7)).to.throw(Error, "Invalid input");

            });
        });
    });
});