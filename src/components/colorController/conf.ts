import { schemeRequestParams } from "../../services/colorService"
import { SchemeType } from "../../type"

export const defaultParams: schemeRequestParams = {
    hex: '#181450',
    count: 5,
    mode: 'analogic'
}

export type SchemeTypeOption = {
    value: SchemeType, label: string 
}

export const scemeTypeOptions: SchemeTypeOption[] = [
    { value: 'monochrome', label: "monochrome" },
    { value: 'monochrome-dark', label: "monochrome-dark" },
    { value: 'monochrome-light', label: "monochrome-light" },
    { value: 'analogic', label: "analogic" },
    { value: 'complement', label: "complement" },
    { value: 'triad', label: "triad" },
    { value: 'quad', label: "quad" }
]