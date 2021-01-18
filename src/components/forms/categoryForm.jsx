// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoryData } from '../../actions/vimActions';
import { categorySelector } from '../../selectors/categorySelector';

type Props = {
  getCategoryData: Function;
  categories: Object;
}
const CategoryForm = (props: Props) => {
  const { getCategoryData: getCategory, categories } = props;
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <ul>
        {
          categories && categories.map(category => (
            <li key={category.id}>
              <Link to={`/movies/category/${category.id}`} href="#0">{ category.name } Movies</Link>
            </li>
          )
          )
        }
      </ul>
    </>
  );
};

export default connect(categorySelector, { getCategoryData })(CategoryForm);
