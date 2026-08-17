// "use client";

// import React, { useEffect, useState, useRef, useCallback } from "react";

// export default function LeftScrollbar() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [thumbHeight, setThumbHeight] = useState(70);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [winHeight, setWinHeight] = useState(0);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const dragStartY = useRef(0);
//   const dragStartScroll = useRef(0);

//   const updateScroll = useCallback(() => {
//     if (typeof window === "undefined") return;
//     const docHeight = document.documentElement.scrollHeight;
//     const currentWinHeight = window.innerHeight;
//     setWinHeight(currentWinHeight);
//     const maxScroll = docHeight - currentWinHeight;

//     if (maxScroll <= 0) {
//       setThumbHeight(currentWinHeight);
//       setScrollProgress(0);
//       return;
//     }

//     const calculatedThumbHeight = Math.max(
//       45,
//       Math.min(currentWinHeight * 0.7, (currentWinHeight / docHeight) * currentWinHeight)
//     );
//     setThumbHeight(calculatedThumbHeight);

//     const currentScroll = window.scrollY || document.documentElement.scrollTop;
//     const progress = Math.min(1, Math.max(0, currentScroll / maxScroll));
//     setScrollProgress(progress);
//   }, []);

//   useEffect(() => {
//     updateScroll();
//     window.addEventListener("scroll", updateScroll, { passive: true });
//     window.addEventListener("resize", updateScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", updateScroll);
//       window.removeEventListener("resize", updateScroll);
//     };
//   }, [updateScroll]);

//   const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!trackRef.current) return;
//     const rect = trackRef.current.getBoundingClientRect();
//     const clickY = e.clientY - rect.top;
//     const currentWinHeight = window.innerHeight;
//     const docHeight = document.documentElement.scrollHeight;
//     const maxScroll = docHeight - currentWinHeight;

//     const targetProgress = (clickY - thumbHeight / 2) / (currentWinHeight - thumbHeight);
//     const clampedProgress = Math.min(1, Math.max(0, targetProgress));
//     window.scrollTo({
//       top: clampedProgress * maxScroll,
//       behavior: "smooth",
//     });
//   };

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//     setIsDragging(true);
//     dragStartY.current = e.clientY;
//     dragStartScroll.current = window.scrollY || document.documentElement.scrollTop;
//   };

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isDragging) return;
//       const currentWinHeight = window.innerHeight;
//       const docHeight = document.documentElement.scrollHeight;
//       const maxScroll = docHeight - currentWinHeight;
//       const trackAvailableHeight = currentWinHeight - thumbHeight;

//       if (trackAvailableHeight <= 0) return;

//       const deltaY = e.clientY - dragStartY.current;
//       const deltaScroll = (deltaY / trackAvailableHeight) * maxScroll;

//       window.scrollTo({
//         top: Math.min(maxScroll, Math.max(0, dragStartScroll.current + deltaScroll)),
//         behavior: "auto",
//       });
//     };

//     const handleMouseUp = () => {
//       setIsDragging(false);
//     };

//     if (isDragging) {
//       document.body.style.userSelect = "none";
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", handleMouseUp);
//     } else {
//       document.body.style.userSelect = "";
//     }

//     return () => {
//       document.body.style.userSelect = "";
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDragging, thumbHeight]);

//   const availableTrackHeight = Math.max(0, (winHeight || 600) - thumbHeight);
//   const thumbTop = scrollProgress * availableTrackHeight;

//   return (
//     <div
//       ref={trackRef}
//       className={`left-scrollbar-track ${isHovered || isDragging ? "is-active" : ""}`}
//       onClick={handleTrackClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       aria-hidden="true"
//     >
//       <div
//         className="left-scrollbar-thumb"
//         style={{
//           height: `${thumbHeight}px`,
//           transform: `translateY(${thumbTop}px)`,
//         }}
//         onMouseDown={handleMouseDown}
//       />
//     </div>
//   );
// }
