type FirstBtnProps = {
  disable: boolean;
};

export default function FirstBtn({ disable }: FirstBtnProps) {
  console.log(disable);

  return (
    <div>
      <button
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
