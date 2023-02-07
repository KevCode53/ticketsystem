export const columns = [
  {
    Header: "Identifier",
    accessor: "id",
    // Cell:({value}) => <strong>{value}</strong>
  },
  {
    Header: "State",
    accessor: "state",
    // Cell:({value}) => <strong>{value}</strong>
  },
  {
    Header: "Service",
    accessor: "service",
    // Cell:({value}) => <strong>{value}</strong>
  },
  {
    Header: "Requesting By",
    accessor: "requesting_by.username",
    // Cell:({value}) => <strong>{value}</strong>
  }
]