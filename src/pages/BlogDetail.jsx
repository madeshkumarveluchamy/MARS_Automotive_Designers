import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Components/BlogLayout/css/Blog.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const post = location.state?.post;

  if (!post) {
    return (
      <div className="mars-dossier-root d-flex justify-content-center align-items-center">
        <h2>Blog Not Found</h2>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="mars-dossier-root">
      <div className="container">

        <button
          onClick={() => navigate("/blog")}
          className="btn-back mb-4"
        >
          ← BACK TO BLOG
        </button>

        <span className="card-tag text-cyan maindes">
          {post.cat} // REPORT_ID: #{post.id}
        </span>

        <h1
          className="dossier-title-detail my-3 maintit"
          style={{ fontWeight: "900" }}
        >
          {post.title}
        </h1>

        <img
          src={post.img}
          alt={post.title}
          className="img-fluid rounded my-4"
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover"
          }}
        />

        <div className="detail-description  maindes">
          <p>
            Mars Automotive Designers specialize in the precision fabrication
            of heavy-duty vehicle bodies.
          </p>

          <p>
            This engineering report focuses on
            <strong > {post.title}</strong>.
          </p>

          <h4
            className="mt-5 maintit"
            style={{
              borderLeft: "4px solid #ff5f38",
              paddingLeft: "15px"
            }}
          >
            TECHNICAL ANALYSIS
          </h4>

          <p className="maindes">
            Advanced CAD modelling, structural simulation and quality
            inspection are used throughout the manufacturing process.
          </p>

          <div className="row mt-4">
            <div className="col-md-6">
              <div
                className="p-3"
                style={{
                  background: "#111",
                  border: "1px solid #333"
                }}
              >
                <h6 className="accent maintit">
                  STRUCTURAL INTEGRITY
                </h6>
                <p className="maindes">
                  X-ray verified weld joints.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="p-3"
                style={{
                  background: "#111",
                  border: "1px solid #333"
                }}
              >
                <h6 className="accent maintit">
                  PAYLOAD OPTIMIZATION
                </h6>
                <p className="maindes">
                  Lightweight high-strength design.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default BlogDetail;