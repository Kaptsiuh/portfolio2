import styled from "styled-components";
import { Container } from "../../../components/Container";
import name from "./../../../assets/images/myPhoto.webp";
import { Wrapper } from "../../../components/Wrapper";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Wrapper>
          <MainContent>
            <Greeting>Hello!</Greeting>
            <Name>I'm Dzmitry Kaptsiuh</Name>
            <MainTitle>
              I’am freelance <Span>web developer</Span> based in Indonesia who
              loves to craft attractive design experiences for the web.
            </MainTitle>
            <ButtonsWrapper>
              <Button>Email me</Button>
              <Button>Download CV</Button>
            </ButtonsWrapper>
          </MainContent>
          <Photo src={name} />
        </Wrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100%;
  background-color: #000;

  display: flex;
`;

const Photo = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const Greeting = styled.span`
  ${font({ family: "Playfair Display", weight: 700, Fmax: 90, Fmin: 50 })}
`;

const Name = styled.h2`
  ${font({
    family: "Playfair Display",
    weight: 700,
    Fmax: 90,
    Fmin: 50,
  })};
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  width: 70%;
  ${font({
    color: theme.colors.shadowFont,
    weight: 400,
    lineHeight: 1.8,
    Fmax: 20,
    Fmin: 16,
  })};

  margin-bottom: 30px;
`;

const Span = styled.span`
  ${font({ color: theme.colors.font })}
`;

const ButtonsWrapper = styled.div``;

const Button = styled.button`
  ${font({ weight: 400, Fmax: 20, Fmin: 16 })};

  background-color: #676cdb;

  padding: 20px 40px;
  margin-right: 10px;
`;
