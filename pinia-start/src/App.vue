<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from '@/store/useProductStore.js';
import { useCartStore } from '@/store/useCartStore.js';
import { storeToRefs } from "pinia";

const cartStore = useCartStore()
const ProductStore = useProductStore()
ProductStore.fill()

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for = "product in ProductStore.productsRef"
        :key = "product.name"
        :product = "product"
        @addToCart = cartStore.add($event,product)
      />
    </ul>
  </div>
</template>
