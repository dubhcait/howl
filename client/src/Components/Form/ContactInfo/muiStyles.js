// TODO: Refactor media query to take in constant variable for size
const styles = () => ({
  textField: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '50%',
    background: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    paddingLeft: '2%',
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },
  label: {
    paddingLeft: '2%',
  },
});

export default styles;
