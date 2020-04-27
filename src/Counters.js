import React from 'react'
import Counter from './Counter'

const Counters = ({ steps }) => {
    return (
        <div className="flex flex-wrap w-80 h-75">
            {steps.length !== 0
                ? steps.map((step) => {
                      return step !== 0 ? (
                          <div className="flex flex-column ba br3 bw1 b--white w-80 w-20-l w-33-m w-40-ns h-50 bg-white ma3">
                              <Counter step={step} key={steps.indexOf(step)} />
                          </div>
                      ) : null
                  })
                : null}
        </div>
    )
}

export default Counters
