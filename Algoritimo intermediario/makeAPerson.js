const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstAndLast;
    };

    this.getFirstName = function () {
        return firstAndLast.split(' ')[0];
    }
    this.getLastName = function () {
        return firstAndLast.split(' ')[1];
    }

    this.setFirstName = function (first) {
        return firstAndLast = (firstAndLast.split(' ')[0] = first) + " " + firstAndLast.split(' ')[1]
    }

    this.setLastName = function (last) {
        return firstAndLast = firstAndLast.split(' ')[0] + " " + (firstAndLast.split(' ')[1] = last)
    }

    this.setFullName = function (fullName) {
        return firstAndLast = fullName
    }

    return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"));
console.log(bob.getFirstName());