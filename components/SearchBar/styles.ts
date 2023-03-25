import {IMD3Theme} from '../../theme';

const createStyles = (theme: IMD3Theme) => ({
  textInput: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    fontWeight: '400',
    marginTop: 7,
    marginHorizontal: 12,
  },
  textInputContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    flexDirection: 'row',
  },
});

export default createStyles;
