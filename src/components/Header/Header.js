import Logo from '../../assets/images/logo-pequeno.png';
import { HeaderWrapper } from './Header-styled';

export default function Top() {
    return (
        <HeaderWrapper>
            <img src={Logo} alt="" />
            <h1>ZapRecall</h1>
        </HeaderWrapper>
    )
}
