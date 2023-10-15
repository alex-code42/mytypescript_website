import { Navigation } from "./navigation"
 
export default function Layout({ children }: any) {
  return (
    <>
      
      <Navigation />
      <main>{children}</main>
    </>
  )
}