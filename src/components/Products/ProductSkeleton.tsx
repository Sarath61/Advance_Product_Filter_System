const ProductSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div
        className="aspect-square w-full overflow-hidden rounded-md
            bg-gray-200 lg:aspedct-none lg:h-80"
      >
        <div className="h-full w-full bg-gray-200" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="bg-gray-200 h-4 w-20 rounded-md"></div>
          <div className="bg-gray-200 h-4 w-5 rounded-md"></div>
        </div>
        <div className="bg-gray-200 h-4 w-full rounded-md"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
