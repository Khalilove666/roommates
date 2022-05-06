<template>
    <div class="benefit-card-holder" @mouseenter="handleHover" @mouseleave="handleUnhover">
        <div class="card-logo">
            <img :src="img" :alt="obj.alt">
        </div>
        <p class="benefit-card-title">{{ obj.title }}</p>
        <p class="benefit-card-description">{{ obj.description }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{ obj: { img: string, imgSelected: string, title: string, description: string, alt: string } }>();

const img = ref(props.obj.img);

function handleHover() {
    img.value = props.obj.imgSelected;
}

function handleUnhover() {
    img.value = props.obj.img;
}
</script>

<style scoped lang="scss">
@import "/src/styles/variables";

.benefit-card-holder {
    border: 3px solid white;
    border-radius: 20px;
    padding: 40px 30px;
    cursor: pointer;

    &:hover {
        background-color: white;

        & > .card-logo {
            background-color: $color-accent;
        }
    }

    .card-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 20px;
        background-color: white;
    }

    .benefit-card-title {
        font-size: 28px;
        font-weight: 500;
        margin-top: 40px;
    }

    .benefit-card-description {
        font-size: 16px;
        font-weight: 400;
        margin-top: 20px;
        color: $color-gray-dark;
    }
}
</style>