import InformationBlock from "../information-block/information-block";

function AboutMe() {
  return (
    <div className="about__container">
      <InformationBlock
        img="omnie"
        title="O mnie"
        description="Witajcie! Jestem pasjonatem słodkości i twórcą smaków. Zanurzam się w świecie kondytorstwa od 10 lat, a każdy dzień to dla mnie możliwość odkrywania nowych smaków i kreowania wyjątkowych doświadczeń kulinaro-artystycznych."
      >
        <h5 className="additional-title">mam na imię Valentyna</h5>
      </InformationBlock>
    </div>
  );
}

export default AboutMe;
