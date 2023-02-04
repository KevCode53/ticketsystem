export type TableProps = {
  data: any[],
  fetchData: (pageIndex: number) => Promise<any>,
  columns: any[],
  pageCount: number
}