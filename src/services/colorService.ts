import axios from "axios"
import { ColorType } from "../type"
import { formatHex } from "../utils/formatHex"

export type schemeRequestParams = {
    hex: string
    count: number
    mode: string
}

export class ColorSchemeService {
    private apiUrl = 'https://www.thecolorapi.com/scheme'

    getScheme = async (params: schemeRequestParams): Promise<string[]> => {
        const responce = await axios.get<{ colors: ColorType[] }>(
            this.apiUrl,
            {
                params: { ...params, hex: formatHex(params.hex), format: 'json' }
            }
        )

        const colors = responce.data.colors.map(color => color.hex.value)

        return colors

    }
}
