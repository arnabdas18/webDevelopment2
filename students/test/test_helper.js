const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students_tests', {useNewUrlParser: true});

mongoose.connection
.once('open', () => console.log("We are connected"))
.on('error', error => console.warn("An error occurred", error));

beforeEach((done) => {
    mongoose.connection.collections.students.drop();
    done();

    // const {students, articleBlog, comments} = mongoose.connection.collections;

    // students.drop(() => {
    //     comments.drop(() => {
    //         articleBlog.drop(() => {
    //             done();
    //         });
    //     });
    // });
});