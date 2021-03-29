/**
 * Created by chalosalvador on 17/2/21
 */

import api from "./api";

async function getAll() {
    return await api.get(`/products`);
}

async function getById(id) {
    return await api.get(`/products/${id}`);
}

async function create(data) {
    return await api.post(`/products`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

async function update(id, data) {
    return await api.put(`/products/${id}`, data);
}

async function deleteProduct(id) {
    return await api.delete(`/products/${id}`);
}

export const Product = {
    getAll,
    getById,
    create,
    update,
    delete: deleteProduct,
};
