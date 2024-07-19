import Link from "next/link"
import Image from "next/image"
import done from "@/public/images/icons/done-100.png"
import notDone from "@/public/images/icons/notdone-100.png"
import EventList from "@/components/EventList"


const Eventlist2024 = () => {
  return (
    <div className="max-w-screen-xl my-4 mx-auto">
      <div className="mx-2">
        <h3 className="dark:text-white  text-gray-700 font-bold text-2xl mb-4">Календарь событий 2024</h3>
        {/* <div className="dark:text-slate-400 text-gray-700 mx-2 mt-2">
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p className="font-semibold text-indigo-600"><Link href='/gallary/brahmanandajayantiphoto2024'>08.03.2024 Махашиваратри</Link> </p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>05.04.2024 Экадаши Папамочани </p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold text-indigo-600"><Link href='/gallary/brahmanandajayantiphoto2024'>07.04.2024 Брахмананда-джаянти</Link> </p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">08.04.2024 Весеннее Наваратри</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>19.04.2024 Экадаши Камада</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>04.05.2024 Экадаши Варутхини</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">10.05.2024 Акшая-тритья</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">12.05.2024 Шанкара-джаянти</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>
              <a
                href="https://telegra.ph/Priglashaem-na-tradicionnye-ritrity-v-SHri-Datta-ashram-03-27"
                target="_blank"
                rel="noreferrer"
                className=" text-indigo-600 hover:underline"
              >
                Ритриты в Шри Датта ашраме в мае
              </a>
            </p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>19.05.2024 Экадаши Мохини</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">21.05.2024 Риши Вьяса Джаянти</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>02.06.2024 Экадаши Апара</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>17.06.2024 Экадаши Нирджала</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>02.07.2024 Экадаши Йогини</p>
          </div>
          <div className="flex">
            <Image src={done} width={25} height={20} alt="done" className="mr-2" />
            <p>17.07.2024 Экадаши Падма</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">21.07.2024 Гуру-пурнима</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>31.07.2024 Экадаши Камика</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>16.08.2024 Экадаши Павитропана</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>29.08.2024 Экадаши Аннада</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">07.09.2024 Ганеша-чатуртхи, Шрипада Шриваллабха Джаянти</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>14.09.2024 Экадаши Паршва</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>28.09.2024 Экадаши Индира</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">05.10.2024 Рамалинга-джаянти</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">03.10.2024 Осеннее Наваратри</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>13.10.2024 Экадаши Папанкуша</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">24.10.2024 Вьяса Пуджа</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>27.10.2024 Экадаши Рама</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">29.10.2024 Дханвантари-джаянти</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">01.11.2024 Дивали (Лакшми-пуджа)</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>12.11.2024 Экадаши Уттхана</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>26.11.2024 Экадаши Утпанна</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>11.12.2024 Экадаши Мокшада</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">14.12.2024 Даттатрея-джаянти</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p className=" font-semibold">19.12.2024 Памбатти-джаянти</p>
          </div>
          <div className="flex">
            <Image src={notDone} width={25} height={20} alt="done" className="mr-2" />
            <p>26.12.2024 Экадаши Сапхала</p>
          </div>

        </div> */}
        <EventList />
      </div>
    </div>
  )
}

export default Eventlist2024
