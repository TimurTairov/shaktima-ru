import EventList from "@/components/EventList"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Календарь мероприятий на 2024 год | блог',
  description: 'Список ведических праздников и мероприятий в 2024 году',
}

const Eventlist2024 = () => {
  return (
    <div className="max-w-screen-xl my-4 mx-2 lg:mx-auto rounded-lg bg-white/50">
      <div>
        <h3 className="text-gray-700 font-bold text-2xl mb-4 pl-2">Календарь событий 2024</h3>
        <EventList />
      </div>
    </div>
  )
}

export default Eventlist2024
