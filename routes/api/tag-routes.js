const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// http://localhost:3001/api/tags endpoint

//GET all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  .then(tagsData => res.json(tagsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
//GET tag by ID
router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  .then(tagsData => res.json(tagsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
//POST new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
//PUT update tag
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(tagData => {
    if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
    }
    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
//DELETE tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tagData => {
    if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
    }
    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
