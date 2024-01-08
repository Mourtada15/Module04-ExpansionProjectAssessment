import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define('Product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('one', 'two'),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
  supplier: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default Product;