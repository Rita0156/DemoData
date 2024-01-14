function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPage,handlePageChange,currentPage}) {
  arr=createArrayOfSize(totalPage)
  let pages = arr.map((a, i) => <button onClick={() => handlePageChange(i+1)} disabled={currentPage === i + 1} data-testid="page-btn">{i+1}</button>);
  return <div>{pages}</div>;
}

export default Pagination;
