import {
  SiBitcoinsv,
  SiEthereum,
  SiLitecoin,
  SiRipple,
  SiChainlink,
  SiPolkadot,
} from "react-icons/si";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { WalletProps } from "../components/shared/WalletCard";

export const mobileMenuItems = [
  {
    id: crypto.randomUUID(),
    menuTitle: "Overview",
    href: "/home/overview",
  },
  {
    id: crypto.randomUUID(),
    menuTitle: "Home",
    href: "/home",
  },
  {
    id: crypto.randomUUID(),
    menuTitle: "Wallet",
    href: "/home/wallet",
  },
  {
    id: crypto.randomUUID(),
    menuTitle: "Market",
    href: "/home/market",
  },
  {
    id: crypto.randomUUID(),
    menuTitle: "Profile",
    href: "/home/profile",
  },
  {
    id: crypto.randomUUID(),
    menuTitle: "Buy",
    href: "/home/buy",
  },
  {
    id: crypto.randomUUID(),
    menuTitle: "Send",
    href: "/home/send",
  },
  {
    id: crypto.randomUUID(),
    menuTitle: "Receive",
    href: "/home/receive",
  },
];

export const walletItems: WalletProps[] = [
  {
    id: crypto.randomUUID(),
    coin: "BTC",
    currency: "Bitcoin",
    price: "$45,245",
    lot: "2.342456",
    perc: "+2.4%",
    margin: "$200,901.29",
    icon: <SiBitcoinsv size={20} fill="#ff9500" />,
    graph: "src/assets/images/green-graph.png",
    color: "bg-[orange]/50",
    percColor: "text-[green]/100",
  },
  {
    id: crypto.randomUUID(),
    icon: <SiEthereum size={20} fill="#3c3c3d" />,
    coin: "ETH",
    currency: "Ethereum",
    price: "$3,123",
    lot: "5.234567",
    perc: "-1.2%",
    margin: "$16,345.67",
    graph: "src/assets/images/red-graph.png",
    color: "bg-[white]/50",
    percColor: "text-[red]/100",
  },
  {
    id: crypto.randomUUID(),
    icon: <SiLitecoin size={20} fill="#00a6e9" />,
    coin: "LTC",
    currency: "Litecoin",
    price: "$180",
    lot: "10.123456",
    perc: "+0.5%",
    margin: "$1,812.34",
    graph: "src/assets/images/green-graph.png",
    color: "bg-[blue]/50",
    percColor: "text-[green]/100",
  },
  {
    id: crypto.randomUUID(),
    icon: <SiRipple size={20} fill="#00aae4" />,
    coin: "XRP",
    currency: "Ripple",
    price: "$0.84",
    lot: "1000.234567",
    perc: "-3.8%",
    margin: "$840.20",
    color: "bg-[green]/50",
    percColor: "text-[red]/100",
    graph: "src/assets/images/red-graph.png",
  },
  {
    id: crypto.randomUUID(),
    icon: <SiChainlink size={20} fill="#375bd2" />,
    coin: "LINK",
    currency: "Chainlink",
    price: "$24",
    lot: "50.123456",
    perc: "+4.2%",
    margin: "$1,203.45",
    color: "bg-[aqua]/50",
    percColor: "text-[green]/100",
    graph: "src/assets/images/green-graph.png",
  },
  {
    id: crypto.randomUUID(),
    icon: <SiPolkadot size={20} fill="#e6007a" />,
    coin: "DOT",
    currency: "Polkadot",
    price: "$14",
    lot: "200.123456",
    perc: "+1.9%",
    margin: "$2,801.73",
    color: "bg-[pink]/50",
    percColor: "text-[green]/100",
    graph: "src/assets/images/green-graph.png",
  },
];

export const servicesItems = [
  {
    image:
      "https://img.freepik.com/premium-psd/bitcoin-exchange-3d-icon-illustration_235528-1224.jpg",
    title: "Exchange",
    description: "You can exchange all your assets from this wallet",
    status: "Coming soon",
    statusColor: "orange",
  },

  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LHSf_8vY4vwsYYQ3mziteg.jpeg",
    title: "Investments",
    description: "Track your investments easily",
    status: "Coming soon",
    statusColor: "orange",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0qglQavXsV9vS4-KJTi3B4_DXVvO6-Tluw&s",
    title: "Wallet",
    description: "Manage your cryptocurrency wallet",
    status: "Available",
    statusColor: "green",
  },
  {
    image:
      "https://assets-global.website-files.com/6063626728ce7dfd0c61a317/61fc2aeb90f2360ce110689f_Crypto%20Lending.jpeg",
    title: "Loans",
    description: "Apply for crypto-backed loans",
    status: "Coming soon",
    statusColor: "orange",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXJj0O9ahIbiJdGdDwhgBcqcQFichhzjh2g&s",
    title: "Payments",
    description: "Make payments using cryptocurrencies",
    status: "Available",
    statusColor: "green",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPcLZG1egJe5mpnkGuFzzoAeHL8c4_oPtJQ&s",
    title: "Analytics",
    description: "Get detailed analytics of your transactions",
    status: "Coming soon",
    statusColor: "orange",
  },
];

