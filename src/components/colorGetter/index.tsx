import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { schemeRequestParams } from "../../services/colorService";
import { SchemeType } from "../../type";
import { ColorBoard } from "../colorBoard";
import { Loader } from "../loader";

export type ColorGetterProps = {
    params: schemeRequestParams
}

export const ColorGetter: React.FC<ColorGetterProps> = props => {
    const [colors, setColors] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchColors = async () => {
            setLoading(true)
            try {
                const apiColors = await api.colorService.getScheme(props.params)

                setColors(apiColors)
            }

            catch (err) {
                console.log(err)
                setError(true)
                setColors([])
            }

            finally {
                setLoading(false)
            }
        }

        fetchColors()
    }, [props.params])

    if (error) 
        return <div>Looks like you have troubles with connection, try later</div>

    if (loading)
        return <Loader />

    return (
        <ColorBoard
            colors={colors}
        />
    )
}