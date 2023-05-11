import HomeItem from '@/components/HomeIItem'
import { HomeJson } from '@/types/home'

const jsons: HomeJson[] = [
  {
    title: 'ATHLETS',
    image: '/imgs/player1.png',
    articles: [
      {
        title: 'CONNECTION',
        description: 'Connect with coaches directly, you can ping coaches to view profile.',
      },
      {
        title: 'COLLABORATION',
        description:
          'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
      },
      {
        title: 'GROWTH',
        description:
          'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ',
      },
    ],
  },
  {
    title: 'PLAYERS',
    image: '/imgs/player2.png',
    articles: [
      {
        title: 'CONNECTION',
        description:
          'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
      },
      {
        title: 'COLLABORATION',
        description: 'Work with recruiter to increase your chances of findingtalented athlete.',
      },
      {
        title: 'GROWTH',
        description: 'Save your time, recruit proper athlets for your team.',
      },
    ],
  },
]

const Home = () => {
  return (
    <main>
      {jsons.map((json, index) => {
        return <HomeItem index={index} json={json} key={index} />
      })}
    </main>
  )
}

export default Home
