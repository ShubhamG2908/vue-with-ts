<script setup lang="ts">
const props = defineProps<{
    name: string;
}>();
</script>

<template>
    <h1>Value: {{ props.name }}</h1>
</template>