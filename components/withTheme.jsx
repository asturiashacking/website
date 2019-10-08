export function withTheme(Komponent) {
  const theme = {
    palette: {
      background: "#fafafa"
    },

    typography: {
      fontFamily: "'Roboto Mono', monospace;"
    }
  };

  return props => <Komponent theme={theme} {...props}></Komponent>;
}
