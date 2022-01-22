import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
