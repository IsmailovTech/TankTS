
import React from 'react';
import { Button } from '@mui/material';
import VectorImage from '../assets/pricing_Vector.png';
import Vector2Image from '../assets/pricing_Vector_2.png';
import Vector3Image from '../assets/pricing_Vector_3.png';
import { styled } from '@mui/material/styles';
import { PricingProps } from '../assets/types';

const Pricing1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: '100%',
  justifyContent: `center`,
  alignItems: `flex-center`,
  padding: `0px`,
  boxSizing: `border-box`,
  backgroundColor:"#f7fafc",
});


const PricingContent: any = styled('div')({
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px 0px`, // change to this
  boxSizing: `border-box`,
  marginTop:"92px",
  
});

const H2Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `800`,
  fontSize: `38px`,
  letterSpacing: `-0.57px`,
  textDecoration: `none`,
  lineHeight: `56px`,
  textTransform: `none`,
  margin: `0px 0px 50px 0px `,
}));

const PricingCards: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  boxSizing: `border-box`,
  maxWidth:"1110px",
  width:"100%",   // change to this
  flexWrap:"wrap",
  padding:"0px 10px",
  gap: "20px",
});

const FreeTrial: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 4px 12px rgba(12, 68, 204, 0.1)`,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `35px 20px`,
  boxSizing: `border-box`,
  width: `255px`,
  height: `525px`,
  margin: `0px 0px 30px 0px`,
}));

const TitlePrice: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `-0.24px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const PriceTaps: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Price: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `800`,
  fontSize: `26px`,
  letterSpacing: `-0.39px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  width: `123px`,
}));

const Taps: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Button1: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  backgroundColor:"#0097E6"
}));

const Button2: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px 0px 0px 10px`,
  color: `rgba(33, 150, 243, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  
}));

const Description: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `-0.3px`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  height: `33px`,
  margin: `16px 0px 0px 0px`,
}));

const Button3: any = styled(Button)(({ theme }: any) => ({
  height: `44px`,
  width: `215px`,
  margin: `30px 0px 0px 0px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  backgroundColor:"#0097E6"
}));

const Services: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

const Q01Service: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const FluentCheckmark12Fil: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q02Service: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector1: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q03Service: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector2: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description3: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q04Service: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector3: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description4: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q05Service: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil4: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector4: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description5: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q06Service: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil5: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector5: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description6: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q07Service: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil6: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector6: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description7: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Lite: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 4px 12px rgba(12, 68, 204, 0.1)`,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `35px 20px`,
  margin: `0px 0px 30px 0px`,
  boxSizing: `border-box`,
  width: `255px`,
  height: `525px`,
}));

const TitlePrice1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `-0.24px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const PriceTaps1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Price1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `800`,
  fontSize: `26px`,
  letterSpacing: `-0.39px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  width: `123px`,
}));

const Taps1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Button4: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  backgroundColor:"#0097E6"
}));

const Button5: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px 0px 0px 10px`,
  color: `rgba(33, 150, 243, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  
}));

const Description8: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `-0.3px`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  height: `33px`,
  margin: `16px 0px 0px 0px`,
}));

const Button6: any = styled(Button)(({ theme }: any) => ({
  height: `44px`,
  width: `215px`,
  margin: `30px 0px 0px 0px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  backgroundColor:"#0097E6"
}));

const Services1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

const Q01Service1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const FluentCheckmark12Fil7: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector7: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description9: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q02Service1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil8: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector8: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description10: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q03Service1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil9: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector9: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description11: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q04Service1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil10: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector10: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description12: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q05Service1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil11: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector11: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description13: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q06Service1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil12: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector12: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description14: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q07Service1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil13: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector13: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description15: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Basic: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(0, 151, 230, 1)`,
  boxShadow: `0px 4px 12px rgba(12, 68, 204, 0.1)`,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `35px 20px`,
  margin: `0px 0px 30px 0px`,
  boxSizing: `border-box`,
  width: `255px`,
  height: `525px`,
}));

const TitlePrice2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title2: any = styled('div')(({ theme }: any) => ({
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
  alignSelf: `stretch`,
  margin: `0px`,
}));

const PriceTaps2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Price2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `800`,
  fontSize: `26px`,
  letterSpacing: `-0.39px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  width: `123px`,
}));

const Taps2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Button7: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px`,
  color: `rgba(33, 150, 243, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
}));

const Button8: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px 0px 0px 10px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  
}));

const Description16: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `-0.3px`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  height: `33px`,
  margin: `16px 0px 0px 0px`,
}));

const Button9: any = styled(Button)(({ theme }: any) => ({
  height: `44px`,
  width: `215px`,
  margin: `30px 0px 0px 0px`,
  color: `rgba(33, 150, 243, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
}));

