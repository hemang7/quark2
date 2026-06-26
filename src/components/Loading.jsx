import React from "react";
import giphy from "../assets/giphy.gif";

function Loading() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white"
      style={{ height: "100vh", gap: "1.25rem" }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          padding: "1rem",
        }}
      >
        <img src={giphy} alt="Loading" className="w-16 h-16 object-cover rounded-xl" />
      </div>
      <p
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#94A3B8",
        }}
      >
        Loading…
      </p>
    </div>
  );
}

export default Loading;
