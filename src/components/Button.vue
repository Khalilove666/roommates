<template>
    <button class="btn-wrapper"  text="">{{text}}</button>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()

</script>

<style scoped lang="scss">
@import "src/styles/_variables.scss";

.btn-wrapper {
    background-color: $color-accent;
    border-radius: 30px;
    height: 60px;
    width: 100%;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 14px;
}
</style>