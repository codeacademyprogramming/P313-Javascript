// Transaction
/*
id:         >>    3345643
group       >>    Bakcell
identity    >>    055-555-55-55
amount      >>    2.50
paymentType >>    //ONLINE,NEGD
Time        >>    10.01.2020  12:22:33 
*/


//1.Bakcell uzre olan odenishler
//2.Meblegi 10m+ olan olan odenishler


/*
name: Html + Css
duration: 1.5ay
price: 100m
schedule: [2,4]
perTimeDuration: 2saat



Javascript
MsSql
.Net C#
.Net Asp Core
*/

function Course(name, duration, price, schedule, perTimeDuration) {
    this.name = name;
    this.duration = duration;
    this.price = price;
    this.schedule = schedule;
    this.perTimeDuration = perTimeDuration;
    this.operationTime= new Date()//operationTime;

    this.fullInfo = function () {
        return `${this.name} ${this.duration} (${this.price})`;
    }
}

let courses = Array();

/*
name: Html + Css
duration: 1.5ay
price: 100m
schedule: [2,4]
perTimeDuration: 2saat */

courses.push(new Course("Html + Css", 1.5, 100, [2, 4], 2));
courses.push(new Course("Javascript", 2, 150, [2, 4, 6], 2));
courses.push(new Course("MsSql", 1, 300, [2, 4, 6], 2.5));


// console.log(courses);


// for (let index = 0; index < courses.length; index++) {
//     let course = courses[index];
//     console.log(course.fullInfo());
// }

courses.forEach(function (course) {
    console.log(course.fullInfo());
});