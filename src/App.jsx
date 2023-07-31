import { Header } from "./components/Header"
import { Section } from "./components/Section"
import { TotalValues } from "./components/TotalValues"
import "./styles/index.scss"

export const App = () => {
  return (
    <>
      <Header />
      <Section />
      <TotalValues />
    </>
  )
}