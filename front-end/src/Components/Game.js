const Game = ({game, id}) => {
    return (
        <>
            <tr>
                <td>{game.is_favorite ? <span className="glow">⭐️</span> : null}<a href={`/games/${id}`}>{game.name}</a></td>
                <td>{game.console}</td>
                <td>{game.progress}</td>
                <td>{game.rating}</td>
            </tr>
        </>
    );
};

export default Game;