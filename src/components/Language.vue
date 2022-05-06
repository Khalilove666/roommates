<template>
    <div class="dropdown">
        <button
            class="language-btn dropdown-toggle form-control width-fit-content"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            US
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">ES</a></li>
            <li><a class="dropdown-item" href="#">DE</a></li>
            <li><a class="dropdown-item" href="#">FR</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "/src/styles/_variables.scss";

.language-btn {
    border: 1px solid $color-gray-dark;
    border-radius: 30px;
    height: 60px;
    padding: 0 25px;
    font-weight: bold;
}
</style>