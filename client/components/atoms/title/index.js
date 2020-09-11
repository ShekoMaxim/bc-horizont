import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        text-align: center;
`
const StyledLink = styled.a`
   color: #0070f3;
   text-decoration: none;
   
   &:hover {
    text-decoration: underline;
   }
   
`

const Title = () => (
    <StyledH1>
        Hi to <StyledLink href="http://www.bc-horizont.com/"> БК «Горизонт»</StyledLink>
    </StyledH1>
)

Title.defaultProps = {
    className: '',
    children: '',
}

Title.propTypes  = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Title