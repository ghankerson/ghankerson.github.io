import Link from 'next/link'
export default function Home () {
  return (
    <div>
      <p> This is my booknotes sites where I share notes on books I am reading and podcasts I am listening to.</p>
      <Link href='/johnbetts' as={process.env.BACKEND_URL + '/johnbetts'}>
        <a>Jung's Model of the Psyche</a>
      </Link>
    </div>
  )
}
