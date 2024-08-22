import { DBconfig } from "../Config/db.js";
import { Usuario } from "../Models/Usuario.js";
import { Endereco } from "../Models/Endereco.js";
import { Produto } from "../Models/Produto.js";
import { Categoria } from "../Models/Categoria.js";
import { Image } from "../Models/Image.js";
import { Produtos_Imagem } from "../Models/Produtos_Imagem.js";
import { Produtos_Categoria } from "../Models/Produto_Categoria.js";
import { Produtos_Opcoes } from "../Models/Produtos_Opcoes.js";



export const createTables = async () => {
    try {
        await DBconfig.authenticate();
        console.log('\nConexão com DB estabelecida com sucesso.\n');

        await DBconfig.sync({ alter: true });
        console.log('\nTabelas sincronizadas com sucesso.\n');

    } catch (error) {
        console.error('\nErro ao sincronizar as tabelas:\n', error);
    };
};

