interface HashtagProps {
  text: string;
}

export default function Hashtag({ text }: HashtagProps) {
  return (
    <>
      <span className="px-3 py-1 border border-black text-sm whitespace-nowrap">
        #{text}
      </span>
    </>
  );
}
