function TableRow({title, info}) {
  return (  
    <tr>
      <td className="text-gray-600 pr-8 py-0.5">{title}:</td>
      <td>{info}</td>
    </tr>
  );
}

export default TableRow;