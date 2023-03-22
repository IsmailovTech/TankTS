import React,{useState} from 'react'
import { Button, SvgIcon } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import PeopleIcon from '@mui/icons-material/People'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HeroBg011Image from '../assets/hero_bg-01.png'
import Factoryicon1Image from '../assets/factoryBlack.png'
import { styled } from '@mui/material/styles'
import HeroBannerImg1Image from '../assets/hero_banner_img.png'
import { HeaderHeroProps } from '../assets/types'
import MenuIcon from '@mui/icons-material/Menu'

const HeaderHero1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  minHeight: '720px',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  zIndex: 9999,
  '@media (max-width: 450px)': {
    backgroundColor:"#E4F6FF",
    padding:"0px 0px 30px 0px"
  },
})

const HeroBg: any = styled('div')({
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `0px`,
  top: `0px`,
  width:"100%",
  maxHeight: '720px',
  minHeight: '720px',
  height:"100vw"
})

const HeroBg011: any = styled('img')({
  height:"100%",
  width: `100%`,
  objectFit: `fill`,
  margin: `0px`,
  '@media (max-width: 450px)': {
    display:"none"
  },
})

const HeaderHero2: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width:"100%"
})

const Header: any = styled('div')({
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  width: `100%`,
  padding: `50px 20px 30px 20px`,
  boxSizing: `border-box`,
  margin: `0px`,
  zIndex:999,
  '@media (max-width: 900px)': {
    padding: `40px 20px 30px 20px`,
  },
})

const HeaderContent: any = styled('div')({
  maxWidth: '1193px',
  width: '100vw',
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  zIndex:9999,

  '@media (max-width: 1536px)': {
    maxWidth: '1000px',
  },
})

const HeaveHo: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `20px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  margin: `0px`,

  '@media (max-width: 900px)': {
    fontSize: `15px`,
  },
}))

// const HeaderButtons: any = styled('div')({
//   display: `flex`,
//   position: `relative`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `center`,
//   gap: '30px',
//   alignItems: `center`,
//   padding: `0px`,
//   zIndex:1,
//   boxSizing: `border-box`,
//   '@media (max-width: 900px)': {
//     gap: '15px',
//   },
//   '@media (max-width: 870px)': {
//     position:"fixed",
//     left: `${state ? '0px' : '-100%'}`,
//     top: `${state ? '0px' : '-100%'}`,
//     display:"none",
//     alignItems:"flex-start",
//     paddingLeft:"32%",
//     gap:"40px",
//     width:"100%",
//     height:"100vh",
//     backgroundColor:"#C2E6FE",
//     flexDirection:"column",
//     zIndex: 1,
//   },
//   '& body': {
//     overflow: 'hidden',
//   },
// })

const ButtonHamburger: any = styled(Button)(({ theme }: any) => ({
  display: 'none',
  '@media (max-width: 870px)': {
    display: 'block',
    width: '0px',
    zIndex:"999999"
  },
}))

const Button1: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  '@media (max-width: 870px)': {
    fontSize: `20px`,
  },
}))

const Button2: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  '@media (max-width: 870px)': {
    fontSize: `20px`,
  },
}))

const Button3: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  '@media (max-width: 870px)': {
    fontSize: `20px`,
  },
}))

const Button4: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  '@media (max-width: 870px)': {
    fontSize: `20px`,
  },
}))

const HeroBanner: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  maxWidth: `1529.75px`,
  margin: `40px 0px`,

  '@media (max-width: 1536px)': {
   gap:"25px",
   padding:"0px 20px"
  },

  '@media (max-width: 870px)': {
   flexDirection:"column-reverse",
   padding:"0px",
   width:"100%" //changes
  },
})

const HeroBannerContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  '@media (max-width: 870px)': {
    alignItems: `center`,
    width:"100%" // changes
   },
})

const TankAppContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  
})

const Factoryicon1: any = styled('img')({
  height: `57.5px`,
  width: `57.5px`,
  objectFit: `cover`,
  margin: `0px`,
  zIndex: -888
})

const TankApp: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `55px`,
  letterSpacing: `0.17250001430511475px`,
  textDecoration: `none`,
  lineHeight: `69.9999988079071%`,
  textTransform: `none`,
  margin: `0px 0px 0px 20px`,
  
}))

const BasicInformationRega: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(37, 38, 45, 0.75)`,
  fontFamily: `Roboto`,
  fontWeight: `300`,
  fontSize: `23.000001907348633px`,
  lineHeight: `26px`,
  margin: `42px 0px 0px 0px`,
  
  '@media (max-width: 870px)': {
    textAlign:"center",
    whiteSpace: `none`,
   },

   '@media (max-width: 670px)': {
    margin: `32px 0px 0px 0px`,
    fontSize:"14px",
   },
}))

const HeroBannerButtons: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  gap:17,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `42px 0px 0px 0px`,
  '@media (max-width: 670px)': {
    flexDirection:"column",
    alignItems:"center",
    margin: `32px 0px 0px 0px`,
    maxWidth:"500px",
    width:"100%", //=================== changes
    padding:"0px 20px"
   },
})

