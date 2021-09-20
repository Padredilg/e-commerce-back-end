const router = require('express').Router();
const { Category, Product } = require('../../models');

// http://localhost:3001/api/categories endpoint

//GET all categories 
router.get('/', (req, res) => {
  Category.findAll({
    attributes:['id','category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categoriesData => res.json(categoriesData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//GET category by ID
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product
    }
  })
  .then(categoriesData => res.json(categoriesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

//POST new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name.trim()
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//PUT update category
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name.trim()
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(categoryData => {
    if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//DELETE a category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
