const ResultTable = ({ results }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Degree Type</th>
            <th>Created Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {results.map((member, index) => (
            <tr key={index}>
              <td>{`${member.first_name} ${member.last_name}`}</td>
              <td>{new Date(member.dob).toLocaleDateString()}</td>
              <td>{member.degree_type}</td>
              <td>{new Date(member.creat_timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ResultTable;
  