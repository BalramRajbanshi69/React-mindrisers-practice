import ThemeContext from "../ContextAPI/index";
import PropTypes from "prop-types";

const ThemeProvider = ({ children }) => {
  const theme = "light";
  const theme1 = "dark";
  return (
    <ThemeContext.Provider value={ {theme,theme1} }>
      {children}
      </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
