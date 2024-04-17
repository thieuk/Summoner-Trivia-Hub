import Instruction from "@/components/Instruction";

export default function Game({params}) {
  return (
    <div className="bg-gradient">
      <Instruction game={params.game} />
    </div>
  );
}