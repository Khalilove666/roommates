<template>
    <div class="d-flex">
        <div class="img-holder">
            <img src="src/assets/evelyn.jpg" class="user-img" alt="User picture">
        </div>
        <div class="d-flex flex-column ms-3">
            <span class="username">Richard Lucas</span>
            <span class="role">Renter</span>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "src/styles/_variables.scss";

.img-holder {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    overflow: hidden;

    .user-img {
        height: 56px;
    }
}

.username {
    font-size: 16px;
}

.role {
    font-size: 14px;
    color: $color-accent;
}
</style>