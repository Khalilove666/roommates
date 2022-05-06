<template>
    <div class="home-wrapper">
        <div class="bg-wrapper">
            <div class="home-text-holder">
                <h1 class="home-text">See how Roommates Home Loans can help</h1>
                <Button text="MORTGAGE CALCULATOR" class="calc-btn"/>
            </div>
        </div>
        <div class="container">
            <div class="home-card">
                <div class="d-flex justify-content-center full-width">
                    <h1 class="card-title text-align-center">Take the easy first step toward a mortgage</h1>
                </div>
                <p class="mt-5">Property value</p>
                <div class="input-holder">
                    <input class="input form-control" placeholder="000000"/>
                </div>
                <div class="mt-4 d-flex justify-content-between">
                    <span>Term</span>
                    <b>30 years</b>
                </div>
                <label class="mt-4">Down payment: <b><span class="color-accent">R$</span>125.00</b></label>
                <Range class="mt-4"/>
                <div class="mt-4 d-flex justify-content-between">
                    <span>10%</span>
                    <span>90%</span>
                </div>
                <div class="mt-4 financing-box d-flex justify-content-between align-items-center">
                    <span>Financing</span>
                    <b><span class="color-accent">R$</span>XXX.XXX</b>
                </div>
                <p class="mt-4">CPF</p>
                <input class="input input-cpf form-control" value="XXX.XXX.XXX-XX"/>
                <Button class="mt-4" text="FUNDING CONSULTATION"/>
            </div>
            <div class="benefits-holder">
                <h1 class="text-align-center">Benefits</h1>
                <div class="row gy-4 g-0 g-sm-4 mt-4">
                    <div class="col-12 col-sm-6 col-xl-3" v-for="item in benefits" :key="item.id">
                        <BenefitCard :obj="item" class="full-height"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import {ref} from "vue";
import Range from "../components/Range.vue";
import BenefitCard from "../components/BenefitCard.vue";

const benefits = [
    {
        id: 1,
        title: "Low down payments",
        description: "We offer a variety of loan options to meet your unique needs.",
        img: "low-price.svg",
        imgSelected: "low-price-selected.svg",
        alt: "Low-price icon",
    },
    {
        id: 2,
        title: "Works with your timeline",
        description: "Count on us to respond ASAP and always meet deadlines.",
        img: "timeline.svg",
        imgSelected: "timeline-selected.svg",
        alt: "Timeline icon",
    },
    {
        id: 3,
        title: "Best in class service",
        description: "Clear communication, friendly staff, and local market expertise.",
        img: "discussion.svg",
        imgSelected: "discussion-selected.svg",
        alt: "Discussion icon",
    },
    {
        id: 4,
        title: "Total transparency",
        description: "We'll always keep you and your agent informed and up-to-date.",
        img: "mystery.svg",
        imgSelected: "mystery-selected.svg",
        alt: "Mystery icon",
    },
]
</script>

<style scoped lang="scss">
@import "/src/styles/mixins";
@import "/src/styles/variables";

.home-wrapper {
    background-color: $color-gray-light;
}

.bg-wrapper {
    width: 100%;
    height: 666px;
    display: flex;
    justify-content: center;
    background: url("/src/assets/bg.png") no-repeat center;
    @include media-breakpoint-only(xs) {
        background: url("/src/assets/bg-mobile.png") no-repeat center;
        height: 538px;
        background-size: 580px 538px;
    }


    .home-text-holder {
        padding: 0 15px;
        max-width: 930px;
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @include media-breakpoint-only(xs) {
            margin-top: 50px;
        }

        .home-text {
            color: white;
            font-size: 72px;
            font-weight: 600;
            text-align: center;
            @include media-breakpoint-only(xs) {
                font-size: 36px;
            }
        }

        .calc-btn {
            max-width: 290px;
        }
    }
}

.home-card {
    position: relative;
    top: -167px;
    max-width: 930px;
    border-radius: 20px;
    padding: 80px 95px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    box-shadow: 21.5556px 43.1111px 53.0598px rgba(21, 27, 37, 0.07), 2.48718px 4.1453px 17.4103px -9.11966px rgba(28, 69, 97, 0.06), 29.8462px 43.9402px 140.94px -19.8974px rgba(12, 25, 71, 0.08);
    @include media-breakpoint-only(xs) {
        padding: 50px 20px;
        top: -229px;
    }

    .card-title {
        max-width: 560px;
    }

    .input-holder {
        position: relative;
        display: flex;
        align-items: center;

        &::before {
            content: "R$";
            color: $color-accent;
            position: absolute;
            left: 20px;
        }
    }

    .input {
        border: 1px solid $color-gray-dark;
        border-radius: 30px;
        padding: 0 50px;
        height: 60px;
    }

    .color-accent {
        color: $color-accent;
    }

    .financing-box {
        background-color: #F4F7FF;
        padding: 20px;
        border-radius: 10px;
    }

    .input-cpf {
        padding: 0 20px;
    }
}

.benefits-holder {
    position: relative;
    top: -83px;
}

</style>