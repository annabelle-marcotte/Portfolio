import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");

        const handleMove = (e) => {
            cursor.style.top = e.clientY + "px";
            cursor.style.left = e.clientX + "px";

            const element = document.elementFromPoint(e.clientX, e.clientY);

            const link = element?.closest("a");
            if (link) {
                const rect = link.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;

                cursor.style.transform =
                    `translate(calc(-50% + ${(cx - e.clientX) * 0.2}px), calc(-50% + ${(cy - e.clientY) * 0.2}px)) scale(1.6)`;
            } else {
                cursor.style.transform = "translate(-50%, -50%) scale(1)";
            }

            if (element?.closest("header")) {
                cursor.style.background = "rgba(126,163,143,0.35)";
                cursor.style.border = "1px solid rgba(126,163,143,0.6)";
                return;
            }

            const section = element?.closest("section");
            if (!section) return;

            const whiteSections = ["home", "about", "education", "contacts"];
            const greenSections = ["skills", "footer"];
            const greenAreas = [
                ".meta-balls-test",
                ".meta-balls",
                ".meta-balls-contacts",
                ".education-grid",
                ".user-content",
                ".skill-box",
                ".about-picture",
                ".home-container"

            ];
            const whiteAreas = [
                ".section-skills",
                ".home-container button"
            ];
            if (whiteSections.includes(section.id)) {
                cursor.style.background = "rgba(126,163,143,0.35)";
                cursor.style.border = "1px solid rgba(126,163,143,0.6)";
            }
            else if (greenSections.includes(section.id)) {
                cursor.style.background = "rgba(255,255,255,0.35)";
                cursor.style.border = "1px solid rgba(255,255,255,0.6)";
            }
            if (whiteAreas.some(sel =>
                element.closest(sel) || element.matches(sel))) {
                cursor.style.background = "rgba(126,163,143,0.35)";
                cursor.style.border = "1px solid rgba(126,163,143,0.6)";
            }
            if (greenAreas.some(sel => element.closest(sel))) {
                cursor.style.background = "rgba(255,255,255,0.35)";
                cursor.style.border = "1px solid rgba(255,255,255,0.6)";
            }
        };
        document.addEventListener("mousemove", handleMove);
        return () => document.removeEventListener("mousemove", handleMove);
    }, []);

    return <div className="custom-cursor"></div>;
}
