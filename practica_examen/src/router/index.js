import FoodList from '@/componentes/FoodList.vue'
import Home from '@/componentes/Home.vue'
import TrainingList from '@/componentes/TrainingList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:Home
    },
    {
      path:"/food",
      name:"food",
      component:FoodList

    },
    {
      path:"/training",
      name:"training",
      component:TrainingList
    }
  ],
})

export default router
