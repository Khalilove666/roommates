<template>
    <div class="container">
        <div class="footer">
            <div class="logo-and-socials-wrapper">
                <Logo/>
                <div class="d-flex">
                    <div class="logo-social" v-for="item in socials" :key="item.id"
                         :class="item.id !== 1 ? 'ms-3': ''">
                        <img :src="'src/assets/social/'+ item.icon" alt="Social media youtube">
                    </div>
                </div>
            </div>
            <div class="stores-wrapper">
                <div class="logo-store">
                    <img src="src/assets/store/google-play.svg" alt="Mobile store google play">
                </div>
                <div class="logo-store">
                    <img src="src/assets/store/apple-store.svg" alt="Mobile store google play">
                </div>
            </div>
        </div>
    </div>
    <div class="horizontal-divider"></div>
    <div class="container">
        <div class="footer">
            <div class="footer-links-holder">
                <a href="#" class="footer-link">Releases</a>
                <a href="#" class="footer-link">Privacy</a>
                <a href="#" class="footer-link">Terms</a>
                <a href="#" class="footer-link">Terms for brokers</a>
                <a href="#" class="footer-link">Do you have any questions? visit our FAQ</a>
            </div>
            <span class="footer-link text-align-center">Rommates Tecnologia LTDA - CNPJ 18.805.299/0001-17 - CRECI/SP nº 037469-J</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";

const socials = [
    {
        id: 1,
        icon: "youtube.svg",
    },
    {
        id: 2,
        icon: "linkedin.svg",
    },
    {
        id: 3,
        icon: "instagram.svg",
    },
    {
        id: 4,
        icon: "facebook.svg",
    },
]
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/mixins";

.footer {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    @include media-breakpoint-down(lg) {
        flex-direction: column;
        & > :nth-child(2) {
            margin-top: 30px;
        }
    }
}

.logo-and-socials-wrapper {
    display: flex;
    align-items: center;
    @include media-breakpoint-down(lg) {
        flex-direction: column;
        align-items: center;
    }

    & > :nth-child(2) {
        margin-left: 40px;
        @include media-breakpoint-down(lg) {
            margin-left: 0;
            margin-top: 30px;
        }
    }
}

.stores-wrapper {
    display: flex;
    @include media-breakpoint-down(lg) {
        flex-direction: column;
        align-items: center;
    }

    & > :nth-child(2) {
        margin-left: 20px;
        @include media-breakpoint-down(lg) {
            margin-left: 0;
            margin-top: 30px;
        }
    }
}

.logo-social {
    width: 40px;
    height: 40px;
    border: 1px solid $color-gray-light-2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-store {
    width: 180px;
    height: 50px;
    border: 1px solid $color-gray-light-2;
    border-radius: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media-breakpoint-down(lg) {
        width: 100%;
    }
}

.horizontal-divider {
    height: 1px;
    background-color: $color-gray-dark;
    width: 100%;
}

.footer-links-holder {
    display: flex;
    justify-content: space-between;

    & > a:not(:first-child) {
        margin-left: 30px;
    }

    @include media-breakpoint-down(lg) {
        flex-direction: column;
        align-items: center;
        & > a:not(:first-child) {
            margin-left: 0;
            margin-top: 20px;
        }
    }
}

.footer-link {
    font-size: 12px;
    text-decoration: none;
    color: $color-gray-dark;
}


</style>