import { Button } from 'flowbite-react';
import pics from "../assets/images.jpg"
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'
    // style={{
    //     backgroundColor: "#f2f0ef",
    //     margin: "auto"
    // }}
    >
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want Live Pro Help ?
            </h2>
            <p className='text-gray-500 my-2'>
                Reach out to a professional Security Personnel !!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="/chat/:chatId" target='' rel='noopener noreferrer'>
                   Live Now 
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1"
        style={{
            objectFit: "cover",
        }}>
            <img src={pics} />
        </div>
    </div>
  )
}