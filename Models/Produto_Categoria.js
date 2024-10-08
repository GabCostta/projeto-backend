import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Categoria } from "./Categoria.js";
import { Produto } from "./Produto.js";

export const Produtos_Categoria = DBconfig.define("produtos_categoria", {})

Categoria.belongsToMany(Produto,
  {
    through: Produtos_Categoria,
    foreignKey: 'categoria_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Produto.belongsToMany(Categoria,
  {
    through: Produtos_Categoria,
    foreignKey: 'produto_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
