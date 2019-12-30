export function withTheme(Komponent) {
  const theme = {
    palette: {
      accent: "#0000ff",
      background: "#fafafa"
    },

    typography: {
      fontFamily: "'Roboto Mono', monospace;"
    }
  };

  return props => <Komponent theme={theme} {...props}></Komponent>;
}
