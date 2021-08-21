import Link from 'next/link';

const Nav = () => {
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
		</ul>
	);
};
export default Nav;
