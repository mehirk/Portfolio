"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorEnabled = useRef(true);

  useEffect(() => {
    // Add cursor-active class to HTML to hide default cursor
    document.documentElement.classList.add("cursor-active");
    
    // Detect mobile devices and disable cursor if needed
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (isMobile && cursorRef.current) {
      cursorRef.current.style.display = "none";
      document.documentElement.classList.remove("cursor-active");
      cursorEnabled.current = false;
      return;
    }
    
    let cursorInstance: any = null;
    
    // Import the library dynamically to avoid SSR issues
    import("custom-cursor.js").then(({ default: CustomCursorLib }) => {
      if (cursorRef.current) {
        cursorInstance = new CustomCursorLib(cursorRef.current, {
          hideTrueCursor: true,
          focusElements: [
            {
              selector: "a, button, [role='button'], [tabindex='0'], .cursor-pointer",
              focusClass: "cursor--focused",
            }
          ],
        });
        
        // Set starting position
        cursorInstance.setPosition(window.innerWidth / 2, window.innerHeight / 2);
        cursorInstance.initialize();
        
        // Force the true cursor to be hidden
        try {
          cursorInstance.hideTrueCursor();
          
          // Sometimes the library's hideTrueCursor doesn't work consistently
          // This ensures the cursor is always hidden
          const style = document.createElement('style');
          style.innerHTML = `* { cursor: none !important; }`;
          document.head.appendChild(style);
        } catch (error) {
          console.error("Error hiding true cursor:", error);
        }
      }
    }).catch(error => {
      console.error("Failed to load custom cursor:", error);
      document.documentElement.classList.remove("cursor-active");
    });
    
    // Clean up on unmount
    return () => {
      if (cursorInstance) {
        try {
          cursorInstance.destroy();
        } catch (e) {
          console.error("Error destroying cursor:", e);
        }
      }
      document.documentElement.classList.remove("cursor-active");
    };
    
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      <div className="cursor-outer-circle"></div>
      <div className="cursor-middle-circle"></div>
      <div className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor; 