import { ColorSchemeService } from "./colorService";

export class Api {
    colorService: ColorSchemeService

    constructor() {
        this.colorService = new ColorSchemeService()
    }
}

export const api = new Api()