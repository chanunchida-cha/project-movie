import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Home from "@/components/Home";
import CardMovie from "@/layouts/CardMovie";

export default function Index() {
  return (
   <CardMovie 
   image="/assets/images/Angel.webp"
   movieName="Harry Potter and the Prisoner of Azkaban"
   />
  );
}
