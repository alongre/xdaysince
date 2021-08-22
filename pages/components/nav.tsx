import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

const Nav = () => {
	const [session, loading] = useSession();
	return (
		<ul className='flex m-2'>
			<li className='mr-6'>
				<Link href='/'>
					<a className='text-blue-500 hover:text-blue-800'>Home</a>
				</Link>
			</li>
			<li className='mr-6'>
				<Link href='/about'>
					<a className='text-blue-500 hover:text-blue-800'>About</a>
				</Link>
			</li>
			<li className='mr-6'>
				<Link href='profile'>
					<a className='text-blue-500 hover:text-blue-800'>Profile</a>
				</Link>
			</li>
			<li>
				{!session && (
					<>
						Not signed in <br />
						<button onClick={() => signIn()}>Sign in</button>
					</>
				)}
				{session && (
					<>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</>
				)}
			</li>
		</ul>
	);
};
export default Nav;