export const coinHoldings = [
  {
    id: crypto.randomUUID(),
    coin: "BTC",
    currency: "Bitcoin",
    price: "$45,245",
    icon: <SiBitcoinsv size={50} fill="#ff9500" />,
    color: "bg-[transparent]",
  },
  {
    id: crypto.randomUUID(),
    coin: "LTC",
    currency: "Litecoin",
    price: "$100,232.90",
    icon: <SiLitecoin size={50} fill="#00a6e9" />,
    color: "bg-[transparent]",
  },
  {
    id: crypto.randomUUID(),
    coin: " DOT",
    currency: "Polkadot",
    price: "$5,245.00",
    icon: <SiPolkadot size={50} fill="#e6007a" />,
    color: "bg-[transparent]",
  },
  {
    id: crypto.randomUUID(),
    coin: "LINK",
    currency: "ChainLink",
    price: "$345,002.33",
    icon: <SiChainlink size={50} fill="#375bd2" />,
    color: "bg-[transparent]",
  },
];

export const activityItems = [
  {
    icon: <FaLongArrowAltUp size={30} fill="#ff9500" />,
    title: "Top up",
    date: "2023-07-08",
    amount: "+34.56",
    status: "COMPLETED",
    statusColor: "text-[green]",
  },
  {
    icon: <FaLongArrowAltDown size={30} fill="#ff9500" />,
    title: "Withdrawal",
    date: "2023-07-07",
    amount: "-120.00",
    status: "FAILED",
    statusColor: "text-[red]",
  },
  {
    icon: <FaLongArrowAltUp size={30} fill="#ff9500" />,
    title: "Transfer",
    date: "2023-07-06",
    amount: "+50.00",
    status: "PENDING",
    statusColor: "text-[yellow]",
  },
  // Add more items as needed
];

export const hotCoinItems = [
  {
    icon: <SiBitcoinsv size={20} fill="#ff9500" />,
    coin: "BTC",
    price: "$23,445",
    change: "+2.3%",
    changeColor: "text-[green]/100",
  },
  {
    icon: <SiEthereum size={20} fill="#3c3c3d" />,
    coin: "ETH",
    price: "$1,755",
    change: "-1.2%",
    changeColor: "text-[red]",
  },
  {
    icon: <SiLitecoin size={20} fill="#00ff00" />,
    coin: "LTC",
    price: "$138",
    change: "+0.5%",
    changeColor: "text-[green]/100",
  },
  {
    icon: <SiPolkadot size={20} fill="#0000ff" />,
    coin: "DOT",
    price: "$355.39",
    change: "-3.2%",
    changeColor: "text-[red]",
  },
  // Add more items as needed
];

export const newListingsItems = [
  /* {
    icon: <SiBitcoinsv size={20} fill="#ff9500" />,
    coin: "BTC",
    price: "$23,445",
    change: "+2.3%",
    changeColor: "text-green-500", // Use tailwind classes for colors
  },
  {
    icon: <FaEthereum size={20} fill="#627eea" />,
    coin: "ETH",
    price: "$1,755",
    change: "-1.2%",
    changeColor: "text-red-500",
  }, */
  {
    icon: <SiLitecoin size={20} fill="#b8b8b8" />,
    coin: "LTC",
    price: "$138",
    change: "+0.5%",
    changeColor: "text-[green]/100",
  },
  {
    icon: <SiBitcoinsv size={20} fill="#00ff00" />,
    coin: "METIS",
    price: "$45",
    change: "+3.8%",
    changeColor: "text-[green]/100",
  },
  {
    icon: <SiBitcoinsv size={20} fill="#ff0000" />,
    coin: "WIF",
    price: "$78",
    change: "-0.4%",
    changeColor: "text-[red]",
  },
  {
    icon: <SiBitcoinsv size={20} fill="#0000ff" />,
    coin: "SOL",
    price: "$90",
    change: "+1.0%",
    changeColor: "text-[green]/100",
  },
  // Add more items as needed
];

export const cryptoCards = [
  {
    gradientFrom: "from-[gray]/20",
    gradientTo: "[orange]",
    coinName: "Bitcoin",
    coinLogo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    cardNumber: "1234 5678 9012 3456",
    expiryDate: "12/24",
    cvv: "123",
    cardHolder: "Milk Maziwa",
    icon1: "BTC",
    icon2: "BC",
  },
  {
    gradientFrom: "from-[purple]",
    gradientTo: "[pink]",
    coinName: "Ethereum",
    coinLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    cardNumber: "2345 6789 0123 4567",
    expiryDate: "11/23",
    cvv: "456",
    cardHolder: "Mzee wa Matulinga",
    icon1: "ETH", 
    icon2: "EC",
  },
  {
    gradientFrom: "from-[blue]",
    gradientTo: "[blue]",
    coinName: "Litecoin",
    coinLogo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    cardNumber: "3456 7890 1234 5678",
    expiryDate: "10/22",
    cvv: "789",
    cardHolder: "Au Sio",
    icon1: "LTC",
    icon2: "LC",
  },
];
