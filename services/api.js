import axios from "axios";
const API_URL = "";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/productos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

//obtener detalles de un producto
export const fetchProductoDetails = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/productos/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details", error);
    throw error;
  }
};

//agregar un producto al carrito
export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, {
      userId,
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart", arror);
    throw error;
  }
};
