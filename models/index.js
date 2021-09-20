// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'cascade'
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'cascade'
})

Product.belongsToMany(Tag, {
  through: ProductTag,
  //as: 'product_tag',
  foreignKey: 'product_id'
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  //as: 'product_tag',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
