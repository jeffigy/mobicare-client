const TableLoading = () => {
  return (
    <div className="card card-bordered w-full max-w-screen-lg bg-base-100 shadow">
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>
                {" "}
                <div className="skeleton h-8 w-full"></div>
              </th>
              <th>
                {" "}
                <div className="skeleton h-8 w-full"></div>
              </th>
              <th>
                {" "}
                <div className="skeleton h-8 w-full"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
              <tr
                className="hover:cursor-pointer hover:bg-base-200"
                key={index}
              >
                <td>
                  <div className="skeleton h-4 w-full"></div>
                </td>
                <td>
                  <div className="skeleton h-4 w-full"></div>
                </td>
                <td>
                  <div className="skeleton h-4 w-full"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableLoading;
