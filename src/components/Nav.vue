<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/motoxplorer-storage.appspot.com/o/logo.png?alt=media&token=5e6cd8d5-d640-4ef3-9986-e57419df55bc" alt="" class="nav-logo-img">
            </router-link>

            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                    <a :href="link.url" class="nav__list-link">{{ link.name }}</a>
                </li>
            </ul>

            <div class="nav__contact">
                <a :href="`tel:${store.contact.number.url}`" class="nav__contact-number"><i class="fas fa-phone-alt"></i> {{ store.contact.number.txt }}</a>

                <ContactModal/>
            </div>

        </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";
import ContactModal from './ContactModal.vue';

export default {
    name: 'Navigation',
    components: {
        ContactModal
    },
    data() {
        return {
            store: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    background: var(--main-black);
    position: fixed;
    top: 0;
    left: 0;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    &-logo {
        max-width: 120px;
        width: 100%;

        &-img {
            width: 100%;
            display: block;
        }
    }

    &__list {
        max-width: 700px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        padding: 15px 0;

        &-link {
            font-size: 14px;
            text-transform: capitalize;
            font-weight: 600;

            &:hover {
                color: var(--main-blue);
            }
        }
    }

    &__contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;

        &-number {
            font-weight: 600;

            &:hover {
                color: var(--main-blue);

                i {
                    color: var(--main-blue);
                }
            }
        }
    }
}

</style>