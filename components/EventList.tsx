"use clirnt"
import Link from 'next/link'
import Image from 'next/image'
import { eventList2024 } from '@/app/blog/eventlist2024/eventlist'
import done from "@/public/images/icons/done-100.png"
import notDone from "@/public/images/icons/notdone2.png"

const EventList = () => {
  return (
    <div>
      {eventList2024.map(item => (
        <div key={item.id} className=' flex items-center'>
          <Image src={item.done ? done : notDone} width={20} height={18} alt='done' />
          {item.link ?
            <Link href={item.link}>
              <p className='ml-2 font-semibold text-indigo-600'>{item.date} {item.event}</p>
            </Link>
            :
            <p className='ml-2'>{item.date} {item.event}</p>
          }

        </div>
      ))}
    </div>
  )
}

export default EventList