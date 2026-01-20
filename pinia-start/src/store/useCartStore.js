import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'


export const useCartStore = defineStore('cartStore', () => {
    const items = ref([])




    //Getters
    const cantidad = computed(() => items.value.length)
    const isEmpty = computed(() => cantidad.value === 0)
    const grouper = computed(() => groupBy(items.value, (item) => item.name))
    const total = computed(() => items.value.reduce((acumulador, elemento) => acumulador + elemento.price, 0))

    //Actions
    function add(cont, item) {

        for (let index = 0; index < cont; index++) {
            items.value.push(item)
        }
    }

    /*function cantidad(){
            return items.value.length
        }*/

    function $reset() {
        items.value = []
    }

    const clearItem = (itemName) => (items.value = items.value.filter((item)=> item.name != itemName))
    const setItemCount = (item,count) => {
        
        clearItem(item.name)
        add(count,item)

    } 

    return { items, add, cantidad, isEmpty, grouper, $reset, total, clearItem, setItemCount};
})