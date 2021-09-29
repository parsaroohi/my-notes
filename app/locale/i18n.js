import { I18nManager } from 'react-native'
import i18n from 'react-native-i18n'

import en from './en.json'
import fa from './fa.json'

i18n.fallbacks = true

i18n.translations = {
    en, fa
}

const currentLocale = i18n.currentLocale()
console.log(currentLocale);

export const isRTL = currentLocale.indexOf('fa') === 0 || currentLocale.indexOf('ar') === 0

I18nManager.allowRTL(isRTL)

export function strings(name, params = {}) {
    return i18n.t(name, params)
}