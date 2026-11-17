import type { Metadata } from "next";
import { PageFlipper } from "./_components/page-flipper";
import { Questionnaire } from "./_components/questionnaire";

export const metadata: Metadata = {
  title: "Transparent Echoes | Gôo tsong-tāi",
};

/** 每一頁的底色，由淺到深 */
const PAGE_COLORS = ["#E1E1E1", "#C5C5C5", "#A8A8A8", "#8C8C8C", "#6F6F6F"];

/** 目前開放的頁數：其他頁先隱藏，之後要開放再把數字調大 */
const VISIBLE_PAGES = 1;

export default function TransparentEchosPage() {
  return (
    <PageFlipper>
      {PAGE_COLORS.slice(0, VISIBLE_PAGES).map((color, i) => (
        <section
          key={color}
          className="h-full w-full"
          style={{ backgroundColor: color }}
        >
          {i === 0 && <Questionnaire />}
        </section>
      ))}
    </PageFlipper>
  );
}
