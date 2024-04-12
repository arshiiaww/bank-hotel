import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container">
        <div className="not-found">
        <h2>Oops...</h2>
        <p>The page you were looking for doesn't exist.</p>
        <Link href="/">Get back Home</Link>
        </div>
    </div>
  )
}