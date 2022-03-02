const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/test-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "test-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
