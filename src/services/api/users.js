import axios from "axios"; 
import endPoints from "@/services/api";

const addUser = async (body) => {
    const config = {
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        }
    };

    const response = await axios.post(endPoints.users.addUsers, body, config);
    return response.data;
};

const updateUser = async (id, body) => {
    const config = {
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        }
    };

    const response = await axios.put(endPoints.users.updateUser(id), body, config);
    return response.data;
};

const deleteUser = async (id) => {
    const response = await axios.delete(endPoints.users.deleteUser(id));
    console.log(response.data);
    return response.data;
};

export { addUser, updateUser, deleteUser };