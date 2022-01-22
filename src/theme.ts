import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#0a1929',
		},
		secondary: {
			main: '#dea500',
		},
		background: {
			default: '#0a1929',
			paper: '#001e3c',
		},
		text: {
			primary: '#e7ebf0',
			secondary: '#b2bac2',
		},
	},
	typography: {
		fontFamily:
			'"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
	},
});

export default theme;
