import React from 'react';

const RatingStarForm = (props) => {
  const { checkedStar, ratingMovie, setCheckedStar, film, auth } = props;

  const rate = (data) => {
    setCheckedStar(data);
    ratingMovie({ rate: data, movieId: film.id, token: auth.token });
  };

  return (
    [...Array(10).keys()].map(i => {
      const index = i + 1;
      return (
        <div key={index} className="rating">
          <input
            checked={!!((checkedStar && checkedStar >= index))}
            type="radio" name={`rating-${index}`} id={`r${index}`}
            onClick={() => rate(index)}
            onChange={() => undefined}
          />
          <label htmlFor={`r${index}`} title={`${index}-star`} />
        </div>
      );
    }
    )
  );
};

export default RatingStarForm;
