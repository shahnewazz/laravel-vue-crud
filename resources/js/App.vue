<script setup>
import { RouterLink, RouterView } from 'vue-router';

// You can add any script logic here if needed in the future
</script>
<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Welcome to Laravel Vue CRUD Application</h1>
        <!-- Your Vue components will be rendered here -->
         lets test

         <router-link :to="{name: 'Add'}">Add New</router-link>

         <RouterView></RouterView>
    </div>
</template>
