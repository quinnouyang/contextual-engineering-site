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
    testTheme: Root,
  },
  state: {
    testTheme: {},
  },
  actions: {
    testTheme: {},
  },
};
