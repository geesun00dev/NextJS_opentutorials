"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation'

export default function Control() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  return (
    <ul>
      <li><Link href='/create'>create</Link></li>
      {
        id? <>
          <li><Link href={"/update/"+ id}>update</Link></li>
          <li><input type='button' value="delete" 
          onClick={() => {
             
                const options = {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                fetch(process.env.NEXT_PUBLIC_API_URL+`topics/`+id, options)
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    router.refresh();
                    router.push(`/`);
                })
          }}
          /></li>
        </>: null

      }
      
    </ul>
  );
}
