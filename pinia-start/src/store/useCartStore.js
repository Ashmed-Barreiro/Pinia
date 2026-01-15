import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCartStore = defineStore('cartStore', () => {
    const items =ref([])

    function add(cont, item) {

        for (let index = 0; index < cont; index++) {
        items.value.push(item)
        }
  
}

    return {items, add};
})