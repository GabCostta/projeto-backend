import { DBconfig } from "../Config/db.js";
import { Usuario } from "../Models/11.Usuario.js";
import { Endereco } from "../Models/2.Endereco.js";
import { Produto } from "../Models/4.Produto.js";
import { Categoria } from "../Models/1.Categoria.js";
import { Image } from "../Models/3.Image.js";
import { Produtos_Imagem } from "../Models/6.Produtos_Imagem.js";
import { Produtos_Categoria } from "../Models/5.Produto_Categoria.js";
import { Produtos_Opcoes } from "../Models/7.Produtos_Opcoes.js";



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

