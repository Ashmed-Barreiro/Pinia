import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import products from '../data/products.json'

export const useProductStore = defineStore('productStore', () => {
    const productsRef = ref([]) 

    function fill(){

        productsRef.value =  products

    }
    return {productsRef, fill};

})