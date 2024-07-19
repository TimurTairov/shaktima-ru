import { BiSolidDonateHeart } from "react-icons/bi";


const Donate = () => {

  return (
    <div className="max-w-screen-xl mx-auto mt-4 h-screen">
      <h1 className="text-2xl ml-2 mb-4">Пожертвовать на развитие Дхарма центра</h1>
      <div className="ml-2">
        <div className="flex items-center text-xl my-2 text-indigo-600">
          <h1 className="mr-2 font-semibold">Ю-Money</h1>
          <BiSolidDonateHeart />
        </div>

        <iframe
          title="108r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=aejT5wRP1vY.230410&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />
        <iframe
          title="540r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=y4lXeQOxU8o.230415&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />

        <iframe
          title="1080r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=SGusHwIOHgo.230412&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />
      </div>

    </div>
  )
}

export default Donate
