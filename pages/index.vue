<template>
<div class="" >
    <div class="h-screen  containerimg shadow-lg bg-center bg-cover max-w-full  ">
    <div class="text-center space-y-2  content">
        <h1 class="text-white sm:text-3xl lg:text-3xl xl:text-4xl font-bold">Single Store</h1>
        <h3 class="text-white sm:mt-4 sm:text-xl font-semibold">A Clothing Store That Suits Your Taste</h3>
        <br>
        <div class="space-x-4 flex justify-center">
          <button class="p-2 px-6  rounded-md text-gray-700 bg-white duration-500 hover:scale-105"><NuxtLink to="/products">Products</NuxtLink></button>
       
          <button class="p-2 px-6   rounded-md  text-gray-700 bg-white  duration-500 hover:scale-105"><NuxtLink >GetStarted</NuxtLink></button>
        </div>
    </div>
</div>
<div class="py-20">
<div class="flex justify-center items-center">
 
  <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
    <div class="flex flex-col justify-center items-center space-y-10">
      <div class="flex flex-col justify-center items-center ">
        <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9
         text-gray-800 ">Shop By Category</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
        <div class="relative group flex justify-center items-center h-full w-full">
          <img class="object-center object-cover h-full w-full"
           src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"  />
          <button class="bg-white rounded-md  duration-500 hover:scale-105 bottom-4 
          z-10 absolute text-base font-medium leading-none text-gray-700 py-3 w-36"
           >Woman</button>
          <div class="absolute opacity-0 transition duration-500 bottom-3 py-6 z-0
           px-20 w-36 bg-white bg-opacity-50"></div>
        </div>

        <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
          <div class="relative group flex justify-center items-center h-full w-full">
            <img class="object-center object-cover h-full w-full"
             src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="shoe-image" />
            <button class=" duration-500 hover:scale-105 bottom-4 z-10 absolute text-base
             font-medium leading-none rounded-md text-gray-800 py-3 w-36 bg-white">Men</button>
            <div class="absolute opacity-0  transition duration-500 bottom-3 py-6 z-0
             px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
          <div class="relative group flex justify-center items-center h-full w-full">
            <img class="object-center object-cover h-full w-full" 
            src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="watch-image" />
            <button class=" rounded-md bottom-4 z-10 duration-500 hover:scale-105
            absolute text-base font-medium leading-none text-gray-700 py-3 w-36
             bg-white"><NuxtLink to="category/electronics">Electronics</NuxtLink></button>
            <div class="absolute opacity-0  transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
        </div>

        <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
          <img class="object-center object-cover h-full w-full" 
          src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" 
           />
          <button class=" bottom-4 z-10 rounded-md absolute duration-500 hover:scale-105
          text-base font-medium leading-none text-gray-700 py-3 w-36 bg-white"
           ><NuxtLink to="category/jewelery">Jewelery</NuxtLink></button>
          <div class="absolute opacity-0  transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
       
      </div>
      
    </div>
  </div>
