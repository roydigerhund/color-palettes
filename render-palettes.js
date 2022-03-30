const camelCaseToSpaceCase = (value) =>
  value.substr(0, 1).toUpperCase() +
  value.substr(1).replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ");

const element = (
  <div className="grid grid-cols-1 gap-8 mt-12">
    {Object.entries(colorPalettes).map(([name, palette]) => (
      <div
        key={name}
        className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
      >
        <div className="w-16 shrink-0">
          <div className="h-10 flex flex-col justify-center">
            <div className="text-sm font-semibold text-slate-900">
              {camelCaseToSpaceCase(name)}
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-1 grid grid-cols-5 lg:grid-cols-10 gap-x-4 gap-y-3 lg:gap-x-2">
          {Object.entries(palette).map(([key, value]) => (
            <div key={key} className="space-y-1.5">
              <div
                className="h-10 w-full rounded"
                style={{ backgroundColor: value }}
              ></div>
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 lg:space-x-0 lg:block">
                <div className="w-6 font-medium text-slate-900 lg:w-full">
                  {key}
                </div>
                <div className="text-slate-500 font-mono lowercase">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
