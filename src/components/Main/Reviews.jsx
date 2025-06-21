import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Reviews = () => {
  return (
    <div className='container mx-auto max-w-7x'>
        <p className='max-w-[1260px] mx-auto text-[#F0D625] text-[32px] md:text-[32px] font-bold text-center md:text-start'>отзывы</p>
       <div className=' max-w-[1260px] flex  justify-center overflow-x-auto'>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-[300px] ml-2 sm:w-[350px] sm:ml-13 md:w-[550px] md:ml-9 lg:w-[800px] xl:w-[1130px] xl:ml-8 max-w-7xl"
    >
      <CarouselContent className='mt-5'>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className="basis-3/6 md:basis-2/6 lg:basis-2/6 xl:basis-1/5 ">
            <div className="p-1 ">
              <Card className='bg-gray-500'>
                <CardContent className="flex aspect-square items-center justify-center p-2 ">
                  <span className="text-3xl font-semibold ">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
       </div>
    </div>
  )
}

export default Reviews