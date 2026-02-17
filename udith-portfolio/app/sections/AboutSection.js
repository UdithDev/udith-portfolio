"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// ─── SVG Skill Icons ──────────────────────────────────────────────────────────

const SkillIcons = {
  // ── Existing icons (unchanged) ──────────────────────────────────────────────
  JavaScript: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <rect width="128" height="128" fill={hovered ? "#F7DF1E" : "#4B5563"} rx="6"
        style={{ transition: "fill 0.4s ease" }} />
      <path fill={hovered ? "#000" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M67.1 84.4c1.9 3.1 4.4 5.4 8.8 5.4 3.7 0 6.1-1.9 6.1-4.4 0-3.1-2.4-4.1-6.5-5.9l-2.2-.9c-6.5-2.7-10.7-6.2-10.7-13.4 0-6.7 5.1-11.7 13-11.7 5.6 0 9.7 2 12.6 7.1l-6.9 4.4c-1.5-2.7-3.2-3.8-5.7-3.8-2.6 0-4.3 1.6-4.3 3.8 0 2.7 1.6 3.7 5.4 5.4l2.2.9c7.6 3.3 11.9 6.6 11.9 14.1 0 8.1-6.3 12.4-14.8 12.4-8.3 0-13.6-3.9-16.2-9.1l7.3-4.3zM45.1 85c1.4 2.4 2.6 4.5 5.6 4.5 2.9 0 4.7-1.1 4.7-5.5V54h8.7v30.2c0 9-5.3 13.1-13 13.1-7 0-11-3.6-13.1-8l7.1-4.3z" />
    </svg>
  ),
  // React: ({ hovered }) => (
  //   <svg viewBox="0 0 128 128" className="w-10 h-10">
  //     <circle cx="64" cy="64" r="11.4" fill={hovered ? "#61DAFB" : "#6B7280"}
  //       style={{ transition: "fill 0.4s ease" }} />
  //     <g fill="none" stroke={hovered ? "#61DAFB" : "#6B7280"} strokeWidth="5.5"
  //       style={{ transition: "stroke 0.4s ease" }}>
  //       <ellipse cx="64" cy="64" rx="51" ry="19" />
  //       <ellipse cx="64" cy="64" rx="51" ry="19" transform="rotate(60 64 64)" />
  //       <ellipse cx="64" cy="64" rx="51" ry="19" transform="rotate(120 64 64)" />
  //     </g>
  //   </svg>
  // ),
  "Next.js": ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <circle cx="64" cy="64" r="64" fill={hovered ? "#000000" : "#374151"}
        style={{ transition: "fill 0.4s ease" }} />
      <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M106.3 99.3L51.1 28H38v72h10.2V41.8l51.1 66.6c2.4-2.9 4.7-6 7-9.1zM84 28h10v72H84z" />
    </svg>
  ),
  "Node.js": ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill={hovered ? "#83CD29" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M64 5.1L10.7 35.8v61.4L64 127.9l53.3-30.7V35.8L64 5.1z" />
      <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M64 21.5l-34.3 19.8v39.4L64 100.5l34.3-19.8V41.3L64 21.5zM58.7 76.8V37.4h10.6v39.4L64 80z" />
    </svg>
  ),
  "CSS/SCSS": ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill={hovered ? "#264de4" : "#374151"} style={{ transition: "fill 0.4s ease" }}
        d="M10.8 116.8L24 11h80l-13.2 105.7L64 127z" />
      <path fill={hovered ? "#2965f1" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M64 119.2l30.9-8.6L105.6 23H64z" />
      <path fill={hovered ? "#ebebeb" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M64 66.6H47.9l-1.1-12.9H64V41.1H34.1l.4 4.4 3.7 41.7H64zm0 25.9l-.1.1-13.1-3.5-1-10.7H37.1l1.8 20.4 25 6.9z" />
      <path fill={hovered ? "#ffffff" : "#6B7280"} style={{ transition: "fill 0.4s ease" }}
        d="M63.9 66.6v12.6h15l-1.4 16.4-13.6 3.5v13.1l25.1-6.9.2-2.1 2.9-32.1.3-4.5zm0-25.5v12.6h29.4l.5-8.2z" />
    </svg>
  ),
  TypeScript: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <rect width="128" height="128" fill={hovered ? "#3178C6" : "#374151"} rx="6"
        style={{ transition: "fill 0.4s ease" }} />
      <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M22 63.6h26v8H35v38.8h-8V71.6H22v-8zM73.1 62.2c4.4 0 7.9 1 10.5 3.2 2.6 2.1 4 5.2 4.1 9.3H80c-.1-2.1-.8-3.7-2.2-4.9-1.4-1.1-3.2-1.7-5.6-1.7-2.2 0-4 .5-5.2 1.5-1.3 1-1.9 2.3-1.9 4 0 1.4.6 2.6 1.7 3.5 1.1.9 3.3 1.8 6.6 2.7 3.3.9 5.9 1.9 7.7 2.9 1.8 1 3.1 2.3 4 3.7.9 1.5 1.3 3.2 1.3 5.3 0 4.1-1.5 7.2-4.4 9.5-2.9 2.2-6.8 3.4-11.7 3.4-4.6 0-8.3-1-11.1-3.1-2.8-2.1-4.3-5.3-4.4-9.7h7.8c.1 2.4.9 4.2 2.4 5.3 1.5 1.1 3.5 1.7 6 1.7 2.4 0 4.3-.5 5.6-1.5 1.3-1 2-2.4 2-4.2 0-1.7-.6-3-1.8-3.9-1.2-.9-3.5-1.8-6.9-2.7-4.9-1.4-8.3-3-10.3-4.9-1.9-1.9-2.9-4.3-2.9-7.3 0-3.9 1.5-7 4.4-9.2 2.9-2.2 6.7-3.3 11.3-3.3z" />
    </svg>
  ),
  ".NET": ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <circle cx="64" cy="64" r="60" fill={hovered ? "#512BD4" : "#374151"}
        style={{ transition: "fill 0.4s ease" }} />
      <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M28.5 85V43h8.8l20.2 31.7V43H65v42h-8.8L36 53.3V85h-7.5zM70 85V43h27.5v7H77.8v10.3h18.4v7H77.8V78H98v7H70zM22 73.5a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
  ),
  Oracle: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill={hovered ? "#F80000" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M64 14C35.3 14 12 37.3 12 66s23.3 52 52 52 52-23.3 52-52S92.7 14 64 14zm0 84c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    </svg>
  ),
  SharePoint: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <circle cx="64" cy="64" r="60" fill={hovered ? "#0078D4" : "#374151"}
        style={{ transition: "fill 0.4s ease" }} />
      <circle cx="50" cy="52" r="22" fill={hovered ? "#fff" : "#6B7280"} fillOpacity="0.9"
        style={{ transition: "fill 0.4s ease" }} />
      <circle cx="50" cy="52" r="14" fill={hovered ? "#0078D4" : "#374151"}
        style={{ transition: "fill 0.4s ease" }} />
      <circle cx="80" cy="74" r="18" fill={hovered ? "#fff" : "#6B7280"} fillOpacity="0.7"
        style={{ transition: "fill 0.4s ease" }} />
      <circle cx="80" cy="74" r="11" fill={hovered ? "#0078D4" : "#374151"}
        style={{ transition: "fill 0.4s ease" }} />
    </svg>
  ),

  // ── NEW Icons ────────────────────────────────────────────────────────────────
  Java: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill={hovered ? "#EA2D2E" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M49.2 109.9s-4 2.3 2.8 3.1c8.2 1 12.4.9 21.5-.9 0 0 2.4 1.5 5.7 2.7-20.2 8.7-45.8-.5-30-4.9zM46.8 98.4s-4.5 3.3 2.3 4c8.7.9 15.5 1 27.4-1.3 0 0 1.6 1.7 4.2 2.6-24.3 7.1-51.3.6-33.9-5.3z" />
      <path fill={hovered ? "#EA2D2E" : "#6B7280"} style={{ transition: "fill 0.4s ease" }}
        d="M70.5 72.1c4.9 5.7-1.3 10.8-1.3 10.8s12.5-6.5 6.8-14.6c-5.4-7.6-9.5-11.4 12.8-24.4 0 0-35 8.7-18.3 28.2z" />
      <path fill={hovered ? "#EA2D2E" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M99.7 121.6s2.9 2.4-3.2 4.3c-11.8 3.5-49 4.6-59.3.1-3.7-1.6 3.3-3.9 5.5-4.3 2.3-.5 3.6-.4 3.6-.4-4.1-2.9-26.7 5.7-11.5 8.2 41.5 6.7 75.7-3 64.9-7.9z" />
      <path fill={hovered ? "#5484CE" : "#6B7280"} style={{ transition: "fill 0.4s ease" }}
        d="M51.1 83.5s-18.8 4.5-6.7 6.1c5.1.7 15.3.5 24.8-.3 7.8-.6 15.6-2 15.6-2s-2.7 1.2-4.7 2.5c-18.8 5-55.1 2.7-44.7-2.4 8.9-4.4 15.7-3.9 15.7-3.9z" />
      <path fill={hovered ? "#5484CE" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M90.9 105.3c19.1-9.9 10.3-19.5 4.1-18.2-1.5.3-2.2.6-2.2.6s.6-.9 1.6-1.3c12.2-4.3 21.5 12.6-4 19.3.1-.1.4-.3.5-.4z" />
      <path fill={hovered ? "#EA2D2E" : "#6B7280"} style={{ transition: "fill 0.4s ease" }}
        d="M76.3 2s10.7 10.7-10.2 27.2c-16.8 13.2-3.8 20.8 0 29.4-9.8-8.8-17-16.6-12.2-23.8C61.1 24.1 79.6 19.5 76.3 2z" />
      <path fill={hovered ? "#EA2D2E" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M55 128.2c18.3 1.2 46.5-.7 47.2-9.4 0 0-1.3 3.3-15.2 5.9-15.6 3-34.9 2.6-46.3.7 0 .1 2.3 1.9 14.3 2.8z" />
    </svg>
  ),

  "Spring Boot": ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <circle cx="64" cy="64" r="60" fill={hovered ? "#6DB33F" : "#374151"}
        style={{ transition: "fill 0.4s ease" }} />
      <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M107 41.6c-1.7-3-4.2-4.2-7.5-3.7-2.5.4-4.4 1.8-5.5 4-1.1 2.2-.9 4.4.3 6.5.9 1.5 2.1 2.5 3.6 3.1-4.2 7.8-10.1 13.6-18 17.3-5.1 2.4-10.4 3.5-15.9 3.3-4.5-.2-8.7-1.3-12.6-3.5-2.8-1.6-5.1-3.7-6.7-6.5-.9-1.6-1.4-3.3-1.4-5.1 0-3.7 1.5-6.7 4.4-8.9 2.4-1.8 5.1-2.6 8.1-2.3 4.2.4 7.4 2.5 9.4 6.2.9 1.6 1.3 3.4 1.2 5.2-.1 1.1-.4 2.1-.9 3.1-.3.6-.1.9.5.7 3.5-1.2 5.8-3.6 6.8-7.2 1.1-3.9.3-7.5-2.2-10.6-2.9-3.6-6.8-5.4-11.4-5.5-5.4-.1-10.1 1.8-13.9 5.7-3.4 3.5-5.1 7.7-5 12.5.1 4.5 1.7 8.5 4.7 11.8 3.5 3.8 8 6.1 13 7.1 6.9 1.4 13.6.5 20-2.4 8.7-4 15.3-10.3 20.1-18.9.6.1 1.2.2 1.8.1 3.3-.1 5.9-1.6 7.5-4.5 1.6-2.8 1.5-5.7-.4-8.5z" />
    </svg>
  ),

  Azure: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <defs>
        <linearGradient id="azureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={hovered ? "#0078D4" : "#374151"} style={{ transition: "stop-color 0.4s ease" }} />
          <stop offset="100%" stopColor={hovered ? "#50E6FF" : "#4B5563"} style={{ transition: "stop-color 0.4s ease" }} />
        </linearGradient>
      </defs>
      <path fill="url(#azureGrad)"
        d="M47.6 8h36.3L49.3 120H13L47.6 8z" />
      <path fill={hovered ? "#50E6FF" : "#6B7280"} style={{ transition: "fill 0.4s ease" }}
        d="M80.4 8h32.6L68.3 62.5l24.2 38.7H52.2L80.4 8z" />
      <path fill={hovered ? "#0078D4" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M13 120l36.3-57.5L68.3 120H13z" />
    </svg>
  ),

  MySQL: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill={hovered ? "#00618A" : "#374151"} style={{ transition: "fill 0.4s ease" }}
        d="M2 99.2c5.5.1 9.4-.4 13-2.2V97c-3.2-3.3-3.6-8.6-3.5-13.3V56.4c0-14.9 0-17.6-.2-20.7-.2-3.3-.9-4.9-4-5.3-.7-.1-2.2-.2-3.5-.2v-2.5c3.5.1 11.3.2 11.3.2s7.7-.1 10.9-.2v2.5c-1.1 0-2.1.1-3 .2-2.7.5-3.5 2-3.7 5.3-.2 3.1-.2 5.8-.2 20.7v13.6c0 .4.2.6.5.5 1.3-.7 2.7-1.6 4-2.5l25-18.9 2.8 2.2-27.8 21.3c-.5.4-.5.7 0 1.2l30.6 33.3c3.3 3.6 5.5 5.3 9.9 6.2v2.5c-2-.1-5.7-.2-5.7-.2s-9.5.1-13.3.2v-2.5c1.1-.2 2.2-.6 2.5-1.7.3-1.2-.1-2.7-1.1-3.9L26 66.8c-.3-.4-.6-.4-.7 0V83.7c0 4.7.4 9.9 3.3 13.2.1.1.1.2 0 .3-2.2 1.5-5.4 2.2-10.8 2.2H2v-2.2z" />
      <path fill={hovered ? "#00618A" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M85.6 59.4c2.5-3.3 6.2-5.5 10.6-5.5 8.7 0 14.9 6.6 14.9 15.9 0 9.8-6.5 17.2-15.8 17.2-4.2 0-7.7-1.7-10.2-4.3L83 99.4c-.5 1.1-.2 1.8 1.1 2.1 1 .2 2.4.4 3.4.4v2.5c-2.3-.1-7.8-.2-7.8-.2s-6 .1-8.8.2v-2.5c1.1-.1 2-.2 2.8-.4 1.5-.4 1.9-1.1 2.4-2.6L86 55.7l-1.8-1.3.7-.8 3.6 2.2 3.8-2.2.7.8-7.4 4.9v.1zm.5 19.2c2.1 2.5 5.1 3.8 7.9 3.8 5.7 0 9.3-4.9 9.3-12.5 0-6.8-3.4-11.5-8.7-11.5-3.5 0-6.5 1.9-8.5 4.9v15.3z" />
      <path fill={hovered ? "#E48E00" : "#6B7280"} style={{ transition: "fill 0.4s ease" }}
        d="M119.8 26.2c-4.2-1.6-7.1-2.4-11.7-2.4-7.2 0-11.7 3.6-11.7 9.4 0 4.9 3.3 7.8 10.1 10.3 5.3 1.9 6.7 3.4 6.7 6.2 0 3.3-2.6 5-7.3 5-3.7 0-7.2-1.1-10.2-2.7v5.8c3.5 1.1 6.9 1.7 10.3 1.7 8.5 0 13.3-3.9 13.3-10.8 0-5.2-2.7-8.1-9.9-10.6-5.7-2-7.2-3.2-7.2-6 0-2.8 2.2-4.4 6.3-4.4 3 0 5.9.7 9 2v-3.5h2.3z" />
    </svg>
  ),

  // PHP: ({ hovered }) => (
  //   <svg viewBox="0 0 128 128" className="w-10 h-10">
  //     <ellipse cx="64" cy="64" rx="62" ry="33" fill={hovered ? "#6181B6" : "#374151"}
  //       style={{ transition: "fill 0.4s ease" }} />
  //     <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
  //       d="M31.2 69.5l1.8-9.2h7.1c2.5 0 4.2.4 5 1.3.8.8.9 2.2.5 4-.4 1.9-1.2 3.3-2.4 4.2-1.1.9-2.7 1.4-4.8 1.4H35l-.8 4.1h-4.4l1.4-5.8zm4.6-6.2l-.9 4.6h2.2c1.4 0 2.4-.2 3-.7.6-.5 1-1.3 1.2-2.3.2-1.1.1-1.8-.3-2.2-.4-.4-1.3-.6-2.5-.6h-2.7zm13.4-3h4.3l-.6 2.9c1.1-2.2 2.8-3.3 4.9-3.3.7 0 1.3.1 1.7.3l-.9 4c-.6-.3-1.2-.5-1.9-.5-1 0-1.9.4-2.7 1.2s-1.4 2.2-1.8 4.1l-.8 4.3h-4.3l2.1-13zm10.3 3h4.3l-1.8 9.3c-.3 1.6-.2 2.6.4 3.2.6.5 1.7.8 3.3.8 1.5 0 2.7-.3 3.4-.9.7-.6 1.3-1.7 1.6-3.2l1.8-9.2h4.3l-1.9 9.5c-.5 2.6-1.6 4.5-3.3 5.6-1.7 1.2-4 1.7-6.9 1.7-2.7 0-4.7-.5-5.8-1.6-1.2-1.1-1.5-2.9-1-5.4l1.6-9.8zm-28.8 3l-.9 4.6h2.2c1.4 0 2.4-.2 3-.7.6-.5 1-1.3 1.2-2.3.2-1.1.1-1.8-.3-2.2-.4-.4-1.3-.6-2.5-.6h-2.7z" />
  //   </svg>
  // ),

  Laravel: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill={hovered ? "#FF2D20" : "#4B5563"} style={{ transition: "fill 0.4s ease" }}
        d="M106.5 35.7c.1.4.1.9.1 1.4v26.5c0 1.7-.9 3.3-2.4 4.2L83.5 79.9v21c0 1.7-.9 3.3-2.4 4.2l-41.8 24c-.2.1-.5.2-.7.3-.1 0-.2.1-.3.1-.5.1-1 .1-1.5 0-.1 0-.2-.1-.3-.1-.3-.1-.5-.2-.8-.3L4.8 105.1C3.3 104.2 2.4 102.6 2.4 101V27.5c0-.5 0-.9.1-1.4.1-.3.2-.5.3-.8.1-.1.1-.2.1-.3.2-.3.4-.5.6-.8.1-.1.3-.2.4-.3.2-.1.3-.3.5-.3L45.4 1.3c1.5-.9 3.3-.9 4.8 0l41.5 23.9c.2.1.3.2.5.3.1.1.3.2.4.3.2.2.4.5.6.8 0 .1.1.2.1.3.1.2.2.5.3.8z" />
      <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M104.1 35.1L62.7 58.9 21.2 35.1 62.6 11.2l41.5 23.9zM60.3 62.1v47.8L21.2 87.1V39.3l39.1 22.8zm4.8 47.8V62.1l39.1-22.8v47.8L65.1 109.9z" />
    </svg>
  ),

  GitHub: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill={hovered ? "#ffffff" : "#6B7280"} style={{ transition: "fill 0.4s ease" }}
        d="M64 5.1C31.5 5.1 5.1 31.5 5.1 64c0 26 16.9 48.1 40.3 55.9 2.9.5 4-1.3 4-2.8 0-1.4-.1-6-.1-10.9-16.4 3.6-19.8-7-19.8-7-2.7-6.8-6.6-8.6-6.6-8.6-5.4-3.7.4-3.6.4-3.6 5.9.4 9.1 6.1 9.1 6.1 5.3 9.1 13.9 6.4 17.3 4.9.5-3.8 2.1-6.4 3.8-7.9-13.1-1.5-26.8-6.5-26.8-29.1 0-6.4 2.3-11.7 6.1-15.8-.6-1.5-2.6-7.5.6-15.6 0 0 5-1.6 16.3 6.1 4.7-1.3 9.8-2 14.8-2s10.1.7 14.8 2c11.3-7.7 16.3-6.1 16.3-6.1 3.2 8.1 1.2 14.1.6 15.6 3.8 4.1 6.1 9.4 6.1 15.8 0 22.6-13.8 27.6-26.9 29 2.1 1.8 4 5.4 4 10.9 0 7.9-.1 14.2-.1 16.1 0 1.6 1.1 3.4 4 2.8C106 112.1 122.9 90 122.9 64c0-32.5-26.4-58.9-58.9-58.9z" />
    </svg>
  ),

  FastAPI: ({ hovered }) => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <circle cx="64" cy="64" r="60" fill={hovered ? "#009688" : "#374151"}
        style={{ transition: "fill 0.4s ease" }} />
      <path fill={hovered ? "#ffffff" : "#9CA3AF"} style={{ transition: "fill 0.4s ease" }}
        d="M72 22L34 72h36l-14 34 44-56H64z" />
    </svg>
  ),
};

