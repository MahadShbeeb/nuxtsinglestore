
<template>
    <div >
       <header class="shadow-sm bg-white" >
        <nav class="container mx-auto p-4 flex justify-between gap-10">
             <div>
            <details class="group">
            <summary
                class="flex items-center justify-between gap-2 p-2 
                font-medium marker:content-none hover:cursor-pointer">
                <span class="flex gap-2 p-4 border-b-2 border-purple-500 border-opacity-0 
                    hover:border-opacity-100 hover:text-purple-500 duration-200 
                    cursor-pointer active font-semibold text-gray-800">
                    <span>Catagories</span>
                </span>
                <svg class="w-5 h-5 hover:text-purple-500 text-gray-800 transition
                group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg></summary>

            <article class="px-4 pb-4 ">
                <ul class="flex flex-col gap-1 pl-2 ">
                    <NuxtLink to="/products" class="text-left hover:text-purple-500" >All Catagories</NuxtLink>
                    <NuxtLink to="/category/jewelery" class="text-left hover:text-purple-500" >Jewelery</NuxtLink>
                    <NuxtLink to="/category/electronics" class="text-left hover:text-purple-500" >Electronics</NuxtLink>
                    <NuxtLink to="/category/mensClothing" class="text-left hover:text-purple-500" >Men's Clothing</NuxtLink>
                    <NuxtLink to="/category/womensClothing" class="text-left hover:text-purple-500" >Women's Clothing</NuxtLink></ul></article>
</details>
            </div>
            <div class="mt-7 "> 
            <NuxtLink to="/" class="p-4 border-b-2 border-purple-500 border-opacity-0 
            hover:border-opacity-100 hover:text-purple-500 duration-200 
            cursor-pointer active font-semibold text-gray-800"> Home </NuxtLink>       
            <NuxtLink to="/cart" class="p-4 border-b-2 border-purple-500 border-opacity-0 
            hover:border-opacity-100 hover:text-purple-500 duration-200 
            cursor-pointer active font-semibold text-gray-800"> Cart </NuxtLink> 
            </div>         
        </nav>
    </header>
    </div>
    <slot/>

    <footer class="max-w-screen-xl px-4 py-12 mx-auto space-y-8  overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-center gap-10">
        <nav class=" -mx-5 -my-2" v-for="(item,index) in footerItems" :key="index">
            <div class="px-5 py-2 ">
                <NuxtLink :to="`/${item.link}`" class="text-base leading-6 text-gray-500
                hover:text-gray-900">
                {{item.name}}
                </NuxtLink>
            </div>  
        </nav>  
        </div>   
    </footer>
</template>


<script setup>

const footerItems = [
    {
        name: "Home",
        link: "",
    },
    {
        name: "Products",
        link: "products",
    },
	{
        name: "About",
        link: "about",
	},
	{
        name: "Contact",
        link: "/",
	},
	{
        name: "Terms",
        link: "/",
	}
];

</script>

