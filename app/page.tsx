'use client'

import Banner from "@/components/Banner";
import Input from "@/components/Input";
import TodoList from "@/components/TodoList";
import { ThemeContext } from "@/context/ThemeContext";
import ThemeCon from "@/interfaces/ThemeCon";
import { useContext } from "react";

const HomePage: React.FC = () => {

  const context = useContext<ThemeCon | null>(ThemeContext);

  const { theme } = context!

  return (
    <main className={`h-screen font-josefin ${theme === 'light' ? 'bg-very_light_grayish_blue' : 'bg-very_dark_blue'}`}>
      <Banner />
      <Input />
      <TodoList />
    </main>
  )
}

export default HomePage; 