const Services2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

const Q01Service2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const FluentCheckmark12Fil14: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector14: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description17: any = styled('div')(({ theme }: any) => ({
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
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q02Service2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil15: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector15: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description18: any = styled('div')(({ theme }: any) => ({
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
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q03Service2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil16: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector16: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description19: any = styled('div')(({ theme }: any) => ({
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
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q04Service2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil17: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector17: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description20: any = styled('div')(({ theme }: any) => ({
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
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q05Service2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil18: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector18: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description21: any = styled('div')(({ theme }: any) => ({
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
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q06Service2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil19: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector19: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description22: any = styled('div')(({ theme }: any) => ({
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
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q07Service2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil20: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector20: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description23: any = styled('div')(({ theme }: any) => ({
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
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Pro: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 4px 12px rgba(12, 68, 204, 0.1)`,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `35px 20px`,
  margin: `0px 0px 30px 0px`,
  boxSizing: `border-box`,
  width: `255px`,
  height: `525px`,
}));

const TitlePrice3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title3: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `-0.24px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const PriceTaps3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Price3: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `-0.39px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  // width: `123px`,
}));

const Taps3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Button10: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  backgroundColor:"#0097E6"
}));

const Button11: any = styled(Button)(({ theme }: any) => ({
  width: `41px`,
  height: `32px`,
  margin: `0px 0px 0px 10px`,
  color: `rgba(33, 150, 243, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  
}));

const Description24: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(41, 45, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Manrope`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `-0.3px`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  height: `33px`,
  margin: `16px 0px 0px 0px`,
}));

const Button12: any = styled(Button)(({ theme }: any) => ({
  height: `44px`,
  width: `215px`,
  margin: `30px 0px 0px 0px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  backgroundColor:"#0097E6"
}));

const Services3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

const Q01Service3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const FluentCheckmark12Fil21: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector21: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description25: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q02Service3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil22: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector22: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description26: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q03Service3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil23: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector23: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description27: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q04Service3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil24: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector24: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description28: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q05Service3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil25: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector25: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description29: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q06Service3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil26: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector26: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description30: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

const Q07Service3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
});

const FluentCheckmark12Fil27: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector27: any = styled('img')({
  height: `12px`,
  width: `17px`,
  position: `absolute`,
  left: `4px`,
  top: `6px`,
});

const Description31: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(37, 38, 45, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.21px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  flexGrow: `1`,
  margin: `0px 0px 0px 7px`,
}));

function Pricing(props: PricingProps): JSX.Element {
  return (
    <Pricing1 className={props.className}>
      
      <PricingContent>
        <H2Title>{`Pricing`}</H2Title>
        <PricingCards>
          <FreeTrial>
            <TitlePrice>
              <Title>{`Free trial`}</Title>
              <PriceTaps>
                <Price>{`$00`}</Price>
                <Taps>
                  <Button1
                    size={'small'}
                    color={'primary'}
                    disabled={false}
                    variant={'contained'}
                  >
                    {'Mo'}
                  </Button1>
                  <Button2
                    size={'large'}
                    color={'primary'}
                    disabled={false}
                    variant={'outlined'}
                  >
                    {'Yr'}
                  </Button2>
                </Taps>
              </PriceTaps>
              {false && (
                <Description>{`Perfect plan for starters`}</Description>
              )}
            </TitlePrice>
            <Button3
              size={'large'}
              color={'primary'}
              disabled={false}
              variant={'contained'}
            >
              {'Choose plan'}
            </Button3>
            <Services>
              <Q01Service>
                <FluentCheckmark12Fil>
                  <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil>
                <Description1>{`For small teams – 5 users`}</Description1>
              </Q01Service>
              <Q02Service>
                <FluentCheckmark12Fil1>
                  <Vector1 src={VectorImage} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil1>
                <Description2>{`Community support`}</Description2>
              </Q02Service>
              {false && (
                <Q03Service>
                  <FluentCheckmark12Fil2>
                    <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
                  </FluentCheckmark12Fil2>
                  <Description3>{`Sed ut perspiciatis unde.`}</Description3>
                </Q03Service>
              )}
              {false && (
                <Q04Service>
                  <FluentCheckmark12Fil3>
                    <Vector3 src={Vector2Image} loading="lazy" alt={'Vector'} />
                  </FluentCheckmark12Fil3>
                  <Description4>{`Sed ut perspiciatis unde.`}</Description4>
                </Q04Service>
              )}
              {false && (
                <Q05Service>
                  <FluentCheckmark12Fil4>
                    <Vector4 src={Vector2Image} loading="lazy" alt={'Vector'} />
                  </FluentCheckmark12Fil4>
                  <Description5>{`Sed ut perspiciatis unde.`}</Description5>
                </Q05Service>
              )}
              {false && (
                <Q06Service>
                  <FluentCheckmark12Fil5>
                    <Vector5 src={Vector2Image} loading="lazy" alt={'Vector'} />
                  </FluentCheckmark12Fil5>
                  <Description6>{`Sed ut perspiciatis unde.`}</Description6>
                </Q06Service>
              )}
              {false && (
                <Q07Service>
                  <FluentCheckmark12Fil6>
                    <Vector6 src={Vector2Image} loading="lazy" alt={'Vector'} />
                  </FluentCheckmark12Fil6>
                  <Description7>{`Sed ut perspiciatis unde.`}</Description7>
                </Q07Service>
              )}
            </Services>
          </FreeTrial>
          <Lite>
            <TitlePrice1>
              <Title1>{`Lite`}</Title1>
              <PriceTaps1>
                <Price1>{`$99`}</Price1>
                <Taps1>
                  <Button4
                    size={'large'}
                    color={'primary'}
                    disabled={false}
                    variant={'contained'}
                  >
                    {'Mo'}
                  </Button4>
                  <Button5
                    size={'large'}
                    color={'primary'}
                    disabled={false}
                    variant={'outlined'}
                  >
                    {'Yr'}
                  </Button5>
                </Taps1>
              </PriceTaps1>
              {false && (
                <Description8>{`Perfect plan for starters`}</Description8>
              )}
            </TitlePrice1>
            <Button6
              size={'large'}
              color={'primary'}
              disabled={false}
              variant={'contained'}
            >
              {'Choose plan'}
            </Button6>
            <Services1>
              <Q01Service1>
                <FluentCheckmark12Fil7>
                  <Vector7 src={VectorImage} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil7>
                <Description9>{`For small teams – 15 users`}</Description9>
              </Q01Service1>
              <Q02Service1>
                <FluentCheckmark12Fil8>
                  <Vector8 src={VectorImage} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil8>
                <Description10>{`Individual support`}</Description10>
              </Q02Service1>
              <Q03Service1>
                <FluentCheckmark12Fil9>
                  <Vector9 src={VectorImage} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil9>
                <Description11>{`Individual data – 60GB`}</Description11>
              </Q03Service1>
              {false && (
                <Q04Service1>
                  <FluentCheckmark12Fil10>
                    <Vector10
                      src={Vector2Image}
                      loading="lazy"
                      alt={'Vector'}
                    />
                  </FluentCheckmark12Fil10>
                  <Description12>{`Sed ut perspiciatis unde`}</Description12>
                </Q04Service1>
              )}
              {false && (
                <Q05Service1>
                  <FluentCheckmark12Fil11>
                    <Vector11
                      src={Vector2Image}
                      loading="lazy"
                      alt={'Vector'}
                    />
                  </FluentCheckmark12Fil11>
                  <Description13>{`Sed ut perspiciatis unde`}</Description13>
                </Q05Service1>
              )}
              {false && (
                <Q06Service1>
                  <FluentCheckmark12Fil12>
                    <Vector12
                      src={Vector2Image}
                      loading="lazy"
                      alt={'Vector'}
                    />
                  </FluentCheckmark12Fil12>
                  <Description14>{`Sed ut perspiciatis unde`}</Description14>
                </Q06Service1>
              )}
              {false && (
                <Q07Service1>
                  <FluentCheckmark12Fil13>
                    <Vector13
                      src={Vector2Image}
                      loading="lazy"
                      alt={'Vector'}
                    />
                  </FluentCheckmark12Fil13>
                  <Description15>{`Sed ut perspiciatis unde`}</Description15>
                </Q07Service1>
              )}
            </Services1>
          </Lite>
          <Basic>
            <TitlePrice2>
              <Title2>{`Basic`}</Title2>
              <PriceTaps2>
                <Price2>{`$300`}</Price2>
                <Taps2>
                  <Button7
                    size={'large'}
                    color={'inherit'}
                    disabled={false}
                    variant={'contained'}
                  >
                    {'Mo'}
                  </Button7>
                  <Button8
                    size={'large'}
                    color={'inherit'}
                    disabled={false}
                    variant={'outlined'}
                  >
                    {'Yr'}
                  </Button8>
                </Taps2>
              </PriceTaps2>
              {false && (
                <Description16>{`Perfect plan for starters`}</Description16>
              )}
            </TitlePrice2>
            <Button9
              size={'large'}
              color={'inherit'}
              disabled={false}
              variant={'contained'}
            >
              {'Choose plan'}
            </Button9>
            <Services2>
              <Q01Service2>
                <FluentCheckmark12Fil14>
                  <Vector14 src={Vector3Image} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil14>
                <Description17>{`For big teams – 30 users`}</Description17>
              </Q01Service2>
              <Q02Service2>
                <FluentCheckmark12Fil15>
                  <Vector15 src={Vector3Image} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil15>
                <Description18>{`Individual support`}</Description18>
              </Q02Service2>
              <Q03Service2>
                <FluentCheckmark12Fil16>
                  <Vector16 src={Vector3Image} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil16>
                <Description19>{`Individual data – 120GB`}</Description19>
              </Q03Service2>
              <Q04Service2>
                <FluentCheckmark12Fil17>
                  <Vector17 src={Vector3Image} loading="lazy" alt={'Vector'} />
                </FluentCheckmark12Fil17>
                <Description20>{`Advanced permissions`}</Description20>
              </Q04Service2>
              {false && (
                <Q05Service2>
                  <FluentCheckmark12Fil18>
                    <Vector18
                      src={Vector3Image}
                      loading="lazy"
                      alt={'Vector'}
                    />
                  </FluentCheckmark12Fil18>
                  <Description21>{`Sed ut perspiciatis unde`}</Description21>
                </Q05Service2>
              )}
              {false && (
                <Q06Service2>
                  <FluentCheckmark12Fil19>
                    <Vector19
                      src={Vector3Image}
                      loading="lazy"
                      alt={'Vector'}
                    />
                  </FluentCheckmark12Fil19>
                  <Description22>{`Sed ut perspiciatis unde`}</Description22>
                </Q06Service2>
              )}
              {false && (
                <Q07Service2>
                  <FluentCheckmark12Fil20>
                    <Vector20
                      src={Vector3Image}
                      loading="lazy"
                      alt={'Vector'}
                    />
                  </FluentCheckmark12Fil20>
                  <Description23>{`Sed ut perspiciatis unde`}</Description23>
                </Q07Service2>
              )}
            </Services2>
          </Basic>
          <Pro>
            <TitlePrice3>
              <Title3>{`For enterprises`}</Title3>
              <PriceTaps3>
                <Price3>{`Custom`}</Price3>
              <Taps3 sx={{ padding: 1 }}>
                <Button10
                  size={'large'}
                  color={'primary'}
                  disabled={false}
                  variant={'contained'}
                >
                  {'Mo'}
                </Button10>
                <Button11
                  size={'large'}
                  color={'primary'}
                  disabled={false}
                  variant={'outlined'}
                >
                  {'Yr'}
                </Button11>
              </Taps3>
            </PriceTaps3>
            {false && (
              <Description24>{`Perfect plan for starters`}</Description24>
            )}
          </TitlePrice3>
          <Button12
            size={'large'}
            color={'primary'}
            disabled={false}
            variant={'contained'}
          >
            {'Choose plan'}
          </Button12>
          <Services3>
            <Q01Service3>
              <FluentCheckmark12Fil21>
                <Vector21 src={VectorImage} loading="lazy" alt={'Vector'} />
              </FluentCheckmark12Fil21>
              <Description25>{`Unlimited team members`}</Description25>
            </Q01Service3>
            <Q02Service3>
              <FluentCheckmark12Fil22>
                <Vector22 src={VectorImage} loading="lazy" alt={'Vector'} />
              </FluentCheckmark12Fil22>
              <Description26>{`Individual support`}</Description26>
            </Q02Service3>
            <Q03Service3>
              <FluentCheckmark12Fil23>
                <Vector23 src={VectorImage} loading="lazy" alt={'Vector'} />
              </FluentCheckmark12Fil23>
              <Description27>{`Unlimited Individual data`}</Description27>
            </Q03Service3>
            <Q04Service3>
              <FluentCheckmark12Fil24>
                <Vector24 src={VectorImage} loading="lazy" alt={'Vector'} />
              </FluentCheckmark12Fil24>
              <Description28>{`Advanced permissions`}</Description28>
            </Q04Service3>
            <Q05Service3>
              <FluentCheckmark12Fil25>
                <Vector25 src={VectorImage} loading="lazy" alt={'Vector'} />
              </FluentCheckmark12Fil25>
              <Description29>{`Data history`}</Description29>
            </Q05Service3>
            <Q06Service3>
              <FluentCheckmark12Fil26>
                <Vector26 src={VectorImage} loading="lazy" alt={'Vector'} />
              </FluentCheckmark12Fil26>
              <Description30>{`Audit log`}</Description30>
            </Q06Service3>
            <Q07Service3>
              <FluentCheckmark12Fil27>
                <Vector27 src={VectorImage} loading="lazy" alt={'Vector'} />
              </FluentCheckmark12Fil27>
              <Description31>{`All functions included`}</Description31>
            </Q07Service3>
          </Services3>
        </Pro>
      </PricingCards>
    </PricingContent>
    </Pricing1 >
  );
}

export default Pricing;
