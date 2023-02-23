export default function Home() {
  return (
    <>
      <main className="">
        <div className="bg-very-light-gray w-screen h-screen-95">
          <div className="bg-img-light dark:bg-img-dark bg-cover	h-screen-30 flex w-screen items-center justify-center">
            <h1 className="font-700 text-3xl text-white">T O D O</h1>

            <div>
              <input
                className="w-screen-30 px-10 py-3 rounded-lg"
                type="text"
                placeholder="Create a new todo..."
              />
            </div>
          </div>

          <div className="bg-white rounded-md shadow-lg w-screen-30 ml-auto mr-auto  bottom-10">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div className="border-solid border-2 py-4 px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus enim, perspiciatis iure, sapiente veritatis est
                nihil numquam delectus fugiat itaque dolorem, voluptates unde
                nisi animi quos similique quasi? Iure.
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
