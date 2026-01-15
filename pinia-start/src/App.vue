<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from '@/store/useProductStore.js';
import { useCartStore } from '@/store/useCartStore.js';

const cartStore = useCartStore()

const productStore = useProductStore()

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for = "product in productStore.products"
        :key = "product.name"
        :product = "product"
        @addToCart = cartStore.items.push(product)
      />
    </ul>
  </div>
</template>
