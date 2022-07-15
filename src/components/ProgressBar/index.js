import React from "react"
import { ProgressBarStyle, ProgressStyle } from "./ProgressStyle"

const ProgressBar = ({ value, activeColor }) => {
    return <ProgressBarStyle>
        <ProgressStyle color={activeColor} value={value} />
    </ProgressBarStyle>
}
export default React.memo(ProgressBar)