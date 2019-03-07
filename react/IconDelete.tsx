import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconDelete = (props: IconProps) => {
  return <Icon id="hpa-delete" {...props} />
}

IconDelete.propTypes = proptypes

export default IconDelete