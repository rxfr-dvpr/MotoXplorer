import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
  state: () => ({
    links: [
      {
        name: '',
        url: ''
      }
    ]
  })
})