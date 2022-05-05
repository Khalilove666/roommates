<template>
    <div class="notification">
        <span class="count">1</span>
        <img src="src/assets/bell.svg" alt="Bell icon" class="bell-img"/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "src/styles/_variables.scss";

.notification {
    position: relative;
}
.count {
    position: absolute;
    right: -15px;
    top: -17px;
    height: 20px;
    min-width: 20px;
    border-radius: 100%;
    background-color: $color-accent;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bell-img {
    height: 20px;
}
</style>