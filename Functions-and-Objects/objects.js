// Creating objects using the Object keyword
// var course = new Object();

// course.title = "Javascript essential training";
// course.instructor = "Matovu Ronald";
// course.level = 1;
// course.published = true;
// course.views = 0;

// Using shorthand method to create objects
/* course = {
    title: "Javascript essential training",
    instructor: "Matovu Ronald",
    level: 1,
    publised: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}
console.log(course.views);
course.updateViews();
console.log(course.views); */

// Using object constructors
function Course(title, author, level, published, views) {
    this.title = title;
    this.author = author;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    }
}

var courses = [
    new Course('Javascript essential training', 'Matovu Ronald', 1, true, 5),
    new Course('Up and running with nodejs', 'Matovu Ronald', 1, false, 0)

]

console.log(courses[0].updateViews());