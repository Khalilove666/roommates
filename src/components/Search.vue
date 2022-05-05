<template>
    <div class="search-wrapper">
        <input class="search-input form-control" placeholder="Search something"/>
        <span class="search-btn">
            <img src="src/assets/search.svg" class="search-icon" alt="search icon">
        </span>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "src/styles/_variables.scss";

.search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 464px;
}

.search-input {
    border: 1px solid $color-gray-dark;
    border-radius: 30px;
    padding: 0 50px 0 30px;
    height: 60px;
}

.search-btn {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: $color-accent;
    position: absolute;
    right: 12px;
    cursor: pointer;
}

.search-icon {
    width: 12px;
    height: 12px;
}
</style>