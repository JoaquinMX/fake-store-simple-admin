const API = process.env.NEXT_PUBLIC_API_URL;
const endPoints = {
    auth: {
        login: `${API}/auth/login`,
        profile: `${API}/auth/profile`,
    },
    users: {
        getUser: (id) => `${API}/users/${id}`,
        allUsers: `${API}/users`,
        getUsers: (limit, offset) => `${API}/users?limit=${limit}&offset=${offset}`,
        addUsers: `${API}/users`,
        updateUser:  (id) => `${API}/users/${id}`,
        deleteUser:  (id) => `${API}/users/${id}`
    },
    products: {
        getProduct: (id) => `${API}/products/${id}`,
        allProducts: `${API}/products`,
        getProducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
        updateProduct:  (id) => `${API}/products/${id}`,
        deleteProduct:  (id) => `${API}/products/${id}`
    },
};

export default endPoints;