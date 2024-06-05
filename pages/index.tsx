import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Dexter Personal Coach</Text>
        <Text className="text-zinc-600">
          Lets get healthier together! Dexter is your AI powered personal coach that can help you with your fitness goals.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Dexter: </Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

//This shows how to use the Layout component and i commented it out because it 
// doesn't suit the design of the page

// Home.Layout = Layout

export default Home
