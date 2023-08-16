import { defineStore } from "pinia";

export const cnctModalStore = defineStore('Contact Modal Store', {
    state: () => ({
        title: 'оставить заявку',
        nameInp: {
            value: '',
            label: 'как к вам обращаться?',
            plcHolder: 'ваш имя'
        },
        telInp: {
            value: '',
            label: 'телефон или whatsApp',
            plcHolder: 'вам номер'
        },
        btnValue: 'отправить'
    })
})