"use client";
import { createContext } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import ImageGrid from "./Images/imageGrid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

export default function Home() {
  return <Homepage />;
}
