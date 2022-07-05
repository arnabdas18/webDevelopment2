const assert = require('assert');
const mongoose = require('mongoose');
const Student = require('../src/student');
const ArticleBlog = require('../src/articleBlog');
const Comment = require('../src/comment');

describe("Association test", () => {
    let jason, articleBlog, comment;
    beforeEach(done => {
        jason = new Student({name: "Jason"});
        articleBlog = new ArticleBlog({title: "MongoDB", content: "Mongoose and mocha"});
        comment = new Comment({content: "Well done"});

        jason.articleBlog.push(articleBlog);
        articleBlog.comments.push(comment);
        comment.students = jason;

        Promise.all([jason.save(), articleBlog.save(), comment.save()])
        .then(() => done())
    });

    it("Associate student with articleBlog", done => {
        Student.findOne({name: "Jason"})
        .populate('articleBlog')
        .then(student => {
            assert(student.articleBlog[0].title === "MongoDB");
        });
        done();
    });

    it("nested populate", done => {
        Student.findOne({name: "Jason"})
        .populate({
            path: 'articleBlog',
            populate: {
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'students',
                    model: 'student'
                }
            }
        })
        .then(student => {
            assert(student.name === "Jason");
            assert(student.articleBlog[0].title === "MongoDB");
            assert(student.articleBlog[0].comments[0].content === "Well done");
            assert(student.articleBlog[0].comments[0].students.name === "Jason")
        });
        done();
    });
});