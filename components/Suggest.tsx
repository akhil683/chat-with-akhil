import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Suggest() {
  return (
    <>
      <Link href={"/suggest"} className="cursor-pointer">
        <Button className="fixed right-2 top-2 z-30 md:right-8 md:top-8 shadow-lg shadow-black">
          <MessageCircle />
        </Button>
      </Link>
    </>
  )
}
