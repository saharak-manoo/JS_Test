var Room = /** @class */ (function () {
    function Room(students) {
        this.students = students;
    }
    return Room;
}());
var s1 = {
    name: "Peter",
    age: 20
};
document.body.innerHTML = greeter(s1);
function greeter(person) {
    return "Hello, " + person.name;
}
new Room([s1]);
