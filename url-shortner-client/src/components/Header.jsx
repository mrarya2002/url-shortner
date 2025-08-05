import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link to="/" className="flex items-center justify-center">
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6m0-6V8" />
        </svg>
        <span className="ml-2 text-lg font-bold">LinkShort</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="/login" className="text-sm font-medium hover:underline underline-offset-4">
          Login
        </Link>
        <Link to="/register" className="text-sm font-medium hover:underline underline-offset-4">
          Sign Up
        </Link>
      </nav>
    </header> 
    </>
  )
}

export default Header
