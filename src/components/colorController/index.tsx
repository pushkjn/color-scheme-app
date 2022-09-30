import React, { useState } from "react";
import { useKeypress } from "../../hooks/useKeypress";
import { ColorGetter } from "../colorGetter";
import { HexColorPicker } from "react-colorful";
import { SelectInput } from "../selectInput";
import { SchemeType } from "../../type";
import { defaultParams, scemeTypeOptions, SchemeTypeOption } from "./conf";
import { schemeRequestParams } from "../../services/colorService";
import Draggable from "react-draggable";
import { SchemeSettingsMenu } from "../schemeSettingsMenu";

export const ColorController: React.FC = () => {
    const [seed, setSeed] = useState(defaultParams.hex)
    const [schemeType, setSchemeType] = useState<SchemeTypeOption>(scemeTypeOptions[3])
    const [getterParams, setGetterParams] = useState<schemeRequestParams>(defaultParams)

    useKeypress('Enter', () => onGenerate())

    const onGenerate = () => {
        setGetterParams(params => ({
            ...params,
            hex: seed,
            mode: schemeType.value
        }))
    }

    return (
        <>
            {/*  <div style={{ display: 'flex'}}>
                <Draggable
                    axis="x"
                    bounds="parent"
                >
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
                </Draggable>
                <Draggable
                    axis="x"
                    bounds="parent"
                >
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'green' }}></div>
                </Draggable>
            </div> */}
            <SchemeSettingsMenu>
                <HexColorPicker
                    color={seed}
                    style={{
                        height: '100px'
                    }}
                    onChange={e => setSeed(e)}
                />
                <div>
                    <SelectInput<SchemeType>
                        value={schemeType}
                        options={scemeTypeOptions}
                        onChange={e => {
                            setSchemeType(e)
                        }}
                    />
                </div>
            </SchemeSettingsMenu>
            <ColorGetter
                params={getterParams}
            />
        </>
    )
}