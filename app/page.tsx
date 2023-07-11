import Banner from "@/components/Banner";
import Input from "@/components/Input";
import ThemeContextProvider from "@/context/ThemeContext";

const HomePage: React.FC = () => {

  return (
    <ThemeContextProvider>
      <main className="bg-very_dark_blue h-screen font-josefin">
        <Banner />
        <Input />
      </main>
    </ThemeContextProvider>
  )
}

export default HomePage; 