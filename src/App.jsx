import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import ImageGrid from "./components/ImageGrid"
import Modal from "./components/Modal"
import Loader from "./components/Loader"

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const App = () => {
  const [img, setImg] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("cars")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [selectedImg, setSelectedImg] = useState(null)

  // Debounce
  useEffect(() => {
    if (search === "") return

    const timer = setTimeout(() => {
      setImg([])
      setPage(1)
      setQuery(search)
    }, 600)

    return () => clearTimeout(timer)
  }, [search])

  const getData = async () => {
    if (loading) return
    setLoading(true)

    try {
      const res = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, page, per_page: 30 },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        }
      )

      const newData = res.data.results

      setImg(prev => {
        const ids = new Set(prev.map(i => i.id))
        return [...prev, ...newData.filter(i => !ids.has(i.id))]
      })

    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [query, page])

  // Infinite scroll
  useEffect(() => {
    let timeout

    const handleScroll = () => {
      if (timeout) return

      timeout = setTimeout(() => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 150 &&
          !loading
        ) {
          setPage(prev => prev + 1)
        }
        timeout = null
      }, 150)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [loading])

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-900 text-white">
      <Navbar setSearch={setSearch} />
      <ImageGrid images={img} setSelectedImg={setSelectedImg} />
      {loading && <Loader />}
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </div>
  )
}
export default App