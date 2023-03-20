import React from 'react'
import { Button, SvgIcon } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Q51679951Image from '../assets/factory_features.png'
import { styled } from '@mui/material/styles'
import { FeaturesProps } from '../assets/types'

const Features1: any = styled('div')({
  padding:"50px 0px",
})

const FeaturesContent: any = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px 20px',
})

const Q1Block: any = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '929px',
  width: '100%',
  '@media (max-width: 870px)': {
    flexDirection: 'column-reverse',
  },
})

const TitleDescriptionButt: any = styled('div')({
  maxWidth: '444px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media (max-width: 870px)': {
    alignItems: 'center',
    marginTop: '24px',
  },
})

const H1Title: any = styled('div')(({ theme }: any) => ({
  fontFamily: 'Manrope',
  fontSize: '30px',
  fontWeight: '700',
  color: '#25262D',
}))

const Description: any = styled('div')(({ theme }: any) => ({
  textAlign: 'left',
  marginTop: '10px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  color: 'rgba(37, 38, 45, 0.75)',
  '@media (max-width: 870px)': {
    textAlign: 'center',
  },

  '@media (max-width: 500px)': {
    fontSize: '14px',
  },
}))

const Button1: any = styled(Button)(({ theme }: any) => ({
  marginTop: '30px',
  width: '185px',
  height: '56px',
  fontSize: '14px',
  backgroundColor:"#0097E6"
}))

const Q51679951: any = styled('img')({
  height: `336px`,
  width: `413px`,
  objectFit: `cover`,
  '@media (max-width: 500px)': {
    height: `271px`,
    width: `278px`,
  },
})

const Q2Block: any = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '929px',
  marginTop:"48px",
  width: '100%',
  '@media (max-width: 870px)': {
    flexDirection: 'column',
  },
})

const Q516799511: any = styled('img')({
  height: `336px`,
  width: `413px`,
  objectFit: `cover`,
  '@media (max-width: 500px)': {
    height: `271px`,
    width: `278px`,
  },
})

const TitleDescriptionButt1: any = styled('div')({
  maxWidth: '444px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media (max-width: 870px)': {
    alignItems: 'center',
    marginTop: '24px',
  },
})

const H1Title1: any = styled('div')(({ theme }: any) => ({
  fontFamily: 'Manrope',
  fontSize: '30px',
  fontWeight: '700',
  color: '#25262D',
}))

const Description1: any = styled('div')(({ theme }: any) => ({
  textAlign: 'left',
  marginTop: '10px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  color: 'rgba(37, 38, 45, 0.75)',
  '@media (max-width: 870px)': {
    textAlign: 'center',
  },

  '@media (max-width: 500px)': {
    fontSize: '14px',
  },
}))

const Button2: any = styled(Button)(({ theme }: any) => ({
  marginTop: '30px',
  width: '185px',
  height: '56px',
  fontSize: '14px',
  backgroundColor:"#0097E6"
}))

const Q3Block: any = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '929px',
  marginTop:"42px",
  width: '100%',
  '@media (max-width: 870px)': {
    flexDirection: 'column-reverse',
  },
})

const TitleDescriptionButt2: any = styled('div')({
  maxWidth: '444px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media (max-width: 870px)': {
    alignItems: 'center',
    marginTop: '24px',
  },
})

const H1Title2: any = styled('div')(({ theme }: any) => ({
  fontFamily: 'Manrope',
  fontSize: '30px',
  fontWeight: '700',
  color: '#25262D',
}))

const Description2: any = styled('div')(({ theme }: any) => ({
  textAlign: 'left',
  marginTop: '10px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  color: 'rgba(37, 38, 45, 0.75)',
  '@media (max-width: 870px)': {
    textAlign: 'center',
  },

  '@media (max-width: 500px)': {
    fontSize: '14px',
  },
}))

const Button3: any = styled(Button)(({ theme }: any) => ({
  marginTop: '30px',
  width: '185px',
  height: '56px',
  fontSize: '14px',
  backgroundColor:"#0097E6"
}))

const Q516799512: any = styled('img')({
  height: `336px`,
  width: `413px`,
  objectFit: `cover`,
  '@media (max-width: 500px)': {
    height: `271px`,
    width: `278px`,
  },
})

function Features(props: FeaturesProps): JSX.Element {
  return (
    <Features1 className={props.className}>
      <FeaturesContent>
        <Q1Block>
          <TitleDescriptionButt>
            <H1Title>{`Feature 001`}</H1Title>
            <Description>
              {`Information of the specific feature that the app offers. 
More information regarding the same feature and
how to use it in your own setup or application.`}
            </Description>
            <Button1
              size={'medium'}
              color={'primary'}
              disabled={false}
              variant={'contained'}
              endIcon={
                <SvgIcon
                  component={ChevronRightIcon}
                  htmlColor={`#0097E6`}
                ></SvgIcon>
              }
            >
              {'See all Features'}
            </Button1>
          </TitleDescriptionButt>
          <Q51679951 src={Q51679951Image} loading="lazy" alt={'5167995 1'} />
        </Q1Block>
        <Q2Block>
          <Q516799511 src={Q51679951Image} loading="lazy" alt={'5167995 1'} />
          <TitleDescriptionButt1>
            <H1Title1>{`Feature 002`}</H1Title1>
            <Description1>
              {`Information of the specific feature that the app offers. 
More information regarding the same feature and
how to use it in your own setup or application.`}
            </Description1>
            <Button2
              size={'medium'}
              color={'primary'}
              disabled={false}
              variant={'contained'}
              endIcon={
                <SvgIcon
                  component={ChevronRightIcon}
                  htmlColor={`primary/contrast`}
                ></SvgIcon>
              }
            >
              {'See all Features'}
            </Button2>
          </TitleDescriptionButt1>
        </Q2Block>
        <Q3Block>
          <TitleDescriptionButt2>
            <H1Title2>{`Feature 003`}</H1Title2>
            <Description2>
              {`Information of the specific feature that the app offers. 
More information regarding the same feature and
how to use it in your own setup or application.`}
            </Description2>
            <Button3
              size={'medium'}
              color={'primary'}
              disabled={false}
              variant={'contained'}
              endIcon={
                <SvgIcon
                  component={ChevronRightIcon}
                  htmlColor={`primary/contrast`}
                ></SvgIcon>
              }
            >
              {'See all Features'}
            </Button3>
          </TitleDescriptionButt2>
          <Q516799512 src={Q51679951Image} loading="lazy" alt={'5167995 1'} />
        </Q3Block>
      </FeaturesContent>
    </Features1>
  )
}

export default Features
