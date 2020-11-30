import styled from 'styled-components';

const BaseAnimation = styled.div `
    animation-duration: ${props => props.duration};
    animation-delay: ${props => props.delay};
`

export default BaseAnimation