import { useState } from 'react'

import { HomeJson } from '@/types/home'

interface Props {
  json: HomeJson
  index: number
}

const HomeItem = ({ json, index }: Props) => {
  const [currentTab, setCurrentTab] = useState<string>(`slides_${index}_1`)

  const indents = []
  for (let i = 0; i < json.articles.length; i++) {
    indents.push(
      <a
        className={`mx-2 inline-block h-4 w-4 rounded-full border-none ${
          currentTab === `slides_${index}_${i + 1}` ? 'bg-P1' : 'bg-G3'
        }`}
        href={`#slides_${index}_${i + 1}`}
        key={i}
        onClick={() => setCurrentTab(`slides_${index}_${i + 1}`)}
      />
    )
  }

  const padding =
    json.padding === 'left' ? 'md:pl-[300px] lg:pl-[600px]' : 'md:pr-[300px] lg:pr-[600px]'
  const position = json.padding === 'left' ? '' : 'md:right-4'

  return (
    <div className="bg-W1 md:relative">
      <div className="px-4 md:px-0">
        <span className={`px-4 text-[50px] text-G1 ${padding}`}>{json.title}</span>
        <div className={`z-10 mt-[11px] flex justify-center md:absolute ${position}`}>
          <img
            alt="ATHLETS"
            className="-mb-[60px] h-[281px] w-[200px] md:h-[400px] md:w-[300px] lg:h-[450px] lg:w-[500px]"
            src={json.image}
          />
        </div>
      </div>
      <div className="z-0 bg-P4 md:bg-white">
        <div className="">
          <div className="relative mb-8 flex h-full w-full items-center justify-center overflow-hidden md:mb-0 md:block">
            <div className="flex snap-mandatory overflow-x-scroll scroll-smooth md:block">
              {json.articles.map((article, ind) => {
                let bgColor = 'md:bg-white'
                let borderColor = 'md:border-b-P1'
                let textColor = 'md:text-D1'
                if (ind === 1) {
                  bgColor = 'md:bg-P4'
                } else if (ind === 2) {
                  if (index === 1) {
                    bgColor = 'md:bg-B1'
                    borderColor = 'md:border-b-white'
                    textColor = 'md:text-white'
                  } else {
                    bgColor = 'md:bg-P2'
                    borderColor = 'md:border-b-white'
                  }
                }
                return (
                  <div
                    className={`w-full shrink-0 px-4 pt-20 md:py-[30px] ${padding} ${bgColor}`}
                    id={`slides_${index}_${ind + 1}`}
                    key={ind}
                  >
                    <div className="flex items-center">
                      <span className={`mr-2 border-b-4 ${borderColor} text-sm text-D1`}>{`0${
                        ind + 1
                      }`}</span>
                      <span className="text-[28px] text-G2">{article.title}</span>
                    </div>
                    <div className="pt-[20px]">
                      <span className={`text-[15px] ${textColor}`}>{article.description}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="box-border pb-6 text-center md:hidden">{indents}</div>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