// ─── Skills Data ──────────────────────────────────────────────────────────────

const skillsData = [
  // ── Existing ────────────────────────────────────────────────────────────────
  { name: "JavaScript",  level: 90, color: "from-yellow-400 to-yellow-600",  hoverBorder: "hover:border-yellow-500/50",  hoverShadow: "hover:shadow-yellow-500/20",  hoverText: "group-hover:text-yellow-400",  barColor: "from-yellow-400 to-yellow-600",  category: "Language"  },
  // { name: "React",       level: 85, color: "from-cyan-400 to-cyan-600",      hoverBorder: "hover:border-cyan-500/50",    hoverShadow: "hover:shadow-cyan-500/20",    hoverText: "group-hover:text-cyan-400",    barColor: "from-cyan-400 to-cyan-600",      category: "Frontend"  },
  { name: "Next.js",     level: 80, color: "from-gray-200 to-gray-400",      hoverBorder: "hover:border-gray-300/50",    hoverShadow: "hover:shadow-white/10",       hoverText: "group-hover:text-gray-200",    barColor: "from-gray-300 to-gray-500",      category: "Framework" },
  { name: "Node.js",     level: 75, color: "from-green-400 to-green-600",    hoverBorder: "hover:border-green-500/50",   hoverShadow: "hover:shadow-green-500/20",   hoverText: "group-hover:text-green-400",   barColor: "from-green-400 to-green-600",    category: "Backend"   },
  { name: "CSS/SCSS",    level: 85, color: "from-blue-400 to-blue-500",      hoverBorder: "hover:border-blue-400/50",    hoverShadow: "hover:shadow-blue-400/20",    hoverText: "group-hover:text-blue-400",    barColor: "from-blue-400 to-blue-600",      category: "Styling"   },
  { name: "TypeScript",  level: 70, color: "from-blue-500 to-blue-700",      hoverBorder: "hover:border-blue-600/50",    hoverShadow: "hover:shadow-blue-600/20",    hoverText: "group-hover:text-blue-500",    barColor: "from-blue-500 to-blue-700",      category: "Language"  },
  { name: ".NET",        level: 78, color: "from-purple-400 to-purple-600",  hoverBorder: "hover:border-purple-500/50",  hoverShadow: "hover:shadow-purple-500/20",  hoverText: "group-hover:text-purple-400",  barColor: "from-purple-400 to-purple-600",  category: "Framework" },
  { name: "Oracle",      level: 72, color: "from-red-400 to-red-600",        hoverBorder: "hover:border-red-500/50",     hoverShadow: "hover:shadow-red-500/20",     hoverText: "group-hover:text-red-400",     barColor: "from-red-400 to-red-600",        category: "Database"  },
  { name: "SharePoint",  level: 68, color: "from-sky-400 to-sky-600",        hoverBorder: "hover:border-sky-500/50",     hoverShadow: "hover:shadow-sky-500/20",     hoverText: "group-hover:text-sky-400",     barColor: "from-sky-400 to-sky-600",        category: "Platform"  },

  // ── New ──────────────────────────────────────────────────────────────────────
  { name: "Java",        level: 80, color: "from-orange-500 to-red-500",     hoverBorder: "hover:border-orange-500/50",  hoverShadow: "hover:shadow-orange-500/20",  hoverText: "group-hover:text-orange-400",  barColor: "from-orange-400 to-red-500",     category: "Language"  },
  { name: "Spring Boot", level: 72, color: "from-green-500 to-green-700",    hoverBorder: "hover:border-green-600/50",   hoverShadow: "hover:shadow-green-600/20",   hoverText: "group-hover:text-green-500",   barColor: "from-green-500 to-green-700",    category: "Framework" },
  { name: "Azure",       level: 65, color: "from-blue-400 to-cyan-500",      hoverBorder: "hover:border-blue-400/50",    hoverShadow: "hover:shadow-blue-400/20",    hoverText: "group-hover:text-blue-300",    barColor: "from-blue-300 to-cyan-500",      category: "Cloud"     },
  { name: "MySQL",       level: 75, color: "from-orange-400 to-blue-600",    hoverBorder: "hover:border-orange-400/50",  hoverShadow: "hover:shadow-orange-400/20",  hoverText: "group-hover:text-orange-300",  barColor: "from-orange-400 to-blue-500",    category: "Database"  },
  // { name: "PHP",         level: 70, color: "from-indigo-400 to-indigo-600",  hoverBorder: "hover:border-indigo-500/50",  hoverShadow: "hover:shadow-indigo-500/20",  hoverText: "group-hover:text-indigo-400",  barColor: "from-indigo-400 to-indigo-600",  category: "Language"  },
  { name: "Laravel",     level: 68, color: "from-red-500 to-rose-600",       hoverBorder: "hover:border-red-500/50",     hoverShadow: "hover:shadow-red-500/20",     hoverText: "group-hover:text-red-400",     barColor: "from-red-400 to-rose-600",       category: "Framework" },
  { name: "GitHub",      level: 88, color: "from-gray-300 to-gray-500",      hoverBorder: "hover:border-gray-400/50",    hoverShadow: "hover:shadow-gray-400/20",    hoverText: "group-hover:text-gray-200",    barColor: "from-gray-300 to-gray-500",      category: "DevOps"    },
  { name: "FastAPI",     level: 65, color: "from-teal-400 to-emerald-500",   hoverBorder: "hover:border-teal-500/50",    hoverShadow: "hover:shadow-teal-500/20",    hoverText: "group-hover:text-teal-400",    barColor: "from-teal-400 to-emerald-500",   category: "Backend"   },
];

