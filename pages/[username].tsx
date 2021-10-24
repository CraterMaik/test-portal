import { useRouter } from 'next/router';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const router = useRouter();
  const { username } = router.query
  
  const { data: user, error } = useSwr('/api/me/auth', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!user) return <div>Loading...</div>
  console.log(user);
  
  return (
    <>
      <h2>{user.social_provider}</h2>
      <img src={user.social_avatarUrl} alt=""/>
    </>
    
  )
  
}
