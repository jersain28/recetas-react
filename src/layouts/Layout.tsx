import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {
  const loadFavorites = useAppStore(state => state.loadFavorites)

  useEffect(() => {
    loadFavorites()
  })

  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  )
}
