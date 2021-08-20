import * as React from "react";
import { Link } from "gatsby";

const Gallery = () => (
  <div className="Gallery">
    <h1>GALLERY</h1>
    <p>
      Every <span>Smile</span> has a story. <br /> With Each <span>Smile</span>
      we <span>capture,</span> we hope to <br />{" "}
      <span> Connect, Inspire & Empower. </span>
    </p>
    <Link to="/gallery">Open Gallery</Link>
    <br />
    <br />
    <br />
  </div>
);

export default Gallery;
