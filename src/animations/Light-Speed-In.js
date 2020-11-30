import styled, { keyframes} from 'styled-components';
import BaseAnimation from './baseAnimation';

const LightSpeedInAnimation = keyframes `
    from {
        opacity: 0;
        transform: translate3d(100%, 0, 0) skew(-30deg);
    }

    60% {
        transform: skewX(20deg);
        opacity: 1;
    }

    80% {
        transform: skewX(-5deg);
        opacity: 1;
    }

    to {
        transform: none;
        opacity: 1;
    }
`;

const LightSpeedIn = styled(BaseAnimation) `
    animation-name: ${LightSpeedInAnimation};
    animation-timing-function: ease-out;
`

export default LightSpeedIn