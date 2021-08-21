import '../styles/globals.css';
import Nav from './components/nav';
// import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className='container h-screen m-auto bg-green-500'>
			<Nav />
			<div className='flex  justify-center items-center h-screen text-center'>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
