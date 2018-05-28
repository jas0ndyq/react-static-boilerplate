import React from 'react'
import PropTypes from 'prop-types'
import Counter from 'components/Counter'

export const CounterView = (props) => (
  <div>
    <Counter
      counter={props.counter}
      doubleAsync={props.doubleAsync}
      increment={props.increment}
    />
  </div>
)

CounterView.defaultProps = {
  counter: 0,
}

CounterView.propTypes = {
  counter: PropTypes.number,
  doubleAsync: PropTypes.func,
  increment: PropTypes.func,
}

export default CounterView
