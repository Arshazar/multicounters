import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const Counter = ({ step }) => {
    const [num, setNum] = useState(0)

    const changeNum = () => {
        setNum(num + step) //adding to the prev value by step value on every pressing run button
    }

    return (
        <>
            <div className="w-100 pa2 bb b--purple">Step {step}</div>
            <div className="f1 fw6 mv5 self-center">{num}</div>
            <div className="ma4 justify-center items-center f3 tc">
                <Button inverted color="red" onClick={() => changeNum()}>
                    RUN
                </Button>
            </div>
        </>
    )
}

export default Counter