// ─── Skill Card Component ─────────────────────────────────────────────────────

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = SkillIcons[skill.name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-gray-800/70 border border-gray-700/60 rounded-2xl p-5
        cursor-pointer transition-all duration-300 overflow-hidden
        hover:-translate-y-2 hover:shadow-xl ${skill.hoverBorder} ${skill.hoverShadow}`}
    >
      {/* Hover background tint */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color}
        opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500
        rounded-2xl pointer-events-none`} />

      {/* Top shimmer on hover */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r
        from-transparent via-gray-400 to-transparent
        opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

      {/* Icon + Badge */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl
          bg-gray-900/80 border border-gray-700 transition-all duration-300
          group-hover:scale-110 group-hover:border-gray-500"
        >
          {IconComponent ? (
            <IconComponent hovered={hovered} />
          ) : (
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center
              font-bold text-xl transition-all duration-300
              ${hovered
                ? `bg-gradient-to-br ${skill.color} text-white`
                : "bg-gray-700 text-gray-400"
              }`}>
              {skill.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Category badge */}
        <span className={`text-[10px] font-semibold tracking-wider uppercase
          px-2.5 py-1 rounded-full border transition-all duration-300
          ${hovered
            ? `bg-gray-800 ${skill.hoverText.replace("group-hover:", "")} border-current opacity-100`
            : "bg-gray-900/80 text-gray-500 border-gray-700/60 opacity-70"
          }`}
        >
          {skill.category}
        </span>
      </div>

      {/* Skill name */}
      <h4 className={`font-semibold text-sm mb-4 transition-colors duration-300
        ${hovered ? "text-white" : "text-gray-400"}`}>
        {skill.name}
      </h4>

      {/* Progress */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className={`text-[10px] uppercase tracking-wider transition-colors duration-300
            ${hovered ? "text-gray-400" : "text-gray-600"}`}>
            Proficiency
          </span>
          <span className={`text-[11px] font-bold transition-all duration-300
            ${hovered
              ? `${skill.hoverText.replace("group-hover:", "")} opacity-100`
              : "opacity-0 text-gray-500"
            }`}>
            {skill.level}%
          </span>
        </div>
        <div className="h-1 w-full bg-gray-700/80 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: "easeOut" }}
            className={`h-full rounded-full transition-all duration-500
              ${hovered ? `bg-gradient-to-r ${skill.barColor}` : "bg-gray-600"}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function About() {
  const experiences = [
    { title: "Trainee Software Engineer",               company: "FlexiMal Pty Ltd.",                               period: "2026 - Present",        type: "work" },
    { title: "Intern Software Engineer",                company: "Ceylinco General Insurance Limited.",             period: "Feb 2025 - Nov 2025",   type: "work" },
    { title: "BSc (Hons) Software Engineering (First Class)", company: "University of Bedfordshire, UK",            period: "09/2024 – 06/2025",     type: "education" },
    { title: "Graduate Diploma in Software Engineering", company: "Institute of Software Engineering (IJSE)",      period: "2022 - 2024",           type: "education" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="text-blue-400 font-mono text-xs tracking-[4px] uppercase mb-3 block">Get to know me</span>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Profile + Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">

          {/* Profile */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-10">
              <div className="w-52 h-52 rounded-2xl overflow-hidden border border-gray-700 relative">
                <Image src="/images/profile.png" alt="Udith Weerakkody" fill className="object-cover" sizes="208px" />
              </div>
              <div className="absolute -top-2 -left-2 w-7 h-7 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-7 h-7 border-t-2 border-r-2 border-blue-500 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-7 h-7 border-b-2 border-l-2 border-purple-500 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 border-b-2 border-r-2 border-purple-500 rounded-br-lg" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 whitespace-nowrap shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-300 text-xs font-medium">Available for work</span>
              </div>
            </div>

            <div className="text-gray-400 text-sm leading-relaxed space-y-3 mt-2">
              <p>Graduate Software Engineer with a <span className="text-white font-medium">First Class Honours</span> degree from the University of Bedfordshire. Over 3 years of hands-on development experience.</p>
              <p>Currently specializing in <span className="text-blue-400 font-medium">.NET MVC</span> and <span className="text-blue-400 font-medium">Oracle Database</span>, passionate about scalable, efficient solutions.</p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-blue-500" />Experience & Education
            </h3>
            <div className="relative space-y-0">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-700" />
              {experiences.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.12 }}
                  className="relative pl-7 pb-8 group"
                >
                  <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 z-10 transition-all duration-300
                    ${exp.type === "work"
                      ? "bg-blue-500 border-blue-500 group-hover:shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]"
                      : "bg-purple-500 border-purple-500 group-hover:shadow-[0_0_8px_2px_rgba(168,85,247,0.5)]"}`}
                  />
                  <span className={`inline-flex items-center gap-1 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full mb-1.5
                    ${exp.type === "work"
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "bg-purple-500/10 text-purple-400 border border-purple-500/20"}`}
                  >
                    {exp.type === "work" ? "💼 Work" : "🎓 Education"}
                  </span>
                  <h4 className="text-white font-semibold text-sm leading-snug mb-1">{exp.title}</h4>
                  <p className="text-gray-500 text-xs mb-0.5">{exp.company}</p>
                  <span className="text-gray-600 text-[11px] font-mono">{exp.period}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-3">
            <span className="w-6 h-px bg-purple-500" />Skills & Technologies
          </h3>
          <p className="text-gray-600 text-xs mb-8 pl-9 font-mono">— hover each card to explore</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skillsData.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}