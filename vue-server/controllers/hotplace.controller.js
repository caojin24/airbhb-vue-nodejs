const mongoose = require('mongoose');
const Hotplace = require('../models/hotplace.model')
const Comment = require('../models/comment.model')
async = require("async");

exports.create = function(req, res, next) {
    const hotplace = new Hotplace(req.body);
    console.log(hotplace)
    if (hotplace.cateId !== 'null') {
        hotplace.save()
            .then(data => {
                res.json(data)
            })
    } else {
        res.status(401).send({ "errorCode": 101, "message": "请选择分类" });

    }
};

exports.update = function(req, res, next) {
    const hotplace = new Hotplace(req.body);
    const id = req.params.id;

    hotplace.findByIdAndUpdate(id, { $set: req.body }, { new: false })
        .then((data) => {
            res.send({ data });
        })
};


exports.list = function(req, res, next) {
    var page = (req.body.page) ? req.body.page : 1;
    var limit = (req.body.limit) ? req.body.limit : 5;
    var queryCondition = {};
    if (req.body.name && req.body.name.trim()
        .length > 0) {
        name = req.body.name;
        queryCondition = {
            "name": new RegExp(name, "i")
        }
    }

    if (req.body.cateId && req.body.cateId.trim()
        .length > 0) {
        cateId = req.body.cateId;
        queryCondition = {
            "cateId": cateId
        }
    }

    Hotplace.paginate(queryCondition, { page: page, limit: limit }, function(err, result) {
        async.map(result.docs, function(hotplace, done) {
            Comment.count({ hotplaceId: hotplace._id }, function(err, count) {
                if (err)
                    done(err);
                else {
                    hotplace.commentCount = count;
                    done(null, hotplace);
                }
            });
        }, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.json(result);
            }
        });
    });

}

exports.remove = function(req, res, next) {
    var id = req.params.id;
    Hotplace.findByIdAndRemove(id, function(err, doc) {
        res.json({ "message": "delete ok" });
    })

};

exports.removes = function(req, res, next) {
    var ids = req.body.ids;
    if (ids.length > 0) {
        Hotplace.remove({ _id: { $in: ids } })
            .then(deleted => {
                res.json({ "message": "delete ok" });
            })
    } else {
        res.status(404)
            .send({ "message": "404" });
    }
};