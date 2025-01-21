import ThemeContext from "../ContextAPI/index";
import PropTypes from "prop-types";

const ThemeProvider = ({ children }) => {
  const theme = "light";
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
      </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
