import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import Counters from './Counters'
import ErrorBoundary from './ErrorBoundary'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0,
            steps: [], //for having several counters
        }
    }
    //adds the number to the steps
    addCounter = () => {
        if (
            this.state.number !== 0 &&
            typeof this.state.number === 'number' &&
            !isNaN(this.state.number)
        ) {
            this.setState({
                steps: this.state.steps.concat([this.state.number]),
            })
        }
        return
    }

    //changes number value dynamically and saves it into the state
    changeNumber = (n) => {
        const value = parseFloat(n.target.value)
        switch (typeof value) {
            case 'number':
                this.setState({ number: value })
                break
            default:
                this.setState({ number: 0 })
                break
        }
    }

    render() {
        return (
            <div
                className="flex flex-column items-center"
                style={{
                    width: '100vw',
                    height: '100%',
                    background:
                        'linear-gradient(28deg, rgba(255,220,121,1) 0%, rgba(148,233,231,1) 100%)',
                }}
            >
                <div className="flex flex-wrap w-80 h-25 ba bw1 b--purple br4 items-center justify-center mv3">
                    <Input
                        onChange={this.changeNumber}
                        className="flex w-75 w-50-l w-50-m w-50-ns mr3"
                        placeholder="This only accepts numbers"
                    />
                    <Button
                        color="violet"
                        className="w-25 w-20-l"
                        onClick={this.addCounter}
                    >
                        Add counter
                    </Button>
                </div>
                <ErrorBoundary>
                    <Counters steps={this.state.steps} />
                </ErrorBoundary>
            </div>
        )
    }
}

export default App
