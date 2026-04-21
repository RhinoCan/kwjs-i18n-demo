import './assets/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import deDE from './i18n/de-DE'
import enCA from './i18n/en-CA'
import frCA from './i18n/fr-CA'

const i18n = createI18n({
  legacy: false,
  locale: 'en-CA',
  fallbackLocale: 'en-CA',
  messages: {
    'en-CA': enCA,
    'fr-CA': frCA,
    'de-DE': deDE
  }
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
