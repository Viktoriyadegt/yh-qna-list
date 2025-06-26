import './global.css'
import './../shared/styles/index.css'
import { Layout } from './Layout/Layout.tsx'
import { Button } from '../shared/ui'
import stc from './../shared/assets/ArrowForward.svg'

function App() {
  return (
    <Layout>
      <Button variant={'skill'}>
        <img src={stc} alt={'smfls'} />
        content
      </Button>
    </Layout>
  )
}

export default App
