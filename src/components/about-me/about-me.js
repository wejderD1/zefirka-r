import InformationBlock from "../information-block/information-block";

function AboutMe() {
  return (
    <div className="about__container">
      <InformationBlock
        img="omnie"
        classOther="information_reverse"
        title="Mam na im"
        description="Witajcie! Jestem pasjonatem słodkości i twórcą smaków. Zanurzam się w świecie kondytorstwa od [ilość lat], a każdy dzień to dla mnie możliwość odkrywania nowych smaków i kreowania wyjątkowych doświadczeń kulinaro-artystycznych."
      />
    </div>
  );
}

export default AboutMe;
