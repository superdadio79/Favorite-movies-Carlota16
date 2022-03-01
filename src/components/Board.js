import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            <Note title="Taxie Driver" body= "Directed by Martin Scorsese, Taxie Driver is a Crime Drama aboiut a mentally unstable veteran working a nighttime job as a taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.  Rated R, Crime Drama, 1976"/>
            <Note title="Goodfellas" body="Directed by Martin Scorsese, it's The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.  Rated R, Biography, Crime Drama, 1990"/>
            <Note title="E.T. the Extra-Terrestrial" body="Directed by Steven Spielberg, A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.  Rated PG, Adventure, Family Sci-Fi, 1982"/>
            <Note title="Jaws" body="Directed by Steven Spielberg, When a killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.  Rated PG, Adventure, Thriller, 1975"/>
            <Note title="The Color Purple" body="Directed by Steven Spielberg, A black Southern woman struggles to find her identity after suffering abuse from her father and others over four decades.  Rated PG-13, Drama, 1985"/>
            <Note title="Full Metal Jacket" body="Directed by Stanley Kubrick, A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.  Rated R, Drama, War, 1987"/>
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

export default Board;