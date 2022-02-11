import { RU } from 'config'

class Helper {
  static getCurrency(value: number, options: Intl.NumberFormatOptions = {}, localization = RU) {
    const numberFormat = new Intl.NumberFormat(localization.locale, {
      ...options,
      style: 'currency',
      currency: localization.currency,
      maximumFractionDigits: 0,
    })

    return numberFormat.format(value)
  }

  static getDate(date: string, options: Intl.DateTimeFormatOptions = {}, localization = RU) {
    const dateFormat = new Intl.DateTimeFormat(localization.locale, {
      ...options,
      dateStyle: 'long',
      timeStyle: 'medium',
    })

    return dateFormat.format(new Date(date))
  }
}

export default Helper
