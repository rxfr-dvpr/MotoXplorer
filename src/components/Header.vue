<template>
    <header class="header">
        <swiper :pagination="true" :modules="modules" class="header-swiper" direction="vertical">
            <swiper-slide class="header-swiper-slide" v-for="(slide, idx) in store.slider" :key="idx">
                <img :src="slide.img" alt="" class="slide-img">
                <span :data-img="slide.img" class="bg-filter"></span>

                <div class="slide-container">
                    <div class="slide-descr">
                        <h1 class="slide-descr-title">{{ slide.descr.title }}</h1>
                        <p class="slide-descr-txt">{{ slide.descr.txt }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </header>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination } from 'swiper/modules';

import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Pagination],
            store: headerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    user-select: none;

    &-swiper {
        width: 100%;
        max-height: 100vh;
        
        &-slide {
            width: 100%;
            display: flex;
            align-items: center;
            background: var(--main-black);
            position: relative;

            .slide-container {
                max-width: 1335px;
                width: 100%;
                margin: 0 auto;
                padding: 0 15px;
            }

            .slide-img {
                width: 100%;
                height: 100%;                
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                object-fit: cover;
                object-position: center;
            }

            .bg-filter {
                width: 100%;
                height: 100%;                
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                background: rgba($color: #000000, $alpha: .6);
            }

            .slide-descr {
               max-width: 600px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 40px;

                &-title {
                    font-size: 70px;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                &-txt {
                    font-size: 24px;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}

</style>