<template>
    <div class="wrapper">
        <div class="d-flex justify-content-between">
            <div class="d-flex">
                <Logo/>
                <Search class="ms-4"/>
            </div>
            <div class="d-flex align-items-center justify-content-end">
                <a href="#" class="header-link">Places to stay</a>
                <a href="#" class="header-link">Mortgage</a>
                <a href="#" class="header-link">Experiences</a>
                <a href="#" class="header-link">About us</a>
                <Notification/>
                <div class="vertical-line ms-4 me-3"></div>
                <User/>
                <Language class="ms-3"/>
            </div>
        </div>
    </div>
    <div class="mobile-wrapper">
        <div>
            <img src="/src/assets/burger.svg" alt="burger btn"/>
        </div>
        <Logo/>
        <div>
            <img src="/src/assets/user.svg" alt="User"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import Search from "./Search.vue";
import Language from "./Language.vue";
import User from "./User.vue";
import Notification from "./Notification.vue";

// import {useMq} from "vue3-mq";

// const mq = useMq();

</script>

<style scoped lang="scss">
@import "src/styles/_variables.scss";
@import "src/styles/mixins";

.wrapper {
    padding: 30px 60px;

    @include media-breakpoint-down(md) {
        display: none;
    }

    .vertical-line {
        height: 100%;
        width: 1px;
        background-color: $color-gray-dark;
    }

    .header-link {
        text-decoration: none;
        color: $color-black;
        margin: 0 15px;
        font-size: 16px;

        &:hover {
            color: $color-accent;
        }
    }
}

.mobile-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    @include media-breakpoint-up(md) {
        display: none;
    }
}
</style>