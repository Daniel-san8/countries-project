import { ICurrency } from "./currency.interface"
import { IFlags } from "./flags.interface"
import { ILanguage } from "./language.interface"
import { ITranslations } from "./translations.interface"

export interface IDetailsCountries {
    name: string
    topLevelDomain: string[]
    alpha2Code: string
    alpha3Code: string
    borders: string[]
    callingCodes: string[]
    capital: string
    altSpellings: string[]
    subregion: string
    region: string
    population: number
    latlng: number[]
    demonym: string
    area: number
    timezones: string[]
    nativeName: string
    numericCode: string
    flags: IFlags
    currencies: ICurrency[]
    languages: ILanguage[]
    translations: ITranslations
    flag: string
    cioc: string
    independent: boolean
}
