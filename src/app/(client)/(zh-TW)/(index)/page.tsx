import { Block01 } from "./_components/block-01";
import { Block02 } from "./_components/block-02";
import { Block03 } from "./_components/block-03";
import { Block04 } from "./_components/block-04";
import { Block05 } from "./_components/block-05";

export default function Page() {
  return (
    <div className="h-dvh overflow-hidden">
      <div className="h-full overflow-y-scroll [&>section]:h-dvh">
        <Block01 />
        <Block02 />
        <Block03 />
        <Block04 />
        <Block05 />
      </div>
    </div>
  );
}
