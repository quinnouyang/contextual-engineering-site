import HomepageHero from "../src/components/Heros/HomepageHero";
import PageWrapper from "../src/components/PageWrapper";

export default function Homepage() {
  return (
    <PageWrapper
      {...{
        mainTitle: "Contextual Engineering Research Group | UIUC",
        includeSecondaryTitle: false,
      }}
    >
      <HomepageHero />
    </PageWrapper>
  );
}
