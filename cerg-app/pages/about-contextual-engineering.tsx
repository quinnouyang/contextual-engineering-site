import PageWrapper from "../src/components/PageWrapper";

export default function ContextualEngineeringPage() {
  return (
    <PageWrapper
      {...{
        mainTitle: "About Contextual Engineering | University of Illinois",
        includeSecondaryTitle: false,
        category: "About",
      }}
    ></PageWrapper>
  );
}
