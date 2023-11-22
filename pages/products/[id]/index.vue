<template>
    <div class="container">
        <ProductDetails :product="cartStore.product" />
    </div>
</template>

<script  setup>
const {id}=useRoute().params
import { useCartStore } from '../store/cart.js';
const cartStore = useCartStore();
await cartStore.fetchProductById(id)

if (!cartStore.product ){
throw createError({
  statusCode: 404,
  statusMessage: 'Page Not Found',
})
}


definePageMeta({
    layout:'products'
})
</script>