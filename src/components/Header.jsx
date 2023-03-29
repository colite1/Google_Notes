const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousToggleStat) => !previousToggleStat)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};
export default Header;
