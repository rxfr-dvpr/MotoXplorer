import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        slider: [
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/motoxplorer-storage.appspot.com/o/Header%2Fslider-1.png?alt=media&token=fbdd7968-a4d1-4869-83e5-f4ec7e97ce29',
                descr: {
                    title: 'Экскурсии на квадроциклах в Геленджике',
                    txt: 'приезжайте за новыми ощущениями и эмоциями!'
                }
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/motoxplorer-storage.appspot.com/o/Header%2Fslider-2.png?alt=media&token=3282ee39-125b-4ded-98a8-9060cc0a1601',
                descr: {
                    title: 'Экскурсии на квадроциклах в Геленджике',
                    txt: 'приезжайте за новыми ощущениями и эмоциями!'
                }
            }
        ]
    })
})