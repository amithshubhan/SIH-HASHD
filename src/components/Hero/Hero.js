import React from 'react'
import { HeroCards,HeroContainer,Dtitle,RIDNO,Verify,Heroleft,Heroright,Anch } from './Heroele'
const Hero = ({name,rid}) => {
  return (
    <>
        <HeroContainer>
            <HeroCards>
                <Heroleft>
                <Dtitle>{name}</Dtitle>
                {/* <Rtitle>RID</Rtitle> */}
                <RIDNO>RID :- {rid}</RIDNO>
                </Heroleft>
                <Heroright>
                <Verify><Anch href="/">Verify</Anch></Verify>
                </Heroright>
            </HeroCards>
        </HeroContainer>
    </>
  )
}

export default Hero