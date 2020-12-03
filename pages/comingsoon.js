import Head from 'next/head';
import styled from 'styled-components';
import PawPrint from '../public/pawprint.svg';
import Nori from '../public/nori.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ddbdd5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NoriContainer = styled.div`
  margin: 5vh 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  position: relative;
  margin: 0 1rem;
`;

const SVG = styled(PawPrint)`
  fill: white;
  height: 100px;
  width: 100px;
  transform: scale(0.9) translate(0, -1.5rem);
`;

const MainImage = styled(Nori)``;

export default function ComingSoon() {
  return (
    <Container>
      <NoriContainer>
        <MainImage />
      </NoriContainer>
      <TitleContainer>
        <Title>Coming Soon!</Title>
        <SVG />
      </TitleContainer>
    </Container>
  );
}
