'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
  // Import the CSS file

const blogs = [
  {
    id: 1,
    img: "/assets/imgs/pages/blog/blog.png",
    title: "IT Solutions That Drive Innovation in Your Business",
    description: "Explore how IT solutions can bring transformation and efficiency to your business operations.",
  },
  {
    id: 2,
    img: "/assets/imgs/pages/blog/blog2.png",
    title: "From Risk to Resilience: Strengthening IT Security",
    description: "Discover strategies to strengthen IT security and protect your business from digital threats.",
  },
  {
    id: 3,
    img: "/assets/imgs/pages/blog/blog3.png",
    title: "Building a Robust IT Ecosystem for Your Enterprise",
    description: "Learn how enterprises can build a sustainable and robust IT ecosystem.",
  },
  {
    id: 4,
    img: "/assets/imgs/pages/blog/blog4.png",
    title: "Transforming Small Businesses with IT Automation",
    description: "AI is transforming industries. Here’s how it can enhance your IT strategies.",
  },
  {
    id: 5,
    img: "/assets/imgs/pages/blog/blog5.png",
    title: "Transforming Small Businesses with IT Automation",
    description: "Automation tools are helping small businesses scale and succeed.",
  },
  {
    id: 6,
    img: "/assets/imgs/pages/blog/blog6.png",
    title: "Navigating the Digital Landscape with Smart IT Solutions",
    description: "Smart IT solutions are the key to navigating today’s competitive landscape.",
  },
  {
    id: 7,
    img: "/assets/imgs/pages/blog/blog7.png",
    title: "Leveraging IT for Competitive Advantage in Business",
    description: "Businesses can unlock new opportunities by leveraging IT effectively.",
  },
  {
    id: 8,
    img: "/assets/imgs/pages/blog/blog8.png",
    title: "Cloud vs. On-Premise: Which IT Solution is Right for You?",
    description: "Understand the pros and cons of cloud vs. on-premise IT solutions.",
  },
  {
    id: 9,
    img: "/assets/imgs/pages/blog/blog9.png",
    title: "Maximizing ROI Through Strategic IT Investments",
    description: "Make smarter IT investments that bring maximum ROI for your business.",
  },
]

export default function NewsGrid() {
  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(blogs.length / itemsPerPage)

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <section className="box-section box-contact-section-2">
        <div className="container">
          <div className="row">
            {currentItems.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card-blog">
                  {/* Image */}
                  <div className="card-image">
                    <Link href="/news-details">
                      <img src={blog.img} alt={blog.title} />
                    </Link>
                  </div>

                  {/* Title & Description */}
                  <div className="card-body">
                    <Link href="/news-details" className="card-title">
                      {blog.title}
                    </Link>
                    <p className="card-description">{blog.description}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-container">
            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              ◀ Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next ▶
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

