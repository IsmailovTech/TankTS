import React from 'react'
import FooterBg01011Image from '../assets/footer_bg-01.png'
import IconFacebookImage from '../assets/footer_icon_facebook.svg'
import IconTwitterImage from '../assets/footer_icon_twitter.svg'
import IconLinkedinImage from '../assets/footer_icon_linkedin.svg'
import IconYoutubeImage from '../assets/footer_icon_youtube.svg'
import IconDribbbleImage from '../assets/footer_icon_dribbble.svg'
import IconBehanceImage from '../assets/footer_icon_behance.svg'
import { styled } from '@mui/material/styles'
import { FooterProps } from '../assets/types'

const Footer1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  maxHeight: '100vh',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  bottom: `0`,
  boxSizing: `border-box`,
  '@media (max-width: 870px)': {
    justifyContent:"center"
  },
})

const FooterBg: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: "100%",
  height: `720px`,
  left: `0px`,
  '@media (max-width: 550px)': {
    display:"none"
  },
})

const FooterBg01011: any = styled('img')({
  height: `720px`,
  width: `100%`,
  objectFit: `fill`,
  margin: `0px`,
})

const Footer2: any = styled('div')({
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `32px`,
  boxSizing: `border-box`,
  width: `100%`,
  marginTop:"132px"  ,
  '@media (max-width: 870px)': {
    marginTop:"0px",
  },

  '@media (max-width: 550px)': {
    backgroundColor:"#00568D"
  },
})

const FooterContent001: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  maxWidth:"1176px",
  width:"100%",
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,

  '@media (max-width: 870px)': {
    flexDirection: `column`,
  },
})

const HeaveHo: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  // whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `20px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  minWidth:"299px",
  margin: `0px`,
}))

const Frame6: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  flexWrap:"nowrap",
  maxWidth:"717px",
  width:"100%",
  alignItems: `flex-start`,
  margin:"0px 0px 0px 20px",
  padding: `0px`,
  boxSizing: `border-box`,
  '@media (max-width: 870px)': {
    marginTop:"58px",
  },
  '@media (max-width: 550px)': {
    flexWrap:"wrap",
    maxWidth:"250px",
    margin:"58px 0px 0px 28px"

  },
})

const PegaraTeamHistoryConSpan1: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const PegaraTeamHistoryConSpan2: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const PegaraTeamHistoryConSpan3: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const PegaraTeamHistoryCon: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}))

const FeaturesCoolStuffRanSpan1: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const FeaturesCoolStuffRanSpan2: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `underline`,
  textTransform: `none`,
}))

const FeaturesCoolStuffRanSpan3: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const FeaturesCoolStuffRan: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  textTransform: `none`,
 
}))

const ResourcesResourceResSpan1: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  
}))

const ResourcesResourceResSpan2: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const ResourcesResourceRes: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  textTransform: `none`,
  '@media (max-width: 550px)': {
    marginTop:"20px"
  },
}))

const LegalPrivacyPolicyTeSpan1: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const LegalPrivacyPolicyTeSpan2: any = styled('span')(({ theme }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
}))

const LegalPrivacyPolicyTe: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  textTransform: `none`,
  '@media (max-width: 550px)': {
    marginTop:"20px"
  },
}))

const LineSeparator1: any = styled('div')({
  border: `1px solid rgba(227, 244, 254, 1)`,
  height: `0px`,
  maxWidth: `1176px`,
  width:"100%",
  margin: `30px 0px 0px 0px`,
})

const Frame7: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  maxWidth:"1080px",
  width:"100%",
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `30px 0px 0px 0px`,
  '@media (max-width: 700px)': {
    flexDirection:"column",
    alignItems: `flex-start`,
  },
})

const Contacts: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  maxWidth: `479px`,
  width:"100%",
  margin: `0px`,
  '@media (max-width: 550px)': {
    flexDirection:"column",
    alignItems: `flex-start`,
  },
})

const TitlePhoneEmail: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
})

const Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `-0.24px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}))

const PhoneEmail: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `15px 0px 0px 0px`,
})

const Phone: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}))

const EmailLink: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `10px 0px 0px 0px`,
})

const Title1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `-0.14px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}))

const AddressLink: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  '@media (max-width: 550px)': {
    marginTop:"15px"
  },
})

const Address: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}))

const DriveDerectionsLink: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `10px 0px 0px 0px`,
})

const Title2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `-0.14px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}))

const SocialLinks: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  marginLeft:"20px",
  '@media (max-width: 700px)': {
    marginLeft:"0px",
  },
  '@media (max-width: 550px)': {
    marginTop:"48px"
  },
})

const Title3: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `-0.24px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}))

const IconsSocialLinks: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `15px 0px 0px 0px`,
})

