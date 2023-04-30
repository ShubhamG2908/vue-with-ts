<script setup lang="ts">
import { PorductService } from '@/services/prodcutService'
const service = new PorductService();
const productCategories = service.getProdcutCategory();

function generateLink(categoryName:string):string{
    return `/category/${categoryName}`;
}

</script>
<template>
    <div class="ma-5" v-for="category in productCategories" :key="category">
        <router-link :to="generateLink(category)">{{category}}</router-link>
    </div>
</template>