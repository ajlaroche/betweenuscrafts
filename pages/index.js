import { Fragment } from "react";
import FavoritesList from "../components/gallery/favoritesList";

const TEST_GALLERY = [
  {
    id: "1",
    image:
      "https://storage.googleapis.com/between-us-crafts-gallery/public/sample1.jpg",
    title: "Sample 1",
    description: "Back to School Sign 8x10",
  },
  {
    id: "2",
    image:
      "https://storage.googleapis.com/between-us-crafts-gallery/public/sample2.jpg",
    title: "Sample 2",
    description: "Back to School Sign 8x10",
  },
  {
    id: "3",
    image:
      "https://storage.googleapis.com/between-us-crafts-gallery/public/sample3.jpg",
    title: "Sample 3",
    description: "Back to School Sign 8x10",
  },
  {
    id: "4",
    image:
      "https://storage.googleapis.com/between-us-crafts-gallery/public/sample7.jpg",
    title: "Sample 4",
    description: "Black on white",
  },
  {
    id: "5",
    image:
      "https://storage.googleapis.com/between-us-crafts-gallery/public/sample5.jpg",
    title: "Sample 5",
    description: "Black on white",
  },
];

function HomePage(props) {
  return <FavoritesList samples={TEST_GALLERY} />;
}

export default HomePage;
