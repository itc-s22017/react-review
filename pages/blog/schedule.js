import { client } from 'lib/api'

const Schedule = () => {
  return (
    <h1>HI</h1>
  )
}

export const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs',
  })

  try {
    const res = await resPromise
    console.log(res)
  } catch (e) {
    console.log(e)
  }

  return {
    props: {}
  }
}

export default Schedule
