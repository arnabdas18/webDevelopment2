const assert = require('assert');
const Student = require('../src/student');

describe("Subdocument", () => {
    // it("Create a subdocument", done => {
    //     const jason = new Student({
    //         name: "Jason",
    //         article: [{title: "Javascript"}]
    //     });
    //     jason.save()
    //     .then(() => {
    //         Student.findOne({name: "Jason"})
    //         .then(student => {
    //             assert(student.article[0].title === "Javascript");
    //         });
    //         done();
    //     });
    // });

    // it("Adding new record", done => {
    //     const jason = new Student({name: "Jason", article: []});
    //     jason.save()
    //     .then(() => Student.findOne({name: "Jason"}))
    //     .then(student => {
    //         student.article.push({title: "MongoDB"});
    //         return student.save();
    //     })
    //     .then(() => Student.findOne({name: "Jason"}))
    //     .then(student => {
    //         assert(student.article[0].title === "MongoDB");
    //         done();
    //     });
    // });

    it("remove the records", done => {
        const jason = new Student({name: "Jason", article: [{title: "React Native"}]});
        jason.save()
        .then(() => Student.findOne({name: "Jason"}))
        .then(student => {
            student.article[0].remove();
            return student.save();
        })
        .then(() => Student.findOne({name: "Jason"}))
        .then(student => {
            assert(student.article.length === 0);
        });
        done();
    });
});