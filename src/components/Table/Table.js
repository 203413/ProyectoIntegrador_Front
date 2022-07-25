export const Table = ({ iddatos='-', humedad='-', temp='-', h_suelo='-', n_agua='-', e_bomba='-', fecha='-' }) => {
    return (
        <tr key={iddatos}>
            <th>{iddatos}</th>
            <td>{humedad}</td>
            <td>{temp}</td>
            <td>{h_suelo}</td>
            <td>{n_agua}</td>
            <td>{e_bomba}</td>
            <td>{fecha}</td>
        </tr>
    )
}