const IconFacebook: any = styled('img')({
  height: `auto`,
  width: `25px`,
  margin: `0px`,
})

const IconTwitter: any = styled('img')({
  height: `auto`,
  width: `25px`,
  margin: `0px 0px 0px 15px`,
})

const IconLinkedin: any = styled('img')({
  height: `auto`,
  width: `25px`,
  margin: `0px 0px 0px 15px`,
})

const IconYoutube: any = styled('img')({
  height: `auto`,
  width: `25px`,
  margin: `0px 0px 0px 15px`,
})

const IconDribbble: any = styled('img')({
  height: `auto`,
  width: `25px`,
  margin: `0px 0px 0px 15px`,
})

const IconBehance: any = styled('img')({
  height: `auto`,
  width: `25px`,
  margin: `0px 0px 0px 15px`,
})

function Footer(props: FooterProps): JSX.Element {
  return (
    <Footer1 className={props.className}>
      <FooterBg>
        <FooterBg01011
          src={FooterBg01011Image}
          loading="lazy"
          alt={'footer_bg-01-01 1'}
        />
      </FooterBg>
      <Footer2>
        <FooterContent001>
          <HeaveHo>{`( 'ω' و( و'♪ ₍₍ (ง ˘ω˘ )ว ⁾⁾Heave‐ho`}</HeaveHo>
          <Frame6>
            <PegaraTeamHistoryCon>
              <PegaraTeamHistoryConSpan1>{`Pegara
  
`}</PegaraTeamHistoryConSpan1>
              <PegaraTeamHistoryConSpan2>{`Team
History
Contact us
Locations`}</PegaraTeamHistoryConSpan2>
              <PegaraTeamHistoryConSpan3>{` `}</PegaraTeamHistoryConSpan3>
            </PegaraTeamHistoryCon>
            <FeaturesCoolStuffRan>
              <FeaturesCoolStuffRanSpan1>{`Features
`}</FeaturesCoolStuffRanSpan1>
              <FeaturesCoolStuffRanSpan2>{`
`}</FeaturesCoolStuffRanSpan2>
              <FeaturesCoolStuffRanSpan3>{`Cool stuff
Random feature
Team feature
Developer stuff
Another one`}</FeaturesCoolStuffRanSpan3>
            </FeaturesCoolStuffRan>
            <ResourcesResourceRes>
              <ResourcesResourceResSpan1>{`Resources
  
`}</ResourcesResourceResSpan1>
              <ResourcesResourceResSpan2>{`Resource
Resource name
Another resource
Final resource`}</ResourcesResourceResSpan2>
            </ResourcesResourceRes>
            <LegalPrivacyPolicyTe>
              <LegalPrivacyPolicyTeSpan1>{`Legal
  
`}</LegalPrivacyPolicyTeSpan1>
              <LegalPrivacyPolicyTeSpan2>{`Privacy policy
Terms of use `}</LegalPrivacyPolicyTeSpan2>
            </LegalPrivacyPolicyTe>
          </Frame6>
        </FooterContent001>
        <LineSeparator1></LineSeparator1>
        <Frame7>
          <Contacts>
            <TitlePhoneEmail>
              <Title>{`Contacts`}</Title>
              <PhoneEmail>
                <Phone>{`+1 601-201-5580`}</Phone>
                <EmailLink>
                  <Title1>{`pegara@info.co.jp`}</Title1>
                </EmailLink>
              </PhoneEmail>
            </TitlePhoneEmail>
            <AddressLink>
              <Address>{`1642 Washington Avenue, Jackson, MS, 39201`}</Address>
              <DriveDerectionsLink>
                <Title2>{`Driving derections`}</Title2>
              </DriveDerectionsLink>
            </AddressLink>
          </Contacts>
          <SocialLinks>
            <Title3>{`Social`}</Title3>
            <IconsSocialLinks>
              <IconFacebook
                src={IconFacebookImage}
                loading="lazy"
                alt={'icon_facebook'}
              />
              <IconTwitter
                src={IconTwitterImage}
                loading="lazy"
                alt={'icon_twitter'}
              />
              <IconLinkedin
                src={IconLinkedinImage}
                loading="lazy"
                alt={'icon_linkedin'}
              />
              <IconYoutube
                src={IconYoutubeImage}
                loading="lazy"
                alt={'icon_youtube'}
              />
              <IconDribbble
                src={IconDribbbleImage}
                loading="lazy"
                alt={'icon_dribbble'}
              />
              <IconBehance
                src={IconBehanceImage}
                loading="lazy"
                alt={'icon_behance'}
              />
            </IconsSocialLinks>
          </SocialLinks>
        </Frame7>
      </Footer2>
    </Footer1>
  )
}

export default Footer
