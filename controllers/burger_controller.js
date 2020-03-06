const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all((data) => {
        const hObject = {
            burgers: data
        };
        console.log(hObject)
        res.render('index', hObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger, function (result) {
        res.redirect('/');
    })
});

router.put('/api/burgers/:id', function (req, res) {
    let condition = req.params.id;

    burger.update(condition, function (result) {
        res.status(200).end();
    })
});

//delete devoured burger (when delete btn is clicked)
router.delete("/api/burgers/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;
  
    burger.delete(condition, function (result) {
      if (result.affectedRows === 0) {
        return res.status(404).end();
      }
     
      res.status(202).end();
    });
  });

module.exports = router;