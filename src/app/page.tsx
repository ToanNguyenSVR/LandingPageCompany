"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function RootPage() {
  return redirect("/en");
}
