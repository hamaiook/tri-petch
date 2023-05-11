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

  return (
    <div className="bg-W1">
      <div className="px-4">
        <span className="text-[50px] text-G1">{json.title}</span>
        <div className="relative z-10 mt-[11px] flex justify-center">
          <img alt="ATHLETS" className="-mb-[60px] h-[281px] w-[200px]" src={json.image} />
        </div>
      </div>
      <div className="relative z-0 bg-P4">
        <div className="">
          <div className="relative mb-8 flex h-full w-full items-center justify-center overflow-hidden">
            <div className="flex snap-mandatory overflow-x-scroll scroll-smooth">
              {json.articles.map((article, ind) => {
                return (
                  <div
                    className="w-full shrink-0 px-4 pt-20"
                    id={`slides_${index}_${ind + 1}`}
                    key={ind}
                  >
                    <div className="flex items-center">
                      <span className="mr-2 border-b-4 border-b-P1 text-sm text-D1">{`0${
                        ind + 1
                      }`}</span>
                      <span className="text-[28px] text-G2">{article.title}</span>
                    </div>
                    <div className="pt-[20px]">
                      <span className="text-[15px] text-D1">{article.description}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="box-border pb-6 text-center">{indents}</div>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
