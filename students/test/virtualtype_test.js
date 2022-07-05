const assert = require('assert');
const Student = require('../src/student');

describe("Virtual type", () => {
    it("article count", done => {
        const jason = new Student({name: "Jason", article: [{title: "First"}]})
        jason.save()
        .then(() => Student.findOne({name: "Jason"}))
        .then(student => {
            assert(student.article.length === 1);
            done();
        });
    });
})