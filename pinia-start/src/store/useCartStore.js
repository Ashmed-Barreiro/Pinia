import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const items =[]

export const useCartStore = defineStore('cartStore', () => {
    return {items};
})