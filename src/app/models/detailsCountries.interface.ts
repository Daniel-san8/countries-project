import { Currency } from "./currency.interface"
import { Flags } from "./flags.interface"
import { Language } from "./language.interface"
import { Translations } from "./translations.interface"

export interface Root {
    name: string
    topLevelDomain: string[]
    alpha2Code: string
    alpha3Code: string
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
    flags: Flags
    currencies: Currency[]
    languages: Language[]
    translations: Translations
    flag: string
    cioc: string
    independent: boolean
}
