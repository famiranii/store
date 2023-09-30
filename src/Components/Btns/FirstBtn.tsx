type FirstBtnProps = {
  disable: boolean;
};

export default function FirstBtn({ disable }: FirstBtnProps) {
  return (
    <div>
      <button
        disabled={disable}
        className={`mt-7 bg-orange-700 text-white px-5 py-2 rounded w-full ${
          disable && "bg-gray-400"
        }`}
      >
        submit
      </button>
    </div>
  );
}
