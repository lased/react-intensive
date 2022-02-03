import { RU } from '../config'

class Helper {
    static getCurrency(value, options = {}, localization = RU) {
        const numberFormat = new Intl.NumberFormat(localization.locale, {
            ...options,
            style: 'currency',
            currency: localization.currency
        })

        return numberFormat.format(value)
    }
}

export default Helper