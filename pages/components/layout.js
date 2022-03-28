import PrimarySearchAppBar from "./appbar";

export default function Layout({ children }) {
    return (
      <>
        <PrimarySearchAppBar />
        <main>{children}</main>
      </>
    )
  }