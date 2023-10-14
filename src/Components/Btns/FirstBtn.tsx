type FirstBtnProps = {
  type: "button" | "submit" | "reset" | undefined;
  disable: boolean;
};

export default function FirstBtn({ type, disable }: FirstBtnProps) {
  return (
    <div>
      <button
        type={type}
        disabled={disable}
        className={`mt-7  text-white px-5 py-2 rounded w-full ${
          disable ? "bg-gray-400" : "bg-orange-700"
        }`}
      >
        submit
      </button>
    </div>
  );
}
