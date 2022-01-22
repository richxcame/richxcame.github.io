import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { Container, CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Container>
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