</div>
</div>
   <footer >
    <div class="bg-gray-100 py-4 text-gray-700">
      <div class="container px-4 mx-auto">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 my-4 w-full xl:w-1/5">
          <NuxtLink to="/" >
         <div class="ml-10"> <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 512 108"><defs><linearGradient id="logosSinglestore0" x1="67.345%" x2="-18.523%" y1="-26.004%" y2="22.988%"><stop offset="0%" stop-color="#FF7BFF"/><stop offset="35.016%" stop-color="#A0F"/><stop offset="100%" stop-color="#80C"/></linearGradient><linearGradient id="logosSinglestore1" x1="36.259%" x2="111.722%" y1="-19.363%" y2="44.998%"><stop offset="3.544%" stop-color="#FF7BFF"/><stop offset="57.654%" stop-color="#80C"/><stop offset="100%" stop-color="#311B92"/></linearGradient></defs><path fill="url(#logosSinglestore0)" d="M55.977 0c11.475 3.191 21.93 11.234 26.264 21.064c6.63 15.957 5.1 36.127-2.167 48.127c-6.12 9.83-15.555 15.063-26.392 14.936c-16.83-.128-30.472-13.532-30.6-30.383c0-16.85 13.26-30.766 30.6-30.766c2.805 0 6.85.39 11.44 2.304c0 0-3.3-1.954-11.775-3.267C28.995 18.824.26 37.276 6.89 79.786c9.18 16.34 26.775 27.447 46.792 27.319c29.452-.127 53.55-24.255 53.422-53.872C107.104 24.893 84.026.766 55.977 0Z"/><path fill="url(#logosSinglestore1)" d="M75.993 22.594c-4.08-8.553-12.495-15.319-22.822-18c-2.295-.638-4.717-.893-7.395-1.02c-3.952 0-7.777.51-11.73 1.531c-9.817 2.936-16.702 8.68-20.782 13.149c-5.227 6-8.67 12.255-10.71 18.51c0 .128-.127.256-.127.51c-.128.512-.638 2.043-.638 2.426c-.127.256-.127.639-.255.894l-.382 1.532c0 .128 0 .255-.128.383c-3.315 16.468 2.192 31.246 5.507 36.735c.83 1.373 1.51 2.519 2.193 3.57c-7.523-40.85 14.103-60.347 38.71-60.858c12.877-.255 25.754 4.979 32.002 15.447c-.383-5.745-.765-8.937-3.443-14.809Z"/><path d="M253.627 36.178c2.332 0 4.742.194 7.23.602c2.488.408 4.665.933 6.55 1.633V81.21c0 7.716-1.749 13.333-5.209 16.812c-3.478 3.48-8.765 5.209-15.859 5.209c-.37 0-.506 0-.875-.02v-8.338c3.965 0 6.88-.913 8.765-2.74c1.886-1.827 2.818-4.898 2.818-9.232v-4.1h-.505c-.991 1.632-2.371 2.914-4.1 3.886c-1.73.972-3.713 1.458-5.948 1.458c-2.799 0-5.344-.778-7.657-2.332c-2.314-1.555-4.179-4.063-5.578-7.503c-1.419-3.44-2.12-7.852-2.12-13.216c0-8.318 1.867-14.557 5.58-18.677c3.711-4.14 9.347-6.22 16.908-6.24Zm170.914-.021c5.986 0 10.592 1.982 13.838 5.947c3.227 3.965 4.859 10.03 4.859 18.211c0 16.054-6.238 24.081-18.677 24.081c-6.025 0-10.65-1.963-13.877-5.85c-3.226-3.887-4.84-9.95-4.84-18.153c0-16.17 6.24-24.236 18.697-24.236Zm-112.178-.017c11.234 0 16.85 8.066 16.85 24.198v3.187h-24.43c.117 3.168.583 5.637 1.42 7.444c.835 1.788 2.098 3.07 3.808 3.848s3.984 1.147 6.842 1.147c2.935 0 6.336-.544 10.184-1.633v8.416c-2.08.564-4.023.991-5.83 1.244a40.33 40.33 0 0 1-5.579.389c-4.956 0-8.999-.817-12.128-2.469c-3.129-1.652-5.442-4.237-6.957-7.774c-1.517-3.557-2.275-8.24-2.275-14.09c0-7.989 1.574-13.956 4.723-17.94c3.15-3.984 7.6-5.967 13.372-5.967Zm182.787 0c11.233 0 16.85 8.066 16.85 24.198v3.187h-24.43c.116 3.168.583 5.637 1.418 7.444c.836 1.788 2.1 3.07 3.81 3.848s3.985 1.147 6.841 1.147c2.935 0 6.336-.544 10.185-1.633v8.416c-2.08.564-4.024.991-5.831 1.244a40.319 40.319 0 0 1-5.579.389c-4.956 0-8.998-.817-12.127-2.469c-3.13-1.652-5.442-4.237-6.958-7.774c-1.515-3.557-2.274-8.24-2.274-14.09c0-7.989 1.575-13.956 4.723-17.94c3.149-3.984 7.6-5.967 13.372-5.967ZM148.072 19.445c2.216 0 4.432.136 6.608.427c2.178.292 4.101.68 5.753 1.205v8.94c-3.44-1.088-7.268-1.632-11.466-1.632c-8.494 0-12.75 2.916-12.75 8.727c0 1.574.272 2.876.797 3.926c.524 1.05 1.418 2.002 2.643 2.818c1.244.836 2.954 1.613 5.15 2.352l3.81 1.282c4.84 1.633 8.512 3.888 11.02 6.783c2.488 2.896 3.75 6.667 3.75 11.312c0 3.906-.854 7.269-2.584 10.068c-1.73 2.798-4.237 4.956-7.541 6.452c-3.304 1.497-7.288 2.235-11.934 2.235a44.95 44.95 0 0 1-7.347-.622c-2.584-.408-4.916-1.01-7.035-1.768v-8.98c5.015 1.633 9.756 2.43 14.247 2.43c3.906 0 6.802-.758 8.726-2.274c1.905-1.516 2.857-3.712 2.857-6.628c0-1.632-.291-2.993-.874-4.12c-.583-1.127-1.555-2.118-2.916-2.993c-1.36-.875-3.207-1.71-5.578-2.507l-3.81-1.283c-9.309-3.168-13.974-9.076-13.974-17.686c0-3.849.836-7.153 2.527-9.912c1.69-2.76 4.199-4.879 7.54-6.356c3.344-1.458 7.484-2.196 12.381-2.196Zm243.175.797v16.636h11.195v8.26h-11.195v21.807c0 2.138.233 3.83.72 5.054c.485 1.224 1.243 2.099 2.274 2.623c1.03.525 2.41.797 4.14.797c1.048 0 2.525-.175 4.45-.525v8.63a29.766 29.766 0 0 1-7.016.816c-4.88 0-8.571-1.283-11.117-3.867c-2.547-2.585-3.81-6.686-3.81-12.284V45.14h-7.133v-8.26h7.133l1.846-16.637h8.513Zm-34.168-.818c2.216 0 4.432.136 6.608.428c2.178.291 4.102.68 5.754 1.205v8.94c-3.44-1.088-7.27-1.633-11.467-1.633c-8.494 0-12.75 2.916-12.75 8.727c0 1.574.272 2.876.797 3.926c.524 1.05 1.418 2.002 2.643 2.818c1.244.836 2.954 1.613 5.15 2.352l3.81 1.283c4.839 1.632 8.513 3.887 11.02 6.783c2.488 2.896 3.751 6.666 3.751 11.311c0 3.907-.856 7.27-2.585 10.068c-1.73 2.799-4.237 4.956-7.541 6.452c-3.304 1.497-7.288 2.236-11.934 2.236a42.512 42.512 0 0 1-7.346-.603c-2.585-.408-4.917-1.01-7.036-1.769V72.97c5.015 1.633 9.757 2.43 14.247 2.43c3.906 0 6.802-.758 8.726-2.274c1.905-1.516 2.857-3.713 2.857-6.628c0-1.633-.291-2.993-.874-4.12c-.583-1.127-1.555-2.119-2.916-2.993c-1.36-.875-3.207-1.71-5.578-2.507l-3.81-1.283c-9.329-3.188-13.973-9.096-13.973-17.706c0-3.848.835-7.152 2.527-9.912c1.69-2.76 4.198-4.879 7.54-6.356c3.344-1.457 7.483-2.196 12.38-2.196ZM211.257 36.14c3.965 0 7.113 1.244 9.426 3.732c2.313 2.488 3.48 6.511 3.48 12.03v31.603h-10.34V52.7c0-2.624-.525-4.49-1.574-5.598c-1.05-1.108-2.547-1.671-4.49-1.671c-1.478 0-2.974.369-4.451 1.088c-1.478.72-2.663 1.827-3.557 3.323v33.702h-10.34V36.879h8.63l.777 4.995h.564c1.477-1.847 3.226-3.265 5.228-4.257c2.002-.99 4.217-1.477 6.647-1.477Zm-31.058.737v46.646H169.8V36.877h10.398Zm106.78-22.448v69.094h-10.34V14.429h10.34Zm184.633 21.884c.99 0 1.982.077 2.954.252v9.66c-.972-.175-2.157-.253-3.596-.253c-2.08 0-4.042.486-5.908 1.438c-1.847.953-3.284 2.274-4.276 3.965v32.147h-10.34V36.876h8.552l.816 6.414h.506c1.146-2.39 2.682-4.16 4.645-5.287c1.943-1.127 4.16-1.69 6.647-1.69Zm-47.07 7.735c-1.789 0-3.285.466-4.451 1.4c-1.166.932-2.06 2.565-2.683 4.936c-.621 2.371-.932 5.636-.932 9.834c0 4.257.31 7.56.932 9.912c.623 2.372 1.517 4.004 2.683 4.937c1.147.933 2.643 1.4 4.47 1.4c1.788.019 3.245-.448 4.411-1.361c1.147-.914 2.041-2.546 2.683-4.878c.641-2.333.932-5.578.932-9.757c0-4.276-.31-7.619-.932-10.01c-.623-2.39-1.516-4.061-2.702-4.994c-1.185-.933-2.643-1.42-4.412-1.42Zm-171.75.234c-3.674 0-6.434 1.205-8.28 3.635c-1.847 2.43-2.76 6.491-2.76 12.225c0 3.984.35 7.113 1.069 9.348c.72 2.235 1.71 3.79 2.974 4.645c1.263.856 2.876 1.283 4.82 1.283a7.988 7.988 0 0 0 3.654-.894c1.185-.583 2.118-1.4 2.799-2.41V44.75a20.012 20.012 0 0 0-4.276-.467Zm59.513-1.028c-1.594 0-2.935.408-4.004 1.205c-1.07.797-1.924 2.196-2.546 4.198c-.622 2.002-.952 4.742-.992 8.26h14.674c-.019-3.498-.33-6.258-.893-8.26c-.564-2.002-1.361-3.401-2.39-4.198c-1.031-.797-2.313-1.205-3.85-1.205Zm182.786 0c-1.593 0-2.934.408-4.003 1.205c-1.069.797-1.925 2.196-2.546 4.198c-.623 2.002-.953 4.742-.991 8.26h14.674c-.02-3.498-.33-6.258-.895-8.26c-.563-2.002-1.36-3.401-2.39-4.198c-1.03-.797-2.313-1.205-3.849-1.205ZM174.641 21.68c1.847 0 3.265.466 4.218 1.38c.952.913 1.438 2.176 1.438 3.79c0 1.632-.466 2.895-1.419 3.79c-.952.893-2.351 1.34-4.236 1.34c-1.847 0-3.247-.447-4.199-1.34c-.952-.895-1.418-2.158-1.418-3.79c0-1.633.466-2.896 1.418-3.81c.952-.894 2.352-1.36 4.199-1.36Z"/></svg>
        </div></NuxtLink>
           
          </div>

          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-purple-600">Company</h2>
            </div>
            <ul class="leading-8">
              <li><a href="#" class="hover:text-purple-400">About Us</a></li>
              <li><a href="#" class="hover:text-purple-400">Terms &amp; Conditions</a></li>
              <li><a href="#" class="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-purple-400">Contact Us</a></li>
            </ul>
          </div>
          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-purple-600">Support</h2>
            </div>
            <ul class="leading-8">
              <li><a href="#" class="hover:text-purple-400">Help Center</a></li>
              <li><a href="#" class="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-purple-400">Conditions</a></li>
              <li><a href="#" class="hover:text-purple-400">See More</a></li>
            </ul>
          </div>
          <div class="px-4 my-4  w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-purple-600">Connect With Us</h2>
            </div>
            <div class=" flex gap-4">
                <a href="#" class="inline-flex items-center justify-center h-8 w-8 
                border border-gray-200 rounded-full mr-1 hover:text-purple-400
                 hover:border-purple-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border
             border-gray-200 rounded-full mr-1 hover:text-purple-400 hover:border-purple-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border
             border-gray-200 rounded-full mr-1 hover:text-purple-400 hover:border-purple-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
   
   </footer> 
</div>




  
</template>



<style scoped>

.content{
  padding: 30%;
}
.containerimg {
  background-image: url('assets/imgs/cloth4.jpg') ;
}
</style>