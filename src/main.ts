import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

import {pt_BR} from '../src/locales/pt_BR.ts'
import {en} from '../src/locales/en.ts'
import { es } from './locales/es.ts'

const languages = {
  pt_BR,
  en,
  es
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'pt_BR',
  messages: languages
})

createApp(App).use(i18n).mount('#app')
