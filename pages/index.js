import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-10">
      <Head>
        <title>cookie-stand-api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-4 bg-green-500 text-black-100">
        <h1 className="text-3xl font-extrabold">Cookie Stand Admin</h1>
      </header>
      <main>
        <div>
          <form className="p-4 w-3/4 mx-auto my-5 bg-green-500 rounded-md space-x-10 space-y-10">
            <h1 className="flex justify-center text-2xl font-extrabold">Create Cookie Stand</h1>
            <div className="flex">
              <label className="mr-4">Location:</label>   
              <input className="flex-grow "type="text" name="location" />
            </div>
            <div className="flex justify-between -mx-3 mb-2">
              <div >
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Minimum customers per hour
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
              </div>
              <div >
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Maximum customers per hour
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
              </div>
              <div >
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Average cookies per slae
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text"/>
              </div>
              <div >
              <button class="text-teal-500 bg-transparent border border-solid border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Create</button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer className="p-4 bg-green-500">
        <nav className="flex items-center justify-left space-x-10">
          <Link href="/careers">
            <a className="text-xl" href="careers">2021</a>
          </Link>
        </nav>
      </footer>
    </div>
  )
}
