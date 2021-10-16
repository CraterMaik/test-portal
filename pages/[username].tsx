import { useRouter } from 'next/router';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const router = useRouter();
  const { username } = router.query

  const { data: user, error } = useSwr('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!user) return <div>Loading...</div>
  
  return (
    <>
      <h2>@{username}</h2>
      <ul>
      </ul>
    </>
    
  )
  
}