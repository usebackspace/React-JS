import { AvengerBoot } from "./Bootstrap"
import { AvengerExternal } from "./External"
import { AvengerExternal2 } from "./External2"
import { AvengerInline } from "./internal"

export function CssPass() {
    return (
        <>
            <AvengerInline/>
            <AvengerExternal/>
            <AvengerExternal2 />
            <AvengerBoot/>
        </>
    )
}