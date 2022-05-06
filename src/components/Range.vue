<template>
    <div>
        <input id="rangeInput" class="full-width input-range" type="range" v-model="range" min="0" max="100"
               @input="handleInputChange($event)"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const range = ref(50);

function handleInputChange(e: any) {
    const target = e.target;
    const max = target.max;
    const val = target.value;
    const res = (val / max) * 100;
    const inputRange = document.getElementById("rangeInput");
    inputRange!.style.background = `linear-gradient(to right, #4079FF ${res}%, #F5F6F8 ${res}%)`;
}

onMounted(() => {
    const inputRange = document.getElementById("rangeInput");
    inputRange!.style.background = `linear-gradient(to right, #4079FF ${50}%, #F5F6F8 ${50}%)`;
})
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.input-range {
    -webkit-appearance: none;
    height: 4px;
    border-radius: 2px;
    background: $color-gray-light-2;
    outline: none;
}

.input-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 2px solid $color-accent;
    background-color: white;
    cursor: ew-resize;
    background-image: url("/src/assets/range-thumb.svg");
    background-repeat: no-repeat;
    background-position: center;
}

.input-range::-moz-range-thumb {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 2px solid $color-accent;
    background-color: white;
    cursor: ew-resize;
    background-image: url("/src/assets/range-thumb.svg");
    background-repeat: no-repeat;
    background-position: center;
}

.input-range::-moz-range-progress {
    background-color: $color-accent;
    border-radius: 2px;
}

</style>