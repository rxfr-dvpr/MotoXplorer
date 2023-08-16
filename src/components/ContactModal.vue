<template>
  <button class="contact-btn" @click="modalVisible = true">перезвоните мне</button>

    <transition name="fade-modal">
        <div class="contact__modal" v-show="modalVisible">
            <form @submit.prevent class="contact__modal-content">
                <button class="close-btn" @click="modalVisible = false"><i class="fal fa-times"></i></button>

                <p class="modal__title">{{ store.title }}</p>

                <span class="inp-box">
                    <label for="nameInp" class="inp-label">{{ store.nameInp.label }}</label>
                    <input type="text" id="nameInp" class="modal__name-inp modal-inp" v-model="store.nameInp.value" :placeholder="store.nameInp.plcHolder">
                </span>

                <span class="inp-box">
                    <label for="telInp" class="inp-label">{{ store.telInp.label }}</label>
                    <input type="number" id="telInp" class="modal__tel-inp modal-inp" v-model="store.telInp.value" :placeholder="store.telInp.plcHolder">
                </span>

                <button class="submit-btn">{{ store.btnValue }}</button>

            </form>
        </div>
    </transition>
</template>

<script>
import { cnctModalStore } from "@/stores/cnctModalStore.js";
export default {
    name: 'Contact Modal',
    data() {
        return {
            modalVisible: false,
            store: cnctModalStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.contact-btn {
    border-radius: 9px;
    font-size: 14px;
    color: var(--main-white);
    text-transform: capitalize;
    padding: 12px 20px;
    border: 0;
    background: transparent;
    background: rgba(255, 255, 255, 0.40);

    &:hover {
        background: var(--main-blue);
    }
}

.contact__modal {
    width: 100%;
    height: 100vh;
    background: rgba(18, 18, 20, 0.80);
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    padding: 0 15px;

    &-content {
        max-width: 1075px;
        width: 100%;
        padding: 85px 15px;
        background: var(--main-white);
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
        border-radius: 10px;
        position: relative;
        text-align: center;

        .modal__title {
            font-size: 24px;
            font-weight: 700;
            color: var(--main-black);

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .inp-box {
            max-width: 350px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            text-align: start;

            .inp-label {
                font-size: 14px;
                font-weight: 500;
                color: var(--main-black);
                text-transform: capitalize;
            }

            .modal-inp {
                width: 100%;
                border-radius: 8px;
                border: 0.5px solid #787878;
                background: transparent;
                padding: 14px 10px;
                color: var(--main-blue);
                font-size: 14px;
                font-weight: 600;

                &::placeholder {
                    color: var(--main-black);
                    text-transform: capitalize;
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }

        .submit-btn {
            background: var(--main-blue);
            border: 0;
            padding: 13px 50px;
            border-radius: 10px;
            text-transform: capitalize;
            font-size: 15px;
            font-weight: 500;
        }
    }

    .close-btn {
        position: absolute;
        top: -15%;
        right: 0%;
        background: transparent;
        border: 0;
        padding: 5px;
        font-size: 30px;

        &:hover {
            transition: .7s;
            transform: rotate(360deg);
        }
    }
}

.fade-modal-enter-active,
.fade-modal-leave-active {
    transition: opacity .3s ease !important;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
    opacity: 0;
}

</style>