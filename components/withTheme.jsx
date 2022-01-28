export function withTheme(Komponent) {
  const theme = {
    palette: {
      accent: "#0000ff",
      background: "#fafafa",
      white: "#ffffff"
    },

    typography: {
      fontFamily: "'Space Mono', monospace;"
    }
  };

  return props => <Komponent theme={theme} {...props}></Komponent>;
}
