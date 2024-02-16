"use client";
import { Box } from "@chakra-ui/react";

import Hero from "./components/(home)/Hero";
import LatestBid from "./components/(home)/LatestBid";
import LatestUploads from "./components/(home)/LatestUploads";
import Popular from "./components/(home)/Popular";
import HotBids from "./components/(home)/HotBids";
import HotCollections from "./components/(home)/HotCollections";
import Discover from "./components/(home)/Discover";
import Create from "./components/(home)/Create";

export type Bids = {
  image: string;
  name: string;
  price: string;
  stock: number;
  highest_bid: string;
  bidders: {
    name: string;
    src: string;
  }[];
};
const bids = [
  {
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/card-pic-1.jpg",
    name: "Amazing digital art",
    price: "2.45 ETH",
    stock: 3,
    highest_bid: "0.001 ETH",
    bidders: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      {
        name: "Christian Nwamba",
        src: "https://bit.ly/code-beast",
      },
    ],
  },
  {
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/card-pic-2.jpg",
    name: "Amazing digital art",
    price: "2.45 ETH",
    stock: 3,
    highest_bid: "0.001 ETH",
    bidders: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      {
        name: "Christian Nwamba",
        src: "https://bit.ly/code-beast",
      },
    ],
  },
  {
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/card-pic-3.jpg",
    name: "Amazing digital art",
    price: "2.45 ETH",
    stock: 3,
    highest_bid: "0.001 ETH",
    bidders: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      {
        name: "Christian Nwamba",
        src: "https://bit.ly/code-beast",
      },
    ],
  },
  {
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/card-pic-4.jpg",
    name: "Amazing digital art",
    price: "2.45 ETH",
    stock: 3,
    highest_bid: "0.001 ETH",
    bidders: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      {
        name: "Christian Nwamba",
        src: "https://bit.ly/code-beast",
      },
    ],
  },
  {
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/card-pic-5.jpg",
    name: "Amazing digital art",
    price: "2.45 ETH",
    stock: 3,
    highest_bid: "0.001 ETH",
    bidders: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      {
        name: "Christian Nwamba",
        src: "https://bit.ly/code-beast",
      },
    ],
  },
];

export type HotCollectionsProps = {
  name: string;
  images: string[];
  src: string;
  owner: string;
  items: number;
};
const hot_collections = [
  {
    name: "Awesome Collection",
    images: [
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-1.1.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-1.2.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-1.3.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-1.4.jpg",
    ],

    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-5.jpg",
    owner: "Enrico Cole",
    items: 12,
  },
  {
    name: "Awesome Collection",
    images: [
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-2.1.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-2.2.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-2.3.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-2.4.jpg",
    ],

    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-6.jpg",
    owner: "Willie Barton",
    items: 28,
  },
  {
    name: "Awesome Collection",
    images: [
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-3.1.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-3.2.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-3.3.jpg",
      "https://ui8-crypter-nft.herokuapp.com/images/content/photo-3.4.jpg",
    ],

    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-7.jpg",
    owner: "Halle Jakubowski",
    items: 5,
  },
];

export type BiddersProps = {
  rank: string;
  name: string;
  src: string;
  price: string;
};

const rank_bidders = [
  {
    rank: "1",
    name: "Dan Abramov",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-5.jpg",
    price: "2.456 ETH",
  },
  {
    rank: "2",
    name: "Ryan Florence",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-6.jpg",
    price: "2.456 ETH",
  },
  {
    rank: "3",
    name: "Kent Dodds",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-7.jpg",
    price: "2.456 ETH",
  },
  {
    rank: "4",
    name: "Segun Adebayo",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-8.jpg",
    price: "2.456 ETH",
  },
  {
    rank: "5",
    name: "Prosper Otemuyiwa",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-9.jpg",
    price: "2.456 ETH",
  },
];
const latest_upload_creators = [
  {
    name: "Enrico Cole",
    avatar:
      "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-user.jpg",
    price: "3.5 ETH",
    stock: 6,
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/video-preview.jpg",
  },
  {
    name: "Anita Bins",
    avatar: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-2.jpg",
    price: "3.5 ETH",
    stock: 2,
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/video-preview.jpg",
  },
  {
    name: "Joana Wuckert",
    avatar: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-3.jpg",
    price: "3.5 ETH",
    stock: 4,
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/video-preview.jpg",
  },
  {
    name: "Lorena Ledner",
    avatar: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-4.jpg",
    price: "3.5 ETH",
    stock: 3,
    image:
      "https://ui8-crypter-nft.herokuapp.com/images/content/video-preview.jpg",
  },
];
const latest_upload_nfts = [
  {
    cover:
      "https://ui8-crypter-nft.herokuapp.com/images/content/selection-pic-1.jpg",
    name: "The Future of ETH",
    creator: "Enrico Cole",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-user.jpg",
    price: "1.125 ETH",
    stock: 18,
  },
  {
    cover:
      "https://ui8-crypter-nft.herokuapp.com/images/content/selection-pic-2.jpg",
    name: "ETH never die",
    creator: "Enrico Cole",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-user.jpg",
    price: "3.5 ETH",
    stock: 12,
  },
  {
    cover:
      "https://ui8-crypter-nft.herokuapp.com/images/content/selection-pic-3.jpg",
    name: "ETH never die",
    creator: "Enrico Cole",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-user.jpg",
    price: "3.5 ETH",
    stock: 4,
  },
  {
    cover:
      "https://ui8-crypter-nft.herokuapp.com/images/content/selection-pic-1.jpg",
    name: "ETH never die",
    creator: "Enrico Cole",
    src: "https://ui8-crypter-nft.herokuapp.com/images/content/avatar-user.jpg",
    price: "3.5 ETH",
    stock: 3,
  },
];

export default function Home() {
  return (
    <Box as="main" minH="80vh">
      <Hero />
      <LatestBid />
      {/* LATEST UPLOADS */}
      <Box>
        <LatestUploads
          creators={latest_upload_creators}
          nfts={latest_upload_nfts}
        />
      </Box>

      {/* POPULAR */}
      <Box bgColor="gray.900">
        <Popular bidders={rank_bidders} />
      </Box>

      {/* HOT BIDS */}
      <HotBids bids={bids} />

      {/* HOT COLLECTIONS */}
      <HotCollections collections={hot_collections} />

      {/* DISCOVER */}
      <Discover bids={bids} />
      {/* CREATE */}
      <Box borderY="1px solid" borderColor="gray.700">
        <Create />
      </Box>
    </Box>
  );
}
