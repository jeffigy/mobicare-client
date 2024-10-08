const DetailsLoading = () => {
  return (
    <div className="w-full max-w-screen-md border border-gray-700">
      <DetailHeader name="Customer" />
      {[1, 2, 3].map((_, index) => (
        <DetailRow key={index} />
      ))}

      <DetailHeader name="Device" />
      {[1, 2, 3, 4].map((_, index) => (
        <DetailRow key={index} />
      ))}

      <DetailHeader name="Problem" />
      {[1, 2].map((_, index) => (
        <DetailRow key={index} />
      ))}

      <DetailHeader name="Images" />
      <DetailRow />

      <DetailHeader name="Other Details" />
      {[1, 2, 3].map((_, index) => (
        <DetailRow key={index} />
      ))}
    </div>
  );
};

const DetailRow = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-screen-sm justify-between border-b border-gray-700 px-3 py-2 md:px-0">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-full max-w-36"></div>
      </div>
    </div>
  );
};

const DetailHeader = ({ name }: { name: string }) => {
  return (
    <div className="w-full bg-secondary px-1 font-bold text-gray-700">
      {name}
    </div>
  );
};

export default DetailsLoading;
