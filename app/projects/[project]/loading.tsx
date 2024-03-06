export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto lg:px-20 px-10">
      <div className="max-w-4xl ml-4 lg:ml-20 py-10">

        <div className="flex flex-col lg:flex-row items-center mb-6 space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="bg-purple-500 rounded-3xl w-40 h-40 lg:w-auto lg:h-auto animate-pulse"></div>
          <div className="flex flex-col space-y-4">
            <span className="w-52 h-11 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
            <span className="w-3/4 h-4 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
            <div className="flex space-x-4 mt-6">
              <span className="w-24 h-8 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
              <span className="w-24 h-8 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
              <span className="w-24 h-8 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
              <span className="w-24 h-8 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="w-32 h-6 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
          <div className="flex space-x-6 overflow-x-auto py-4 scrollbar-hide mt-6">
            <span className="w-40 h-72 dark:bg-primary-bg bg-zinc-200 rounded-xl animate-pulse"></span>
            <span className="w-40 h-72 dark:bg-primary-bg bg-zinc-200 rounded-xl animate-pulse"></span>
            <span className="w-40 h-72 dark:bg-primary-bg bg-zinc-200 rounded-xl animate-pulse"></span>
          </div>
        </div>

        <div className="mt-10">
          <span className="w-full h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
          <span className="w-full h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse mt-4"></span>
          <span className="w-2/3 h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse mt-4"></span>
        </div>

      </div>
    </div>
  );
}
