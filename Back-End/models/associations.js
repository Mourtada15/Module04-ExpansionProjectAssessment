import User from "./userModel.js";
import Product from "./productModel.js";

User.hasMany(Product, { 
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Product.belongsTo(User, { foreignKey: 'userId' });

export default { User, Product };