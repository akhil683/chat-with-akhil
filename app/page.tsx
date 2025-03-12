import ModalChat from "@/components/ChatBox";
import Suggest from "@/components/Suggest";

export default function Home() {
  return (
    <section>
      <Suggest />
      <ModalChat />
    </section>
  );
}
