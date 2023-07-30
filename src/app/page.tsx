import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello
      <Link href="/todo">Todo Appへ</Link>
    </div>
  );
}