const Button5: any = styled(Button)(({ theme }: any) => ({
  width: `161px`,
  height: `52.9px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `17.250001907348633px`,
  letterSpacing: `0.5290000438690186px`,
  textDecoration: `none`,
  backgroundColor:"#0097E6",
  lineHeight: `29.900001525878906px`,
  textTransform: `uppercase`,
  '@media (max-width: 670px)': {
    width:"100%",
    height:"60px"
  },
  
}))

const Button6: any = styled(Button)(({ theme }: any) => ({
  width: `175.95px`,
  height: `52.9px`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `17.250001907348633px`,
  letterSpacing: `0.5290000438690186px`,
  textDecoration: `none`,
  lineHeight: `29.900001525878906px`,
  textTransform: `uppercase`,
  '@media (max-width: 670px)': {
    width:"100%",
    height:"60px" 
  },
  
}))

const HeroBannerImg1: any = styled('img')({
  height: `439px`,
  width: `972px`,
  flexGrow:"1",
  objectFit: `cover`,
  margin: `0px`,

  '@media (max-width: 1536px)': {
    maxWidth: `700px`,
    height: "auto",
    flexGrow:"0"
  },

  '@media (max-width: 1450px)': {
    maxWidth: `450px`,
    height: "auto",
    flexGrow:"0"
  },
  
  '@media (max-width: 650px)': {
    maxWidth: `380px`,
    height: "auto",
    flexGrow:"0"
  },

  
})

function HeaderHero(props: HeaderHeroProps): JSX.Element {
  const[state,setState] = useState(false)

 
 
  
  const HeaderButtons: any = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    gap: '30px',
    alignItems: `center`,
    padding: `0px`,
    zIndex:1,
    boxSizing: `border-box`,
    '@media (max-width: 900px)': {
      gap: '15px',
    },
    '@media (max-width: 870px)': {
      position:"fixed",
      left: `${state ? '40%' : '-100%'}`,
      top: `${state ? '0px' : '-100%'}`,
      transition:  `${state ? '1s' : '1s'}`,
      duration: `${state ? '3s' : '3s'}`,
      display:"flex",
      alignItems:"flex-start",
      paddingLeft:"10%",
      gap:"40px",
      width:"100%",
      height:"100%",
      backgroundColor: 'rgba(17, 16, 16, 0)', /* semi-transparent white */
        backdropFilter: 'blur(1px)', /* the blur effect */
      
      flexDirection:"column",
      zIndex: 1,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '60%',
        height: '100%',
        backgroundColor:"#C2E6FE",
      },
    },
    '& body': {
      overflow: 'hidden',
    },
  })

 
  
  return (
    <HeaderHero1 className={props.className}>
      <HeroBg>
        <HeroBg011 src={HeroBg011Image} loading="lazy" alt={'hero_bg-01 1'} />
      </HeroBg>
      <HeaderHero2>
        <Header>
          <HeaderContent>
            <HeaveHo>{`( 'ω' و( و'♪ ₍₍ (ง ˘ω˘ )ว ⁾⁾Heave‐ho`}</HeaveHo>
            <HeaderButtons>
              <Button1
                size={'medium'}
                color={'inherit'}
                disabled={false}
                variant={'text'}
                startIcon={
                  <SvgIcon component={HomeIcon} htmlColor={`primary`}></SvgIcon>
                }
                onClick={() => setState(false)}
              >
                {'Home'}
              </Button1>
              <Button2
                size={'medium'}
                color={'inherit'}
                disabled={false}
                variant={'text'}
                startIcon={
                  <SvgIcon
                    component={LogoutIcon}
                    htmlColor={`primary`}
                  ></SvgIcon>
                }
                onClick={() => setState(false)}
              >
                {'Sign up'}
              </Button2>
              <Button3
                size={'medium'}
                color={'inherit'}
                disabled={false}
                variant={'text'}
                startIcon={
                  <SvgIcon
                    component={PeopleIcon}
                    htmlColor={`primary`}
                  ></SvgIcon>
                }
                onClick={() => setState(false)}
              >
                {'Sign in'}
              </Button3>
              <Button4
                size={'medium'}
                color={'inherit'}
                disabled={false}
                variant={'text'}
                startIcon={
                  <SvgIcon
                    component={LocationOnIcon}
                    htmlColor={`primary`}
                  ></SvgIcon>
                }
                onClick={() => setState(false)}
              >
                {'Language'}
              </Button4>
            </HeaderButtons>
            
            <ButtonHamburger onClick={() => setState(!state)}>
              <SvgIcon component={MenuIcon} htmlColor={`primary`}></SvgIcon>
            </ButtonHamburger>
          </HeaderContent>
        </Header>
        <HeroBanner>
          <HeroBannerContent>
            <TankAppContent>
              <Factoryicon1
                src={Factoryicon1Image}
                loading="lazy"
                alt={'factoryicon 1'}
              />
              <TankApp>{`Tank App`}</TankApp>
            </TankAppContent>
            <BasicInformationRega>
              {`Basic information regarding the app and its features.
Extra text and information regarding the company and 
how our app helps them achieve good results.`}
            </BasicInformationRega>
            <HeroBannerButtons>
              <Button5
                size={'large'}
                color={'primary'}
                disabled={false}
                variant={'contained'}
              >
                {'Buy'}
              </Button5>
              <Button6
                size={'large'}
                color={'inherit'}
                disabled={false}
                variant={'contained'}
              >
                {'Try for free'}
              </Button6>
            </HeroBannerButtons>
          </HeroBannerContent>
          <HeroBannerImg1
            src={HeroBannerImg1Image}
            loading="lazy"
            alt={'hero_banner_img 1'}
          />
        </HeroBanner>
      </HeaderHero2>
    </HeaderHero1>
  )
}

export default HeaderHero
