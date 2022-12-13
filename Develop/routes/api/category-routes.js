const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  Category.findAll({
    include:[Product]
  })

  .then(categories=>{res.json(categories)})
  .catch(err=>{res.json(err)})

});

router.get('/:id', (req, res) => {

  Category.findOne({
    where:{
      id:req.params.id
    },
    include:[Product]
  })

  .then(categories=>{res.json(categories)})
  .catch(err=>{res.json(err)})


});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)

  .then(categories=>{res.json(categories)})
  .catch(err=>{res.json(err)})
});

router.put('/:id', (req, res) => {

  Category.update(req.body,{
    where:{
      id:req.params.id
    },
  })
  .then(categories=>{res.json(categories)})
  .catch(err=>{res.json(err)})
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    },
  })
  .then(categories=>{res.json(categories)})
  .catch(err=>{res.json(err)})
});

module.exports = router;
