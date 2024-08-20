//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, getUserById, updateUser, deleteUser  } from "../Controllers/UserController.js";
import { authController } from "../Controllers/authController.js";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../Controllers/Cjs";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../Controllers/ProductController.js";
export const router = express.Router();

// resgistrar e login
router.post('/user/register', authController.register);
router.post('/user/login', authController.login);

//Usuário rotas
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


// Category routes
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

// Product routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);