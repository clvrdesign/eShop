import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return (
    <div className="h-[40vh] flex items-center justify-center bg-gray-800 rounded-b-[50px] overflow-hidden">
      {children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
