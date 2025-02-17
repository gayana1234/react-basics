import { useSelector } from "react-redux";

const SpaceTable = () => {
  const space = useSelector((state) => state.spaceData);
  console.log(space, "spacespacespace");
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Flight Number</th>
            <th> Mission Name</th>
            <th> Launch year</th>
          </tr>
        </thead>

        <tbody>
          {space.data.map((arr) => {
            return (
              <tr>
                <td> {arr.flight_number}</td>
                <td> {arr.mission_name}</td>
                <td> {arr.launch_year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SpaceTable;
