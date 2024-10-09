import Slider from 'react-slick/lib/slider'
import styled from "styled-components";

const CustomSlider = styled(Slider)`

    .slick-dots li button:before{
        color: ${(props) => props.theme === 'light' ? 'white' : 'black'};
    }
    .slick-dots li.slick-active button:before{
        color: ${(props) => props.theme === 'light' ? 'white' : 'black'};
    }
`

export default CustomSlider