import styled, { keyframes} from 'styled-components';
import BaseAnimation from './baseAnimation';

const ZoomInDownAnimation = keyframes `
    from {
        opacity: 0;
        transform: scale3d(.1, .1, .1) translate3d(0, -10rem, 0);
        animation-timing-function: cubic-bezier(.550, .055, .675, .190);
    }

    60% {
        opacity: 1;
        transform: scale3d(.475, .475, .475) translate3d(0, 6rem, 0);
        animation-timing-function: cubic-bezier(.175, .885, .320, 1)
    }
`;

const ZoomInDown = styled(BaseAnimation) `
    animation-name: ${ZoomInDownAnimation};
`

export default ZoomInDown