type LoginLogutBtnProps = {
  text: string;
};

export default function LoginLogutBtn({ text }: LoginLogutBtnProps) {
  return <button className="border-2 border-red-700 px-4 py-1 text-red-700 rounded  text-sm">{text}</button>;
}
