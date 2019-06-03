// so let's do this now!
// let's do another one

function Person(fName, lName, age, height, weight) {
    this.firstName = fName;
    this.lastName = lName;
    this.height = height;
    this.weight = weight;
    this.stateChecker = function(money, mentalHealth) {
        if (money > 100) {
            console.log('you are rich');
        } else {
            console.log('you are fucked up');
        }

    };
    console.log("your name is:" + fName + lName);
    console.log('and you are: ' + height + 'cm and ' + weight + 'kg')
};
const details = new Person('hossein', 'mousavi', 20, 180, 90);
const myState = new stateChecker(10);
stateChecker();