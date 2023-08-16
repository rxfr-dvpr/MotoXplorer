import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
  state: () => ({
    links: [
      {
        name: 'маршруты',
        url: '#routes'
      },
      {
        name: 'галерея',
        url: '#gallery'
      },
      {
        name: 'вопрос-ответ',
        url: '#faq'
      },
      {
        name: 'контакты',
        url: '#contacts'
      },
      {
        name: 'забронировать',
        url: '#booking'
      }
    ],
    contact: {
      number: {
        txt: '+998 (99) 817-30-66',
        url: '+998998173066'
      }
    }
  })
})