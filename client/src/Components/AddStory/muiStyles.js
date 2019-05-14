exports.styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200px',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '97%',
    padding: 5,
    maxHeight: 100,
    overflowY: 'auto',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});