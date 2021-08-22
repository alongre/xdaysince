import '../styles/globals.css';
import Nav from './components/nav';
import { Provider } from 'next-auth/client';
// import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<div className='container h-screen m-auto bg-green-500'>
				<Nav />
				<div className='flex  justify-center items-center h-screen text-center'>
					<Component {...pageProps} />
				</div>
			</div>
		</Provider>
	);
}

export default MyApp;
