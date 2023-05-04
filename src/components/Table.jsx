import "./PriceStyle.css";

function Table({elem}) {
  return (
    <div>
      <div className="overflow-x-auto">
         
    <table className="table w-full border border-slate-400 border-spacing-2 md:table-fixed">
          <tbody>
           <tr>
                <th className="border border-slate-300">{elem.id}</th>
                <td className="border border-slate-300">{elem.name}</td>
                <td className="border border-slate-300">{elem.status}</td>
                <td className="border border-slate-300">{elem.species}</td>
            </tr>
          </tbody>
          </table>
      </div>
    </div>
  );
}

export default Table
