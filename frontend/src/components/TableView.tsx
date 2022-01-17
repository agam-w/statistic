import { Table } from 'react-bootstrap';

const tableData = [
  {
    salesman: 'aprima',
    year: 2000,
    sold: 200,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'agam',
    year: 2000,
    sold: 250,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'wardani',
    year: 2000,
    sold: 400,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'aprima',
    year: 2001,
    sold: 300,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'agam',
    year: 2001,
    sold: 150,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'wardani',
    year: 2001,
    sold: 200,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'aprima',
    year: 2002,
    sold: 500,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'agam',
    year: 2002,
    sold: 510,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'wardani',
    year: 2002,
    sold: 500,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'aprima',
    year: 2003,
    sold: 400,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'agam',
    year: 2003,
    sold: 750,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'wardani',
    year: 2003,
    sold: 500,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'aprima',
    year: 2004,
    sold: 700,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'agam',
    year: 2004,
    sold: 750,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'wardani',
    year: 2004,
    sold: 800,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'aprima',
    year: 2005,
    sold: 650,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'agam',
    year: 2005,
    sold: 850,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    salesman: 'wardani',
    year: 2005,
    sold: 450,
    created_at: new Date(),
    updated_at: new Date()
  }
];

const tableLabels = ['username', 'year', 'sold'];

export function TableView() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {tableLabels.map((label, index) => (
            <th key={index}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr>
            <td>{index + 1}</td>
            <td key={'salesman_' + index}>{data.salesman}</td>
            <td key={'year_' + index}>{data.year}</td>
            <td key={'sold_' + index}>{data.sold}</td>
          </tr>
        ))}
        {/* <tr>
          <td>1</td>
          {tableData.map((data, index) => (
            <td key={index}>
              {data.salesman} {index}
            </td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {tableData.map((data, index) => (
            <td key={index}>
              {data.year} {index}
            </td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {tableData.map((data, index) => (
            <td key={index}>
              {data.sold} {index}
            </td>
          ))}
        </tr> */}
      </tbody>
    </Table>
  );
}
