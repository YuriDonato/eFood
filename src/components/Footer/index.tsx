import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter.svg'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterLogo src={logo} />
      <S.SocialContainer>
        <img src={instagramIcon} alt="Instagram" />
        <img src={facebookIcon} alt="Facebook" />
        <img src={twitterIcon} alt="Twitter" />
      </S.SocialContainer>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </S.FooterText>
    </S.FooterContainer>
  )
}

export default Footer
