const router = require("express").Router();
const Rappers = require("../rappers/rappers-model");


router.get("/", (req, res) => {
    Rappers.getAll()
        .then(rappers => {
            res.status(200).json(rappers);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post("/", (req, res) => {
    Rappers.insert(req.body)
        .then(ids => {
            res.status(201).json({ data: ids });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

router.delete('/:id', (req, res) => {
    Rappers.remove(req.params.id)
    .then(count => {
        if (count) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: "not found" });
        }
      })
      .catch(error => next(error));
})

router.get('/:id', (req, res) => {
    Rappers.findById(req.params.id)
        .then(rapper => {
            res.status(201).json(rapper)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;
