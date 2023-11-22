<template>


  <div class="bg-gray-100 h-screen py-8">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold mb-4 hover:text-purple-500">Shopping Cart</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table class="w-full" v-if="cartStore.formattedCart.length">
                        <tbody v-for="item in cartStore.formattedCart" :key="item.id" class="mb-3">
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center space-x-6">
                                        <img class="h-30 w-20 mr-4" :src="item.image" alt="Product image">
                                        
                                        <span class="font-semibold">{{ item.title }}</span>
                                    </div>
                                </td>
                                <td class="py-4">${{item.price}}</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2 bg-purple-500 text-white text-lg" @click="cartStore.remove(item.id)" >-</button>
                                        <span class="text-center w-8">{{ item.quantity }}</span>
                                        <button class="border rounded-md py-2 px-4 ml-2  bg-purple-500 text-white text-lg" @click="cartStore.add(item.id)">+</button>
                                    </div>
                                </td>
                                <td class="py-4">${{ item.cost }}</td>
                                <td class="py-4"><button class="bg-transparent hover:bg-red-500 text-red-500   hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full" @click="cartStore.removeProduct(item.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span >Subtotal</span>
                        <span>${{ cartStore.total }}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>$0.00</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <hr class="my-2">
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total Products</span>
                        <span class="font-semibold">{{cartStore.productsTotal}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useCartStore } from '../store/cart.js';
const cartStore = useCartStore();
await cartStore.fetchProducts()

</script>

