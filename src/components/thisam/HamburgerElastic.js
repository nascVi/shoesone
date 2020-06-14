import React from 'react'
import { Button } from './Button'
import { StyledLinesElastic } from './StyledLinesElastic'

const HamburgerElastic = props => (
    <Button {...props} Lines={StyledLinesElastic} />
)

export default HamburgerElastic
