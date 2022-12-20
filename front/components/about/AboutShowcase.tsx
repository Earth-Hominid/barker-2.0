import {
  HeadingText,
  TextContainer,
  MainSection,
  SubheadingText,
} from './Styles';

const AboutShowcase = () => {
  return (
    <>
      <MainSection>
        <TextContainer>
          <HeadingText>About barker</HeadingText>
          <SubheadingText>
            <b className="font-extrabold">Barker</b> is a social platform to
            howl, woof, and bark at the world.
          </SubheadingText>
        </TextContainer>
      </MainSection>
    </>
  );
};

export default AboutShowcase;
