const Game = ({ game }) => {
  const starRating = (num) => {
    switch (num) {
      case 1:
        return "⭐️";
      case 2:
        return "⭐️ ⭐️";
      case 3:
        return "⭐️ ⭐️ ⭐️";
      case 4:
        return "⭐️ ⭐️ ⭐️ ⭐️";
      case 5:
        return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
      default:
        return null;
    }
  };

  return (
    <>
      <tr>
        <td>
          {game.is_favorite ? (
            <img
              className="heart"
              src="https://bestanimations.com/media/hearts/1230084119pixel-heart-pink-animated-gif.gif"
              alt="heart-gif"
            />
          ) : null}
          <a href={`/games/${game.id}`}>{game.name}</a>
        </td>
        <td>{game.console}</td>
        <td>{game.progress}</td>
        <td>{starRating(game.rating)}</td>
      </tr>
    </>
  );
};

export default Game;
