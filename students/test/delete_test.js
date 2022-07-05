const assert = require('assert');
const Student = require('../src/student');

describe("Delete the records", () => {
    let jason;

    beforeEach((done) => {
        jason = new Student({name: "Jason"});
        jason.save()
        .then(() => done());
    });

    it("Delete by id", done => {
        Student.findByIdAndDelete(jason._id)
        .then(() => Student.findOne({name: "Jason"}))
        .then((student) => {
            assert(student === null);
            done();
        });
    });
    it("Delete by name", done => {
        Student.findOneAndDelete({name: "Jason"})
        .then(() => Student.findOne({id: jason._id}))
        .then((student) => {
            assert(student === null);
            done();
        });
    });
    it("Delete Jason", done => {
        Student.deleteOne()
        .then(() => Student.findOne({id: jason._id}))
        .then((student) => {
            assert(student === null);
            done();
        });
    });
});